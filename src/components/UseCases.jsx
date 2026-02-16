import { useEffect, useRef } from 'react';
import { Train, Dumbbell, Mountain } from 'lucide-react';

const personas = [
    {
        icon: Train,
        title: 'The Commuter',
        tagline: 'Keys, badge, AirPods \u2014 all on one bottle.',
        description:
            'No more fishing through a laptop bag at the turnstile. Hook your transit pass and keys to your bottle and breeze through your morning.',
        items: ['Transit pass', 'Keys', 'AirPods case'],
        gradient: 'from-sand-warm to-terra-pale',
        tagColor: 'text-terra-dark',
        chipBg: 'bg-terra-pale',
        chipText: 'text-terra-dark',
    },
    {
        icon: Dumbbell,
        title: 'The Gym Rat',
        tagline: 'Hands free. Gains focused.',
        description:
            'Clip your locker key, gym pass, and earbuds to your shaker bottle. Walk from machine to machine without a bag weighing you down.',
        items: ['Gym pass', 'Locker key', 'Earbuds case'],
        gradient: 'from-sage-pale to-sage-light',
        tagColor: 'text-sage-deep',
        chipBg: 'bg-sage-pale',
        chipText: 'text-sage-deep',
    },
    {
        icon: Mountain,
        title: 'The Hiker',
        tagline: 'Essential access at altitude.',
        description:
            'Attach a whistle, mini-light, or snack pouch to your Nalgene. Keep critical gear within reach when your pack is on your back.',
        items: ['Whistle', 'Mini flashlight', 'Carabiner keys'],
        gradient: 'from-sage-light to-sand-warm',
        tagColor: 'text-sage-dark',
        chipBg: 'bg-sage-light',
        chipText: 'text-sage-dark',
    },
];

export default function UseCases() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll('.animate-on-scroll').forEach((el, i) => {
                            setTimeout(() => el.classList.add('visible'), i * 200);
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
        <section id="usecases" className="relative py-28 gradient-mesh" ref={sectionRef}>
            <div className="section-divider mb-28" />

            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16 animate-on-scroll">
                    <span className="text-sage-dark text-sm font-semibold uppercase tracking-widest">
                        Use Cases
                    </span>
                    <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-bark">
                        Built for
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sage-dark to-sage-deep">
                            {' '}Every Lifestyle
                        </span>
                    </h2>
                    <p className="mt-4 text-bark-light text-lg max-w-2xl mx-auto">
                        One product, countless scenarios. See how LumaLoop fits into your world.
                    </p>
                </div>

                {/* Persona cards */}
                <div className="grid lg:grid-cols-3 gap-8">
                    {personas.map((persona, idx) => {
                        const Icon = persona.icon;
                        return (
                            <div
                                key={idx}
                                className="animate-on-scroll group relative rounded-3xl overflow-hidden bg-white/40 shadow-soft hover:shadow-soft-lg transition-all duration-500 hover:-translate-y-2"
                            >
                                {/* Gradient header */}
                                <div
                                    className={`h-48 bg-gradient-to-br ${persona.gradient} flex items-center justify-center relative`}
                                >
                                    <div className="w-20 h-20 rounded-2xl bg-white/70 backdrop-blur-sm flex items-center justify-center text-sage-deep shadow-soft-md group-hover:scale-110 transition-transform duration-500">
                                        <Icon size={36} />
                                    </div>
                                    {/* Subtle dot pattern */}
                                    <div className="absolute inset-0 opacity-20" style={{
                                        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(92,79,67,0.08) 1px, transparent 0)',
                                        backgroundSize: '24px 24px',
                                    }} />
                                </div>

                                {/* Content */}
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-bark mb-1">{persona.title}</h3>
                                    <p className={`${persona.tagColor} text-sm font-medium mb-4`}>{persona.tagline}</p>
                                    <p className="text-bark-light leading-relaxed text-sm mb-6">
                                        {persona.description}
                                    </p>

                                    {/* Items */}
                                    <div className="flex flex-wrap gap-2">
                                        {persona.items.map((item) => (
                                            <span
                                                key={item}
                                                className={`px-3 py-1 text-xs rounded-full ${persona.chipBg} ${persona.chipText} shadow-soft`}
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
