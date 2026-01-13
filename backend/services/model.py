from transformers import pipeline
import torch

class AIModelDetector:
    def __init__(self):
        self.device = 0 if torch.cuda.is_available() else -1
        # Using a standard detector model. In a real production scenario, 
        # we would fine-tune this further or host it separately.
        self.model_name = "roberta-base-openai-detector" 
        self.classifier = None

    def _load_model(self):
        if not self.classifier:
            print(f"Loading {self.model_name}...")
            try:
                self.classifier = pipeline(
                    "text-classification", 
                    model=self.model_name, 
                    device=self.device,
                    truncation=True,
                    max_length=512
                )
            except Exception as e:
                print(f"Error loading model: {e}")
                # Fallback or error handling
                self.classifier = None
    
    def analyze_text(self, text: str):
        self._load_model()
        if not self.classifier:
            return {"score": 0.5, "label": "Unknown (Model Load Error)"}
        
        # The model returns label 'Real' or 'Fake' (or similar depending on specific model)
        result = self.classifier(text)[0]
        # Normalize to AI probability
        label = result['label']
        score = result['score']
        
        # OpenAI detector: 'Fake' = AI-generated, 'Real' = Human
        ai_probability = score if label == 'Fake' else (1 - score)
        
        return {
            "ai_probability": ai_probability,
            "raw_label": label,
            "confidence": score
        }

# Global instance
_model_detector = AIModelDetector()

def analyze_with_model(text: str):
    # Use global instance to persist model in memory
    return _model_detector.analyze_text(text)
