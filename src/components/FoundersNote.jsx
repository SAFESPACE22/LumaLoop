import { useEffect, useRef } from 'react';
import { Lightbulb, Wrench, Printer, Rocket } from 'lucide-react';

const milestones = [
    { icon: Lightbulb, label: 'Concept Sketch', date: 'Jan 2024' },
    { icon: Wrench, label: 'Prototype R&D', date: 'Apr 2024' },
    { icon: Printer, label: '3D Printing', date: 'Jul 2024' },
    { icon: Rocket, label: 'Production', date: 'Nov 2024' },
];

export default function FoundersNote() {
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
        <section id="founder" className="relative py-28" ref={sectionRef}>
            <div className="section-divider mb-28" />

            <div className="max-w-5xl mx-auto px-6">
                <div className="animate-on-scroll text-center mb-6">
                    <span className="text-blush text-sm font-semibold uppercase tracking-widest">
                        From the Maker
                    </span>
                </div>

                {/* Quote card */}
                <div className="animate-on-scroll relative rounded-3xl overflow-hidden border border-blush/15 bg-white/50 shadow-lg shadow-blush/5">
                    {/* Accent bar */}
                    <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-blush via-lavender to-mint" />

                    <div className="p-10 sm:p-14">
                        <blockquote className="text-xl sm:text-2xl font-light leading-relaxed text-soft italic">
                            "I started LumaLoop after dropping my keys three flights of stairs for the
                            third time in a week. The idea was simple — your water bottle is already
                            in your hand. Why not let it carry the small stuff too?"
                        </blockquote>

                        <div className="mt-8 flex items-center gap-4">
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blush to-lavender flex items-center justify-center text-white font-bold text-lg">
                                TH
                            </div>
                            <div>
                                <p className="font-semibold text-soft">Tyler Vuong</p>
                                <p className="text-sm text-soft-muted">Founder</p>
                            </div>
                        </div>

                        {/* Timeline */}
                        <div className="mt-12 pt-8 border-t border-blush/10">
                            <p className="text-sm text-soft-muted uppercase tracking-widest mb-6">
                                The Journey
                            </p>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                {milestones.map((ms, idx) => {
                                    const Icon = ms.icon;
                                    return (
                                        <div
                                            key={idx}
                                            className="animate-on-scroll flex flex-col items-center text-center group"
                                        >
                                            <div className="w-12 h-12 rounded-xl bg-lavender-light flex items-center justify-center text-lavender-dark mb-3 group-hover:bg-blush-light group-hover:text-blush-deep transition-colors duration-300">
                                                <Icon size={22} />
                                            </div>
                                            <p className="text-sm font-semibold text-soft">{ms.label}</p>
                                            <p className="text-xs text-soft-muted mt-1">{ms.date}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Maker details */}
                        <div className="mt-10 flex flex-wrap gap-4 text-sm">
                            {['50+ Prototypes', '12 Material Tests', '4 Patent Filings', 'Made in USA'].map(
                                (stat) => (
                                    <span
                                        key={stat}
                                        className="px-4 py-2 rounded-full border border-lavender/20 text-soft-light bg-lavender-light/40"
                                    >
                                        {stat}
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
