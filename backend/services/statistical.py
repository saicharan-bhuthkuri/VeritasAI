import torch
from transformers import GPT2LMHeadModel, GPT2TokenizerFast
import math

class StatisticalAnalyzer:
    def __init__(self):
        self.device = "cuda" if torch.cuda.is_available() else "cpu"
        self.model_id = "distilgpt2"
        # We load lazily to avoid heavy startup if not used immediately
        self.model = None
        self.tokenizer = None

    def _load_model(self):
        if not self.model:
            print("Loading GPT2 for perplexity analysis...")
            self.model = GPT2LMHeadModel.from_pretrained(self.model_id).to(self.device)
            self.tokenizer = GPT2TokenizerFast.from_pretrained(self.model_id)

    def calculate_perplexity(self, text: str):
        self._load_model()
        encodings = self.tokenizer(text, return_tensors="pt")
        max_length = self.model.config.n_positions
        stride = 512
        seq_len = encodings.input_ids.size(1)

        nlls = []
        prev_end_loc = 0
        for begin_loc in range(0, seq_len, stride):
            end_loc = min(begin_loc + max_length, seq_len)
            trg_len = end_loc - prev_end_loc 
            input_ids = encodings.input_ids[:, begin_loc:end_loc].to(self.device)
            target_ids = input_ids.clone()
            target_ids[:, :-trg_len] = -100

            with torch.no_grad():
                outputs = self.model(input_ids, labels=target_ids)
                neg_log_likelihood = outputs.loss

            nlls.append(neg_log_likelihood)
            prev_end_loc = end_loc
            if end_loc == seq_len:
                break

        ppl = torch.exp(torch.stack(nlls).mean())
        return ppl.item()

# Global instance for singleton usage
_stat_analyzer = StatisticalAnalyzer()

def analyze_statistics(text: str):
    # Use the global instance so model stays loaded in memory
    return _stat_analyzer.calculate_perplexity_metrics(text)

# Helper method added to class to return dict structure
def calculate_perplexity_metrics(self, text: str):
    # Calculate overall perplexity
    ppl = self.calculate_perplexity(text)
    
    # Calculate Burstiness (Standard Deviation of Perplexity across sentences)
    sentences = [s.strip() for s in text.replace('!', '.').replace('?', '.').split('.') if len(s.strip()) > 10]
    
    burstiness_score = 0
    if sentences:
        sentence_ppls = []
        for sentence in sentences:
            s_ppl = self.calculate_perplexity(sentence)
            sentence_ppls.append(s_ppl)
        
        if len(sentence_ppls) > 1:
            # Calculate Standard Deviation
            avg_ppl = sum(sentence_ppls) / len(sentence_ppls)
            variance = sum((x - avg_ppl) ** 2 for x in sentence_ppls) / len(sentence_ppls)
            std_dev = math.sqrt(variance)
            burstiness_score = std_dev
        else:
            burstiness_score = 0
    
    # Scoring Logic
    # Humans have high perplexity and high burstiness (variation).
    # AI has low perplexity and low burstiness (uniformity).
    
    score = 0
    status = "Human-like"
    
    # Perplexity Contribution
    if ppl < 60:
        score += 50
    elif ppl < 90:
        score += 30
        
    # Burstiness Contribution
    # Low burstiness means uniform complexity -> likely AI
    if burstiness_score < 20: 
        score += 30 # Penalty for being too uniform
    elif burstiness_score > 40:
        score -= 20 # Reward for high variation
        
    # Normalize score to 0-100 roughly
    final_score = min(score, 100)
    
    if final_score > 70:
        status = "Low Variation (Likely AI)"
    elif final_score > 40:
        status = "Medium Variation"
    else:
        status = "High Variation (Likey Human)"
        
    return {
        "perplexity": ppl,
        "burstiness": burstiness_score,
        "score_contribution": final_score,
        "status": status
    }
StatisticalAnalyzer.calculate_perplexity_metrics = calculate_perplexity_metrics
