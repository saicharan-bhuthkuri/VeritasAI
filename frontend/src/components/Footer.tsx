import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="w-full bg-white border-t border-gray-100 mt-auto py-12 px-6 md:px-12">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

                <div className="flex flex-col gap-2">
                    <span className="text-sm font-bold text-gray-900 uppercase tracking-widest">
                        AI Detection Bureau
                    </span>
                    <span className="text-xs text-gray-500">
                        Official Verification & Compliance Unit
                    </span>
                </div>

                <div className="text-xs text-gray-400 font-medium">
                    &copy; {new Date().getFullYear()} Government of AI Ethics. All Rights Reserved.
                </div>

                <div className="flex gap-6">
                    <a href="#" className="text-xs font-bold text-gray-500 hover:text-primary uppercase tracking-wider transition-colors">Privacy Policy</a>
                    <a href="#" className="text-xs font-bold text-gray-500 hover:text-primary uppercase tracking-wider transition-colors">Terms of Use</a>
                    <a href="#" className="text-xs font-bold text-gray-500 hover:text-primary uppercase tracking-wider transition-colors">Support</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
