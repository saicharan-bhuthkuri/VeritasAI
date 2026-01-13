import React from 'react';

const Solutions: React.FC = () => {
    const solutions = [
        {
            title: "For Educators",
            icon: "🎓",
            desc: "Uphold academic integrity by verifying student essays and research papers in seconds.",
            features: ["Bulk Analysis", "LMS Integration", "Plagiarism Check"]
        },
        {
            title: "For Publishers",
            icon: "📰",
            desc: "Ensure the authenticity of your content to maintain Search Engine ranking and reader trust.",
            features: ["SEO Protection", "Writer Verification", "Quality Control"]
        },
        {
            title: "For Recruitment",
            icon: "💼",
            desc: "Screen cover letters and take-home assignments to find authentic candidates.",
            features: ["Resume Scanning", "Candidate Screening", "Bias Reduction"]
        }
    ];

    return (
        <div className="w-full max-w-6xl mx-auto px-6 py-12 animate-slide-up">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                    Solutions for Every Industry
                </h1>
                <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                    Tailored integrity tools designed to fit your specific workflow.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {solutions.map((sol, idx) => (
                    <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                        <div className="text-4xl mb-6">{sol.icon}</div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-3">{sol.title}</h3>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            {sol.desc}
                        </p>
                        <ul className="space-y-2">
                            {sol.features.map((f, i) => (
                                <li key={i} className="text-sm font-medium text-slate-500 flex items-center gap-2">
                                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    {f}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Solutions;
