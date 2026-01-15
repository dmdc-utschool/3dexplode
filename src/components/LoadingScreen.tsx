import React, { useState, useEffect } from 'react';
import { Progress } from './animate-ui/components/radix/progress';

const LoadingScreen: React.FC = () => {
    const [progress, setProgress] = useState(13);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                // Simulate progress but stall at 90% until real load finishes
                if (oldProgress >= 90) {
                    return 90;
                }
                const diff = Math.random() * 15;
                return Math.min(oldProgress + diff, 90);
            });
        }, 150);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 backdrop-blur-md transition-opacity duration-300">
            <div className="w-[300px] flex flex-col items-center gap-4">
                <Progress value={progress} className="h-1 w-full" />

                <div className="text-white/60 font-mono text-xs tracking-[0.2em] animate-pulse">
                    LOADING SYSTEM...
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;
