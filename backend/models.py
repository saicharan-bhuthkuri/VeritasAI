from pydantic import BaseModel
from typing import List, Dict, Optional

class TextRequest(BaseModel):
    text: str

class MetricDetail(BaseModel):
    name: str
    value: float
    description: str
    status: str  # "Normal", "Suspicious", "Likely AI"

class AnalysisResult(BaseModel):
    overall_score: float  # 0 to 100, where 100 is highly likely AI
    verdict: str
    details: List[MetricDetail]
    sentences: List[Dict[str, object]]  # For highlighting, e.g., {"text": "...", "score": 0.9}
