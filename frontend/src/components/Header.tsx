import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
            <nav className={`mx-auto max-w-5xl px-6 transition-all duration-300 ${scrolled ? 'bg-white/70 backdrop-blur-lg border border-white/20 shadow-lg shadow-black/[0.03] rounded-full' : 'bg-transparent'}`}>
                <div className="flex items-center justify-between h-14">
                    {/* Logo Area */}
                    <Link to="/" className="flex items-center gap-2 cursor-pointer group">
                        <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                                <line x1="12" x2="12" y1="19" y2="22" />
                            </svg>
                        </div>
                        <span className="text-xl font-bold tracking-tight text-slate-800 group-hover:text-primary transition-colors">
                            Veritas<span className="text-primary">AI</span>
                        </span>
                    </Link>

                    {/* Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/product" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors relative group">
                            Product
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full opacity-50"></span>
                        </Link>
                        <Link to="/solutions" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors relative group">
                            Solutions
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full opacity-50"></span>
                        </Link>
                        <Link to="/pricing" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors relative group">
                            Pricing
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full opacity-50"></span>
                        </Link>
                        <Link to="/api" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors relative group">
                            API
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full opacity-50"></span>
                        </Link>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3">
                        <a href="#" className="hidden sm:block text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">
                            Log in
                        </a>
                        <button className="relative inline-flex h-9 items-center justify-center rounded-full bg-slate-900 px-6 font-medium text-white transition-colors hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2">
                            <span className="text-sm">Get Started</span>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
