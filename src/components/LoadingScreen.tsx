import React from 'react';

const LoadingScreen: React.FC = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-md transition-opacity duration-300">
            <div className="relative flex items-center justify-center">
                {/* Rotating Icon - Using a simple polished SVG or div structure */}
                <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>

                {/* Optional: Inner pulse or logo could go here */}
                {/* <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 bg-white/10 rounded-full animate-pulse"></div>
                </div> */}
            </div>

            {/* Loading text optionally */}
            <div className="absolute mt-24 text-white font-mono text-sm tracking-widest opacity-80 animate-pulse">
                LOADING
            </div>
        </div>
    );
};

export default LoadingScreen;
