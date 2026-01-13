from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import uvicorn

from models import TextRequest, AnalysisResult, MetricDetail
from services.statistical import analyze_statistics
from services.linguistic import analyze_linguistic_features
from services.model import analyze_with_model

app = FastAPI(title="AI Text Detector API", version="1.0.0")

# Allow CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, restrict this
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/analyze", response_model=AnalysisResult)
async def analyze_text(request: TextRequest):
    text = request.text
    if not text.strip():
        raise HTTPException(status_code=400, detail="Text cannot be empty")

    # Run analyses
    # In production, run these in parallel utilizing asyncio or separate workers
    
    # 1. Statistical (Perplexity)
    stat_res = analyze_statistics(text)
    
    # 2. Linguistic
    ling_res = analyze_linguistic_features(text)
    
    # 3. Deep Learning Model
    model_res = analyze_with_model(text)
    
    # Aggregation Logic
    # Weighted average or voting system
    # Weights: Model (50%), Statistics (30%), Linguistics (20%)
    
    model_score = model_res['ai_probability'] * 100
    stat_score = stat_res['score_contribution']
    ling_score = ling_res['score_contribution']
    
    overall_score = (model_score * 0.5) + (stat_score * 0.3) + (ling_score * 0.2)
    
    # Determine verdict
    if overall_score > 80:
        verdict = "Highly Likely AI-Generated"
    elif overall_score > 50:
        verdict = "Possibly AI-Generated"
    elif overall_score > 30:
        verdict = "Mixed Signals (Unsure)"
    else:
        verdict = "Likely Human-Written"
        
    # Construct Details
    details = [
        MetricDetail(
            name="Deep Learning Confidence",
            value=round(model_score, 2),
            description=f"Model detected as {model_res['raw_label']}",
            status="Likely AI" if model_score > 50 else "Likely Human"
        ),
        MetricDetail(
            name="Perplexity Score",
            value=round(stat_res['perplexity'], 2),
            description="Lower perplexity indicates more predictable (AI) text",
            status=stat_res['status']
        ),
        MetricDetail(
            name="Burstiness (Variation)",
            value=round(stat_res['burstiness'], 2),
            description="Variability in sentence complexity. AI is often uniform (low).",
            status="Likely AI" if stat_res['burstiness'] < 20 else "Likely Human"
        ),
        MetricDetail(
            name="Readability (ARI)",
            value=round(ling_res['readability_score'], 1),
            description="Score ~10 is standard AI. Very high/low is Human.",
            status="Likely AI" if 8 <= ling_res['readability_score'] <= 12 else "Likely Human"
        ),
        MetricDetail(
            name="Vocabulary Richness (TTR)",
            value=round(ling_res['ttr'], 2),
            description="Type-Token Ratio",
            status=ling_res['primary_trait']
        )
    ]

    return AnalysisResult(
        overall_score=round(overall_score, 2),
        verdict=verdict,
        details=details,
        sentences=[] # Todo: implement sentence-level highlighting
    )

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
