import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Microscope, Heart, ArrowRight } from 'lucide-react';

const pillars = [
    {
        title: "Farm-to-Retreat Table",
        description: "Real food. Real proximity. Real meaning.",
        details: "Market gardens and seasonal harvests specifically for the retreat kitchen. Transparent yield, soil, and water reports showing exactly what it costs and what it produces.",
        icon: Utensils,
        color: "bg-orange-500"
    },
    {
        title: "Living Laboratory",
        description: "Georgetown stops merely analyzing problems. It starts field-testing solutions.",
        details: "High Meadows as a demonstation campus. Soil health, biodiversity, and energy feasibility running as live, documented experiments.",
        icon: Microscope,
        color: "bg-blue-500"
    },
    {
        title: "Ecological Spirituality",
        description: "The inner and the outer, walking the same ground.",
        details: "Retreatants experience 'care for our common home' as tangible and alive. A place where ecological conversion and spiritual formation feed each other.",
        icon: Heart,
        color: "bg-red-500"
    }
];

export default function Pillars() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-text">Three Pillars</h2>
                    <p className="text-xl text-text/60 max-w-2xl mx-auto">
                        The foundation of the Eden Regeneration Project.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-8 group hover:-translate-y-2 transition-all duration-300 border-t-4 border-t-transparent hover:border-t-accent"
                        >
                            <div className={`w-14 h-14 ${pillar.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg rotate-3 group-hover:rotate-0 transition-transform`}>
                                <pillar.icon size={28} />
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-text">{pillar.title}</h3>
                            <p className="font-medium text-primary mb-4">{pillar.description}</p>
                            <p className="text-text/70 leading-relaxed text-sm mb-6">
                                {pillar.details}
                            </p>

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
