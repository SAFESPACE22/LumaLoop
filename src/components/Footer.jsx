import { ArrowRight, Instagram, Twitter, Youtube, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer id="preorder" className="relative">
            {/* ── Final CTA Banner ── */}
            <div className="relative py-28 overflow-hidden">
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-sand-light/0 via-sage-pale/40 to-sand-light/0" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sage/6 rounded-full blur-[120px]" />

                <div className="relative max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-bark">
                        Ready to
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-terra via-terra-dark to-terra">
                            {' '}Simplify
                        </span>
                        ?
                    </h2>
                    <p className="mt-6 text-lg text-bark-light max-w-xl mx-auto">
                        Join 500+ early adopters and be the first to get LumaLoop at our exclusive pre-order price.
                    </p>

                    {/* Price + CTA */}
                    <div className="mt-10 flex flex-col items-center gap-4">
                        <div className="flex items-baseline gap-3">
                            <span className="text-bark-muted line-through text-lg">$10.99</span>
                            <span className="text-4xl font-black text-bark">$5.99</span>
                            <span className="px-2 py-0.5 bg-terra-pale text-terra-dark text-xs font-bold rounded-full">
                                EARLY BIRD
                            </span>
                        </div>

                        <a
                            href="https://lumaloop.com/preorder"
                            className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-terra to-terra-dark text-white font-bold rounded-full text-lg shadow-soft-md hover:shadow-terra-glow hover:scale-105 transition-all duration-300 animate-pulse-glow"
                        >
                            Pre-Order Now — $5.99
                            <ArrowRight
                                size={22}
                                className="group-hover:translate-x-1 transition-transform duration-300"
                            />
                        </a>
                        <p className="text-xs text-bark-muted mt-2">
                            Free shipping • 30-day guarantee • Ships Q1 2025
                        </p>
                    </div>
                </div>
            </div>

            {/* ── Footer bar ── */}
            <div className="border-t border-sand-dark/20">
                <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-sage-light flex items-center justify-center shadow-soft">
                            <div className="w-2 h-2 rounded-full bg-sage-dark" />
                        </div>
                        <span className="text-lg font-bold">
                            <span className="text-bark">Luma</span>
                            <span className="text-sage-dark">Loop</span>
                        </span>
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-8 text-sm text-bark-muted">
                        <a href="#" className="hover:text-sage-deep transition-colors">Privacy</a>
                        <a href="#" className="hover:text-sage-deep transition-colors">Terms</a>
                        <a href="#" className="hover:text-sage-deep transition-colors">Contact</a>
                    </div>

                    {/* Socials */}
                    <div className="flex items-center gap-4">
                        {[
                            { Icon: Instagram, href: '#' },
                            { Icon: Twitter, href: '#' },
                            { Icon: Youtube, href: '#' },
                            { Icon: Mail, href: 'mailto:hello@lumaloop.com' },
                        ].map(({ Icon, href }, idx) => (
                            <a
                                key={idx}
                                href={href}
                                className="w-10 h-10 rounded-full bg-white/50 flex items-center justify-center text-bark-muted hover:text-sage-deep hover:shadow-sage-glow hover:bg-sage-pale transition-all duration-300 shadow-soft"
                            >
                                <Icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="border-t border-sand-dark/15 py-6 text-center text-xs text-bark-muted">
                    © {new Date().getFullYear()} LumaLoop Inc. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
