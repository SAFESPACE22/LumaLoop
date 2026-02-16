import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { label: 'Problem', href: '#problem' },
    { label: 'Specs', href: '#specs' },
    { label: 'Use Cases', href: '#usecases' },
    { label: 'Story', href: '#founder' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass shadow-md shadow-blush/10' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded-full border-2 border-blush flex items-center justify-center group-hover:animate-pulse-glow transition-all">
                        <div className="w-3 h-3 rounded-full bg-blush" />
                    </div>
                    <span className="text-xl font-bold tracking-tight">
                        <span className="text-soft">Luma</span>
                        <span className="text-blush">loop</span>
                    </span>
                </a>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm text-soft-light hover:text-blush-deep transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-blush after:transition-all after:duration-300 hover:after:w-full"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#preorder"
                        className="px-5 py-2 bg-blush text-white font-semibold text-sm rounded-full hover:bg-blush-deep transition-all duration-300 hover:shadow-lg hover:shadow-blush/25"
                    >
                        Pre-Order Now
                    </a>
                </div>

                {/* Mobile toggle */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden text-soft hover:text-blush transition-colors"
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-500 ${mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="bg-cream-warm/95 backdrop-blur-md border-t border-blush/10 px-6 py-6 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className="text-soft hover:text-blush-deep transition-colors text-lg"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#preorder"
                        onClick={() => setMobileOpen(false)}
                        className="mt-2 px-5 py-3 bg-blush text-white font-semibold text-center rounded-full"
                    >
                        Pre-Order Now
                    </a>
                </div>
            </div>
        </nav>
    );
}
