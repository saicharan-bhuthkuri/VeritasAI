import React from 'react';

const Product: React.FC = () => {
    return (
        <div className="w-full max-w-5xl mx-auto px-6 py-12 animate-slide-up">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                    Advanced AI Detection Technology
                </h1>
                <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                    Our multi-layered analysis engine combines statistical modeling with deep learning to deliver the industry's most accurate results.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-100 transition-all">
                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                            <span className="text-2xl">🧠</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-2">Linguistic Analysis</h3>
                        <p className="text-slate-600">
                            We analyze syntax patterns, perplexity, and burstiness to identify machine-generated structures that differ from human writing.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-100 transition-all">
                        <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-4">
                            <span className="text-2xl">🛡️</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-2">Model Fingerprinting</h3>
                        <p className="text-slate-600">
                            Our database is constantly updated to recognize the signatures of the latest models including GPT-4o, Claude 3.5, and Gemini Pro.
                        </p>
                    </div>
                </div>
                <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden flex flex-col justify-center">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-20"></div>
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold mb-4">Detects:</h3>
                        <ul className="space-y-3 text-slate-300">
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                                ChatGPT (All versions)
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                                Claude & Anthropic Models
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                                Google Gemini & Bard
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                                Meta Llama 3
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                                Mixed/Paraphrased Content
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
