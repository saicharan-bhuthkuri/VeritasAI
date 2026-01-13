import React from 'react';

const Pricing: React.FC = () => {
    return (
        <div className="w-full max-w-5xl mx-auto px-6 py-12 animate-slide-up">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                    Simple, Transparent Pricing
                </h1>
                <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                    Start for free, upgrade when you scale.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-center">
                {/* Free Tier */}
                <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-500 rounded-bl-xl">
                        Current Plan
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Basic</h3>
                    <div className="flex items-baseline gap-1 mb-6">
                        <span className="text-4xl font-bold text-slate-900">Free</span>
                        <span className="text-slate-500">/forever</span>
                    </div>
                    <button className="w-full py-3 rounded-xl border-2 border-slate-900 text-slate-900 font-bold hover:bg-slate-50 transition-colors mb-8">
                        Get Started
                    </button>
                    <ul className="space-y-4 text-sm text-slate-600">
                        <li className="flex items-center gap-3">✓ 5,000 words per day</li>
                        <li className="flex items-center gap-3">✓ Basic Reporting</li>
                        <li className="flex items-center gap-3">✓ Standard Speed</li>
                    </ul>
                </div>

                {/* Pro Tier (Highlighted) */}
                <div className="bg-slate-900 p-8 rounded-3xl shadow-xl transform md:scale-105 relative border border-slate-700">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-emerald-400"></div>
                    <h3 className="text-xl font-bold text-white mb-2">Pro</h3>
                    <div className="flex items-baseline gap-1 mb-6">
                        <span className="text-4xl font-bold text-white">$12</span>
                        <span className="text-slate-400">/month</span>
                    </div>
                    <button className="w-full py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-500 transition-colors mb-8 shadow-lg shadow-blue-900/50">
                        Start 14-Day Trial
                    </button>
                    <ul className="space-y-4 text-sm text-slate-300">
                        <li className="flex items-center gap-3 text-white">✓ Unlimited words</li>
                        <li className="flex items-center gap-3 text-white">✓ Full PDF Reports</li>
                        <li className="flex items-center gap-3 text-white">✓ Priority processing</li>
                        <li className="flex items-center gap-3 text-white">✓ API Access</li>
                    </ul>
                </div>

                {/* Enterprise Tier */}
                <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Enterprise</h3>
                    <div className="flex items-baseline gap-1 mb-6">
                        <span className="text-4xl font-bold text-slate-900">Custom</span>
                    </div>
                    <button className="w-full py-3 rounded-xl border border-slate-200 text-slate-600 font-bold hover:bg-slate-50 transition-colors mb-8">
                        Contact Sales
                    </button>
                    <ul className="space-y-4 text-sm text-slate-600">
                        <li className="flex items-center gap-3">✓ Dedicated Server</li>
                        <li className="flex items-center gap-3">✓ SSO & Security Audit</li>
                        <li className="flex items-center gap-3">✓ Custom Models</li>
                        <li className="flex items-center gap-3">✓ 24/7 Phone Support</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
