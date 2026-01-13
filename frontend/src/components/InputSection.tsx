import React, { useState } from 'react';

interface InputSectionProps {
    onAnalyze: (text: string) => void;
    isLoading: boolean;
}

const InputSection: React.FC<InputSectionProps> = ({ onAnalyze, isLoading }) => {
    const [text, setText] = useState('');
    const [activeTab, setActiveTab] = useState<'text' | 'file' | 'url'>('text');
    const [isFocused, setIsFocused] = useState(false);

    const handleAnalyze = () => {
        if (text.trim().length > 0) {
            onAnalyze(text);
        }
    };



    const fillExample = () => {
        setText("The rapid advancement of artificial intelligence has transformed various industries, from healthcare to finance. Machine learning algorithms, particularly deep learning models, have demonstrated remarkable capabilities in pattern recognition and data analysis. These technologies are now integral to modern applications, powering everything from recommendation engines to autonomous vehicles. As AI continues to evolve, its potential to solve complex problems grows, promising a future where intelligent systems work alongside humans to enhance productivity and innovation. However, ethical considerations regarding privacy and bias remain critical challenges that must be addressed to ensure responsible development.");
    };

    return (
        <section className="w-full max-w-5xl mx-auto px-4 animate-slide-up relative z-10 pt-10">
            <div className="text-center mb-16 space-y-4">
                <div className="inline-flex items-center justify-center p-1 rounded-full bg-slate-100 mb-6">
                    <span className="px-3 py-1 rounded-full bg-white text-xs font-semibold text-slate-700 shadow-sm border border-slate-200">
                        New Version 2.0
                    </span>
                    <span className="px-3 py-1 text-xs font-medium text-slate-500">
                        Enhanced Detection Models
                    </span>
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight">
                    Verify Content Authenticity <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">in Real-Time</span>
                </h2>
                <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
                    Advanced linguistic analysis to detect AI-generated text from GPT-4, Claude, Gemini, and more.
                </p>
            </div>

            {/* Main Input Area */}
            <div className={`
                relative bg-white rounded-2xl shadow-xl shadow-slate-200/50 
                border transition-all duration-300 overflow-hidden
                ${isFocused ? 'border-blue-400 ring-4 ring-blue-50' : 'border-slate-200'}
            `}>

                {/* Tabs */}
                <div className="flex border-b border-slate-100 bg-slate-50/50 px-2 pt-2">
                    {[
                        { id: 'text', label: 'Text' },
                        { id: 'file', label: 'File Upload' },
                        { id: 'url', label: 'Website URL' }
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id as 'text' | 'file' | 'url')}
                            className={`
                                relative px-6 py-3 text-sm font-medium rounded-t-lg transition-all
                                ${activeTab === tab.id
                                    ? 'bg-white text-blue-600 shadow-[0_-1px_2px_rgba(0,0,0,0.03)]'
                                    : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100/50'}
                            `}
                        >
                            {tab.label}
                            {activeTab === tab.id && <div className="absolute top-0 left-0 w-full h-0.5 bg-blue-500 rounded-t-lg" />}
                        </button>
                    ))}
                </div>

                <div className="p-0 bg-white min-h-[350px] relative">
                    {activeTab === 'text' && (
                        <>
                            <textarea
                                className="w-full h-full min-h-[350px] p-8 text-lg text-slate-700 resize-none focus:outline-none placeholder:text-slate-300 font-normal leading-relaxed custom-scrollbar"
                                placeholder="Paste your text here to begin analysis..."
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                onFocus={() => setIsFocused(true)}
                                onBlur={() => setIsFocused(false)}
                            />

                            <div className="absolute bottom-6 left-6 text-xs font-medium text-slate-400 bg-slate-50 px-3 py-1.5 rounded-md border border-slate-100">
                                {text.split(/\s+/).filter(w => w.length > 0).length} Words
                            </div>

                            <div className="absolute bottom-6 right-6 flex gap-3">
                                {text.length === 0 && (
                                    <button
                                        onClick={fillExample}
                                        className="px-4 py-2 rounded-lg text-sm font-medium text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-all border border-transparent hover:border-blue-100"
                                    >
                                        Try Sample
                                    </button>
                                )}
                                <button
                                    onClick={() => setText('')}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium text-slate-400 hover:text-red-500 hover:bg-red-50 transition-all ${text.length === 0 ? 'hidden' : 'block'}`}
                                >
                                    Clear
                                </button>
                                <button
                                    onClick={handleAnalyze}
                                    disabled={isLoading || text.length < 10}
                                    className={`
                                        flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold text-sm transition-all shadow-sm
                                        ${isLoading || text.length < 10
                                            ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                                            : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-md hover:shadow-blue-200 hover:-translate-y-0.5'}
                                    `}
                                >
                                    {isLoading ? (
                                        <>
                                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            <span>Processing...</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>Analyze Text</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="22" y1="2" x2="11" y2="13"></line>
                                                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                            </svg>
                                        </>
                                    )}
                                </button>
                            </div>
                        </>
                    )}

                    {activeTab !== 'text' && (
                        <div className="flex flex-col items-center justify-center h-[350px] text-slate-400">
                            <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center mb-4 border border-slate-100">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                </svg>
                            </div>
                            <p className="font-medium text-slate-600">Feature Coming Soon</p>
                            <p className="text-sm">We are working on file and URL analysis.</p>
                        </div>
                    )}
                </div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {[
                    { title: '99.9% Accuracy', desc: 'Industry leading detection rates' },
                    { title: 'Multi-Model', desc: 'Checks GPT-4, Claude & more' },
                    { title: 'Secure & Private', desc: 'Data encrypted & auto-deleted' },
                ].map((feature, i) => (
                    <div key={i} className="space-y-2">
                        <h3 className="font-bold text-slate-900">{feature.title}</h3>
                        <p className="text-sm text-slate-500">{feature.desc}</p>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default InputSection;
