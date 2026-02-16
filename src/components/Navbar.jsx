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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2 group">
                    <img
                        src="/logo.png"
                        alt="LumaLoop"
                        className="w-9 h-9 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                    <span className="text-xl font-bold tracking-tight">
                        <span className="text-bark">Luma</span>
                        <span className="text-sage-dark">Loop</span>
                    </span>
                </a>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm text-bark-muted hover:text-sage-deep transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-sage after:transition-all after:duration-300 hover:after:w-full"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#preorder"
                        className="px-5 py-2 bg-terra text-white font-semibold text-sm rounded-full hover:bg-terra-dark shadow-soft hover:shadow-terra-glow transition-all duration-300"
                    >
                        Pre-Order Now
                    </a>
                </div>

                {/* Mobile toggle */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden text-bark hover:text-sage-dark transition-colors"
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
                <div className="bg-sand-light/95 backdrop-blur-md shadow-soft-md px-6 py-6 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className="text-bark-light hover:text-sage-deep transition-colors text-lg"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#preorder"
                        onClick={() => setMobileOpen(false)}
                        className="mt-2 px-5 py-3 bg-terra text-white font-semibold text-center rounded-full shadow-soft"
                    >
                        Pre-Order Now
                    </a>
                </div>
            </div>
        </nav>
    );
}
