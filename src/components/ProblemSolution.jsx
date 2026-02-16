import { useEffect, useRef } from 'react';
import { ShoppingBag, Frown, Sparkles, ArrowRight } from 'lucide-react';

const problems = [
    {
        icon: ShoppingBag,
        title: 'The Cluttered Bag',
        description:
            'Keys tangled with earbuds. Wallet buried under gym clothes. You waste minutes digging through chaos every single day.',
        color: 'text-peach-dark',
        borderColor: 'border-peach/30',
        bgAccent: 'bg-peach-light',
        iconBg: 'bg-peach/20',
    },
    {
        icon: Frown,
        title: 'Pockets Overloaded',
        description:
            'Bulging pockets, uncomfortable walks, and the constant fear of dropping something on your commute.',
        color: 'text-lavender-dark',
        borderColor: 'border-lavender/30',
        bgAccent: 'bg-lavender-light',
        iconBg: 'bg-lavender/20',
    },
    {
        icon: Sparkles,
        title: 'The LumaLoop Fix',
        description:
            'Hook your essentials directly onto the bottle you already carry. One band. Zero clutter. Total freedom.',
        color: 'text-blush-deep',
        borderColor: 'border-blush/30',
        bgAccent: 'bg-blush-light',
        iconBg: 'bg-blush/20',
        highlight: true,
    },
];

export default function ProblemSolution() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll('.animate-on-scroll').forEach((el, i) => {
                            setTimeout(() => el.classList.add('visible'), i * 150);
                        });
                    }
                });
            },
            { threshold: 0.15 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="problem" className="relative py-28 gradient-mesh" ref={sectionRef}>
            <div className="section-divider mb-28" />

            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16 animate-on-scroll">
                    <span className="text-blush text-sm font-semibold uppercase tracking-widest">
                        The Problem
                    </span>
                    <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-soft">
                        You Already Carry a Bottle.
                        <br />
                        <span className="text-soft-muted">Why Not Make It Work Harder?</span>
                    </h2>
                </div>

                {/* 3-column grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {problems.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={idx}
                                className={`animate-on-scroll group relative rounded-2xl p-8 border transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-blush/5 ${item.highlight
                                        ? 'border-blush/30 bg-blush-light/50 shadow-md shadow-blush/5'
                                        : `${item.borderColor} bg-white/50`
                                    }`}
                            >
                                {item.highlight && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blush to-blush-deep text-white text-xs font-bold rounded-full">
                                        ✨ THE SOLUTION
                                    </div>
                                )}

                                <div
                                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${item.iconBg} ${item.color}`}
                                >
                                    <Icon size={28} />
                                </div>

                                <h3 className="text-xl font-bold mb-3 text-soft">{item.title}</h3>
                                <p className="text-soft-light leading-relaxed">{item.description}</p>

                                {item.highlight && (
                                    <a
                                        href="#specs"
                                        className="mt-6 inline-flex items-center gap-2 text-blush-deep text-sm font-semibold hover:gap-3 transition-all duration-300"
                                    >
                                        See How It Works <ArrowRight size={16} />
                                    </a>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
