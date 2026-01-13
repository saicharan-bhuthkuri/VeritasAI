import re
from typing import List

def calculate_ttr(text: str) -> float:
    """Type-Token Ratio: Measure of vocabulary richness."""
    words = re.findall(r'\b\w+\b', text.lower())
    if not words:
        return 0.0
    unique_words = set(words)
    return len(unique_words) / len(words)

def average_sentence_length(text: str) -> float:
    sentences = re.split(r'[.!?]+', text)
    sentences = [s.strip() for s in sentences if s.strip()]
    if not sentences:
        return 0.0
    
    words = re.findall(r'\b\w+\b', text)
    return len(words) / len(sentences)

def calculate_readability(text: str) -> float:
    # Automated Readability Index (ARI)
    # 4.71 * (characters/words) + 0.5 * (words/sentences) - 21.43
    words = re.findall(r'\b\w+\b', text)
    sentences = re.split(r'[.!?]+', text)
    sentences = [s.strip() for s in sentences if s.strip()]
    
    if not words or not sentences:
        return 0.0
        
    char_count = sum(len(w) for w in words)
    word_count = len(words)
    sentence_count = len(sentences)
    
    ari = 4.71 * (char_count / word_count) + 0.5 * (word_count / sentence_count) - 21.43
    return ari

def analyze_linguistic_features(text: str) -> dict:
    ttr = calculate_ttr(text)
    avg_len = average_sentence_length(text)
    ari = calculate_readability(text)
    
    score = 0
    status = "Normal"
    
    # AI tends to have "average" readability (8-12). 
    # Very simple (<6) or very complex (>14) is often human.
    if 8 <= ari <= 12:
        score += 30
    elif ari > 14: 
        score -= 20 # Human academic/complex
        status = "Complex (Human-like)"
    elif ari < 6:
        score -= 10 # Human simple/informal
        status = "Simple (Human-like)"

    if ttr < 0.35: 
        score += 30
        status = "Repetitive (AI-like)"
    
    return {
        "ttr": ttr,
        "readability_score": ari,
        "avg_sentence_len": avg_len,
        "score_contribution": score,
        "primary_trait": status
    }
