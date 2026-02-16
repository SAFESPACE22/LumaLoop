import { useEffect, useRef } from 'react';
import { Shield, Maximize, Droplets, Weight, Ruler, ThermometerSun } from 'lucide-react';

const specs = [
    {
        icon: Shield,
        label: 'Medical-Grade Silicone',
        value: 'FDA-Compliant',
        description: 'Hypoallergenic, skin-safe material used in medical devices.',
    },
    {
        icon: Maximize,
        label: 'Flexible Silicone',
        value: '40A Shore Hardness',
        description: 'Perfect balance of rigidity for grip and flexibility for stretch.',
    },
    {
        icon: Droplets,
        label: 'Water & Sweat Proof',
        value: 'IPX7 Rated',
        description: 'Built for the gym, the trail, and everything in between.',
    },
    {
        icon: Weight,
        label: 'Ultra-Lightweight',
        value: '28g',
        description: "You won\u2019t even notice it\u2019s there \u2014 until you need it.",
    },
    {
        icon: Ruler,
        label: 'Universal Fit',
        value: '60\u201395 mm \u2300',
        description: 'Fits Hydro Flask, Stanley, Nalgene, and most popular bottles.',
    },
    {
        icon: ThermometerSun,
        label: 'Temperature Resistant',
        value: '-40\u00B0F to 450\u00B0F',
        description: 'Handles extreme cold and dishwasher heat without warping.',
    },
];

export default function TechSpecs() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll('.animate-on-scroll').forEach((el, i) => {
                            setTimeout(() => el.classList.add('visible'), i * 120);
                        });
                    }
                });
            },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="specs" className="relative py-28" ref={sectionRef}>
            <div className="section-divider mb-28" />

            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16 animate-on-scroll">
                    <span className="text-lavender-dark text-sm font-semibold uppercase tracking-widest">
                        Technical Specs
                    </span>
                    <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-soft">
                        Engineered to
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-lavender-dark to-blush">
                            {' '}Endure
                        </span>
                    </h2>
                    <p className="mt-4 text-soft-light text-lg max-w-2xl mx-auto">
                        Every Lumaloop is precision-molded from high-performance materials that pros trust.
                    </p>
                </div>

                {/* Specs grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {specs.map((spec, idx) => {
                        const Icon = spec.icon;
                        return (
                            <div
                                key={idx}
                                className="animate-on-scroll group glow-border rounded-2xl p-6 bg-white/50 hover:bg-white/80 hover:shadow-md hover:shadow-blush/5 transition-all duration-500"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 shrink-0 rounded-xl bg-lavender-light flex items-center justify-center text-lavender-dark group-hover:bg-lavender/20 transition-colors duration-300">
                                        <Icon size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-soft-muted font-medium">{spec.label}</p>
                                        <p className="text-2xl font-bold text-soft mt-1">{spec.value}</p>
                                    </div>
                                </div>
                                <p className="mt-4 text-sm text-soft-light leading-relaxed">
                                    {spec.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Compatibility bar */}
                <div className="mt-16 animate-on-scroll">
                    <div className="rounded-2xl border border-lavender/15 bg-lavender-light/30 p-8 text-center">
                        <p className="text-sm uppercase tracking-widest text-soft-muted mb-4">
                            Works With Your Favorite Bottles
                        </p>
                        <div className="flex flex-wrap justify-center gap-8 text-lg font-semibold text-soft-light">
                            {['Hydro Flask', 'Stanley', 'Nalgene', 'CamelBak', 'YETI', 'Klean Kanteen', 'Owala'].map(
                                (brand) => (
                                    <span
                                        key={brand}
                                        className="hover:text-blush-deep transition-colors duration-300 cursor-default"
                                    >
                                        {brand}
                                    </span>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
