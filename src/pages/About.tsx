import Header from '../components/Header';

export default function About() {
    return (
        <div className="min-h-screen bg-[#242424] text-white pt-24 px-6 md:px-20">
            <Header />
            <div className="max-w-4xl mx-auto space-y-8">
                <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-[#f79b1b]">ABOUT US.</h1>
                <p className="text-xl md:text-2xl leading-relaxed text-gray-300">
                    We are creating explosive 3D experiences. Utilizing pseudo-pixel art styling and high-performance rendering to bring models to life on the web.
                </p>
                <div className="p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
                    <h2 className="text-2xl font-bold mb-4 font-mono">CORE TECHNOLOGIES</h2>
                    <ul className="list-disc list-inside space-y-2 font-mono text-sm text-gray-400">
                        <li>React Three Fiber</li>
                        <li>GLSL Shaders</li>
                        <li>Dithering Effects</li>
                        <li>Glassmorphism UI</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
