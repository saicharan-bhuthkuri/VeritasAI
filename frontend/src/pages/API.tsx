import React from 'react';

const API: React.FC = () => {
    return (
        <div className="w-full max-w-4xl mx-auto px-6 py-12 animate-slide-up">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                    Developer API
                </h1>
                <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                    Integrate our detection engine directly into your applications.
                </p>
            </div>

            <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
                <div className="flex border-b border-slate-800 bg-slate-950/50">
                    <div className="px-6 py-4 text-sm font-mono text-blue-400 border-b-2 border-blue-400">
                        POST /v1/analyze
                    </div>
                </div>
                <div className="p-8 font-mono text-sm leading-relaxed overflow-x-auto">
                    <div className="text-slate-400 mb-4">// Request Example</div>
                    <pre className="text-emerald-400">
                        {`curl -X POST https://api.veritas.ai/v1/analyze \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "text": "The quick brown fox jumps over the lazy dog."
  }'`}
                    </pre>

                    <div className="text-slate-400 mt-8 mb-4">// Response Example</div>
                    <pre className="text-blue-300">
                        {`{
  "id": "ant_123456789",
  "score": 0,
  "verdict": "Human Written",
  "confidence": 0.99,
  "processing_time": "0.12s"
}`}
                    </pre>
                </div>
            </div>

            <div className="mt-12 text-center">
                <button className="px-8 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors">
                    Get API Keys
                </button>
            </div>
        </div>
    );
};

export default API;
