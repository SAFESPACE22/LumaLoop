import { useEffect, useRef } from 'react';
import { ShoppingBag, Frown, Sparkles, ArrowRight } from 'lucide-react';

const problems = [
    {
        icon: ShoppingBag,
        title: 'The Cluttered Bag',
        description:
            'Keys tangled with earbuds. Wallet buried under gym clothes. You waste minutes digging through chaos every single day.',
        color: 'text-terra-dark',
        iconBg: 'bg-terra-pale',
    },
    {
        icon: Frown,
        title: 'Pockets Overloaded',
        description:
            'Bulging pockets, uncomfortable walks, and the constant fear of dropping something on your commute.',
        color: 'text-rose',
        iconBg: 'bg-rose-light',
    },
    {
        icon: Sparkles,
        title: 'The LumaLoop Fix',
        description:
            'Hook your essentials directly onto the bottle you already carry. One band. Zero clutter. Total freedom.',
        color: 'text-sage-deep',
        iconBg: 'bg-sage-pale',
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
                    <span className="text-sage-dark text-sm font-semibold uppercase tracking-widest">
                        The Problem
                    </span>
                    <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-bark">
                        You Already Carry a Bottle.
                        <br />
                        <span className="text-bark-muted">Why Not Make It Work Harder?</span>
                    </h2>
                </div>

                {/* 3-column grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {problems.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={idx}
                                className={`animate-on-scroll group relative rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 ${item.highlight
                                        ? 'bg-sage-pale/60 shadow-soft-md hover:shadow-sage-glow'
                                        : 'soft-card bg-white/50'
                                    }`}
                            >
                                {item.highlight && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-sage to-sage-dark text-white text-xs font-bold rounded-full shadow-soft">
                                        ✨ THE SOLUTION
                                    </div>
                                )}

                                <div
                                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${item.iconBg} ${item.color}`}
                                >
                                    <Icon size={28} />
                                </div>

                                <h3 className="text-xl font-bold mb-3 text-bark">{item.title}</h3>
                                <p className="text-bark-light leading-relaxed">{item.description}</p>

                                {item.highlight && (
                                    <a
                                        href="#specs"
                                        className="mt-6 inline-flex items-center gap-2 text-sage-deep text-sm font-semibold hover:gap-3 transition-all duration-300"
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
