import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-30 flex items-center justify-between px-6 py-4 bg-black/10 backdrop-blur-[2px] text-white uppercase tracking-wider text-xs font-bold font-mono">
                {/* Left: Logo */}
                <div className="flex items-center gap-2 flex-1 justify-start">
                    <Link to="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                        <img src="/logowhite.svg" alt="3dexplode Logo" className="hidden md:block h-6 w-auto mix-blend-difference" />
                        <img src="/justlogo.svg" alt="3dexplode Logo" className="block md:hidden h-8 w-auto mix-blend-difference" />
                    </Link>
                </div>

                {/* Center: Brand */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    <span className="text-xl md:text-2xl tracking-tighter normal-case font-sans font-black mix-blend-difference pointer-events-auto">3dexplode.</span>
                </div>

                {/* Right: Actions (Desktop) */}
                <div className="hidden md:flex flex-1 justify-end items-center gap-8">
                    <nav className="flex gap-6">
                        <Link to="/about" className="hover:text-[#ff4d00] transition-colors duration-200 mix-blend-difference">About</Link>
                        {['Services', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="hover:text-[#ff4d00] transition-colors duration-200 mix-blend-difference"
                            >
                                {item}
                            </a>
                        ))}
                    </nav>
                </div>

                {/* Right: Hamburger (Mobile) */}
                <div className="flex md:hidden flex-1 justify-end">
                    <button
                        onClick={() => setIsMenuOpen(true)}
                        className="p-2 space-y-1.5 hover:opacity-70 transition-opacity bg-transparent"
                    >
                        <div className="w-6 h-0.5 bg-white "></div>
                        <div className="w-6 h-0.5 bg-white "></div>
                        <div className="w-6 h-0.5 bg-white "></div>
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm flex flex-col justify-center items-center gap-8 transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'
                    }`}
            >
                <button
                    onClick={() => setIsMenuOpen(false)}
                    className="absolute top-6 right-6 p-4 text-white hover:text-[#ff4d00] transition-colors bg-transparent"
                >
                    <div className="relative w-6 h-6">
                        <span className="absolute top-1/2 left-0 w-full h-0.5 bg-current rotate-45 transform -translate-y-1/2"></span>
                        <span className="absolute top-1/2 left-0 w-full h-0.5 bg-current -rotate-45 transform -translate-y-1/2"></span>
                        <span className="absolute top-1/2 left-0 w-full h-0.5 bg-current -rotate-45 transform -translate-y-1/2"></span>
                    </div>
                </button>

                <nav className="flex flex-col items-center gap-8 text-2xl font-black font-sans tracking-tight uppercase">
                    <Link
                        to="/about"
                        onClick={() => setIsMenuOpen(false)}
                        className="text-white hover:text-[#ff4d00] transition-colors duration-300"
                    >
                        About
                    </Link>
                    {['Services', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href="#"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-white hover:text-[#ff4d00] transition-colors duration-300"
                        >
                            {item}
                        </a>
                    ))}
                </nav>
            </div>
        </>
    );
}
