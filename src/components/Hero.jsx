import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center gradient-mesh overflow-hidden"
        >
            {/* Decorative orbs */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-lavender/15 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blush/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-mint/8 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 grid lg:grid-cols-2 gap-16 items-center">
                {/* Left — Copy */}
                <div className="text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blush/25 bg-blush-light/60 text-blush-deep text-xs font-medium mb-8 animate-fade-in">
                        <span className="w-1.5 h-1.5 rounded-full bg-blush animate-pulse" />
                        Now Available for Pre-Order
                    </div>

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-soft animate-slide-up">
                        Your Bottle,
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blush via-lavender to-blush-deep">
                            Reimagined.
                        </span>
                    </h1>

                    <p className="mt-6 text-lg sm:text-xl text-soft-light leading-relaxed max-w-lg animate-slide-up" style={{ animationDelay: '0.15s' }}>
                        The modular silicone bracket system that hooks your keys, AirPods,
                        gym pass, or wallet directly to your water bottle — so you carry
                        less and do more.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '0.3s' }}>
                        <a
                            href="#preorder"
                            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blush to-blush-deep text-white font-bold rounded-full text-lg hover:shadow-xl hover:shadow-blush/30 hover:scale-105 transition-all duration-300"
                        >
                            Pre-Order Now
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                        <a
                            href="#problem"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-lavender/30 text-soft rounded-full text-lg hover:border-blush/40 hover:text-blush-deep transition-all duration-300"
                        >
                            Learn More
                        </a>
                    </div>

                    {/* Social proof */}
                    <div className="mt-12 flex items-center gap-6 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '0.45s' }}>
                        <div className="flex -space-x-3">
                            {[...Array(4)].map((_, i) => (
                                <div
                                    key={i}
                                    className="w-10 h-10 rounded-full border-2 border-cream bg-lavender-light flex items-center justify-center text-xs font-bold text-lavender-dark"
                                >
                                    {['JK', 'AM', 'RL', 'TS'][i]}
                                </div>
                            ))}
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-soft">500+ Pre-Orders</p>
                            <p className="text-xs text-soft-muted">Join the waitlist today</p>
                        </div>
                    </div>
                </div>

                {/* Right — Product visual */}
                <div className="relative flex items-center justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
                    <div className="relative w-full max-w-md aspect-square">
                        {/* Glow ring */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blush/15 via-lavender/10 to-mint/10 blur-2xl animate-pulse-glow" />

                        {/* Product showcase */}
                        <div className="relative z-10 w-full h-full rounded-3xl border border-blush/10 bg-white/60 backdrop-blur-sm flex items-center justify-center overflow-hidden shadow-xl shadow-blush/5">
                            <div className="text-center p-8">
                                {/* Stylized product icon */}
                                <div className="mx-auto w-40 h-40 relative animate-float">
                                    {/* Bottle shape */}
                                    <div className="absolute inset-x-8 top-0 bottom-0 rounded-2xl bg-gradient-to-b from-lavender-light to-cream-dark border border-lavender/20" />
                                    {/* Lumaloop band */}
                                    <div className="absolute top-1/3 -left-2 -right-2 h-10 rounded-full bg-gradient-to-r from-blush via-blush-deep to-blush shadow-lg shadow-blush/30 flex items-center justify-center">
                                        <div className="flex gap-1.5">
                                            <div className="w-2 h-2 rounded-full bg-white/40" />
                                            <div className="w-2 h-2 rounded-full bg-white/40" />
                                            <div className="w-2 h-2 rounded-full bg-white/40" />
                                        </div>
                                    </div>
                                    {/* Hook attachment */}
                                    <div className="absolute top-1/3 -right-6 w-8 h-16 border-2 border-blush/50 rounded-r-full border-l-0" />
                                </div>

                                <p className="mt-8 text-sm text-soft-muted font-medium">Universal Fit • Medical-Grade Silicone</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-soft-muted">
                <ChevronDown size={28} />
            </div>
        </section>
    );
}
