# VeritasAI - AI Text Detector

A modern, professional AI Text Detection application that uses a multi-layered approach (Statistical, Linguistic, and Deep Learning models) to identify AI-generated content.

## Features

- **Multi-Model Analysis**: Combines Perplexity (Burstiness), Linguistic patterns, and Transformer-based detection.
- **Modern UI/UX**: Professional, glassmorphism-inspired design with a responsive layout.
- **Real-time Scoring**: Instant analysis with detailed metric breakdowns.
- **PDF Reports**: downloadable, branded verification reports.
- **Secure**: Privacy-focused analysis.

## Project Structure

- **frontend/**: React + Vite + Tailwind CSS application.
- **backend/**: FastAPI Python server with PyTorch/Transformers.

## Prerequisites

- **Node.js** (v18+)
- **Python** (v3.9+)
- **Git**

## Setup & Installation

### 1. Clone the repository
```bash
git clone <repository_url>
cd "AI Text Detector"
```

### 2. Backend Setup
Navigate to the backend directory and creates a virtual environment.

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python -m spacy download en_core_web_sm
```

### 3. Frontend Setup
Navigate to the frontend directory and install dependencies.

```bash
cd frontend
npm install
```

## Running the Application

### One-Click Start (Windows)
Simply run the `start_all.bat` script in the root directory.
```bash
.\start_all.bat
```
This will launch both the backend (Port 8000) and frontend (Port 5173).

### Manual Start

**Backend:**
```bash
cd backend
venv\Scripts\activate
uvicorn main:app --reload
```

**Frontend:**
```bash
cd frontend
npm run dev
```

## Usage

1. Open your browser to `http://localhost:5173`.
2. Paste text into the analysis box (min 50 characters).
3. Click **Analyze Text**.
4. View the Verdict, Probability Score, and detailed metrics.
5. Click **Download Report** to get a PDF certificate.

## Technologies

- **Frontend**: React, TypeScript, TailwindCSS, Framer Motion, Recharts, jsPDF.
- **Backend**: FastAPI, PyTorch, HuggingFace Transformers (GPT-2, RoBERTa), spaCy, NLTK.

## License

[MIT](LICENSE)
