import React from 'react';

interface GaugeProps {
    value: number; // 0-100
    label: string;
    description?: string;
    color?: string; // e.g. "text-red-500"
}

const Gauge: React.FC<GaugeProps> = ({ value, label, description, color = "text-blue-500" }) => {
    const radius = 36;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (value / 100) * circumference;

    return (
        <div className="flex flex-col items-center justify-center p-4 bg-black/20 rounded-xl border border-white/5">
            <div className="relative w-32 h-32">
                {/* Background Circle */}
                <svg className="w-full h-full transform -rotate-90">
                    <circle
                        cx="64"
                        cy="64"
                        r={radius}
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        className="text-gray-800"
                    />
                    {/* Progress Circle */}
                    <circle
                        cx="64"
                        cy="64"
                        r={radius}
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                        className={`transition-all duration-1000 ease-out ${color}`}
                    />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className={`text-2xl font-bold ${color}`}>{Math.round(value)}%</span>
                </div>
            </div>
            <span className="mt-2 text-sm font-medium text-gray-300">{label}</span>
            {description && <span className="text-xs text-center text-gray-500 mt-1">{description}</span>}
        </div>
    );
};

export default Gauge;
