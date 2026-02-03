import React from 'react';
import { motion } from 'framer-motion';

const phases = [
    {
        id: "1",
        name: "Prove It",
        time: "Days 1–90",
        description: (<span>Authorize a small feasibility team to deliver: baseline site data, pilot plot plan for <a href="https://www.artisanproperties.org/" target="_blank" rel="noopener noreferrer" className="text-accent underline hover:text-accent/80 font-semibold">High Meadows</a>, cost ranges, and governance framework.</span>)
    },
    {
        id: "2",
        name: "Plant It",
        time: "Months 3–18",
        description: "Install the first demonstration garden and soil-building program. Begin measured production for the retreat kitchen. Run pilot workshops."
    },
    {
        id: "3",
        name: "Scale It",
        time: "Months 18–48",
        description: "Expand production and education. Establish fellows and residency rhythm. Publish Georgetown's Regenerative Campus Node playbook."
    }
];

export default function Roadmap() {
    return (
        <section className="py-24 bg-surface relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-text">How We Get There</h2>
                    <p className="text-xl text-text/60 max-w-2xl mx-auto">
                        Designed to be easy to say yes to — because it begins with proof, not belief.
                    </p>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-accent/50 to-primary/20"></div>

                    <div className="space-y-12">
                        {phases.map((phase, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className={`flex flex-col md:flex-row gap-8 relative items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Number Bubble */}
                                <div className="absolute left-4 md:left-1/2 -translate-x-[17px] md:-translate-x-1/2 w-9 h-9 rounded-full bg-background border-4 border-accent z-10 flex items-center justify-center font-bold text-accent text-sm">
                                    {phase.id}
                                </div>

                                {/* Content Side */}
                                <div className="ml-12 md:ml-0 md:w-1/2 md:px-12">
                                    <div className={`p-6 bg-background rounded-2xl shadow-md border border-gray-100 relative ${index % 2 === 0 ? 'text-left' : 'md:text-left'}`}>
                                        <div className="absolute top-4 right-4 text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 px-2 py-1 rounded">
                                            {phase.time}
                                        </div>
                                        <h3 className="text-2xl font-bold text-text mb-2">Phase {phase.id}: {phase.name}</h3>
                                        <p className="text-text/70">
                                            {phase.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Empty Side for layout balance */}
                                <div className="hidden md:block md:w-1/2"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
