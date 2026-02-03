import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Anchor, Sprout, Hammer } from 'lucide-react';

export default function Strategy() {
    const [activeTab, setActiveTab] = useState('zoneB'); // Default to Zone B as it's the new thing

    const zones = {
        zoneA: {
            id: 'zoneA',
            title: 'Zone A: The Anchor',
            subtitle: 'Calcagnini Contemplative Center (55 acres)',
            icon: Anchor,
            color: 'bg-primary',
            description: "CCC stays what it is — Georgetown's Blue Ridge sanctuary for contemplative retreat. That identity is non-negotiable.",
            details: [
                "Hosted and protected by the Office of Mission & Ministry.",
                "Carefully placed moments of formation-through-stewardship.",
                "A native habitat zone here, a quiet reflection garden there.",
                "CCC becomes the spiritual center of gravity for everything Eden does."
            ]
        },
        zoneB: {
            id: 'zoneB',
            title: 'Zone B: The Regen Campus',
            subtitle: 'Where Eden Grows',
            icon: Sprout,
            color: 'bg-accent',
            description: "Two adjacent properties, playing a distinct and necessary role in the larger system.",
            subSections: [
                {
                    title: "High Meadows Estate (14 acres) — The Heart",
                    text: "The investment that matters most. A historic estate built circa 1896. This is where pilot food production launches, demonstration gardens take root, and PhD-level regenerative education finds its true field campus."
                },
                {
                    title: "The North Parcel (22 acres) — The Engine Room",
                    text: "The operational backbone: equipment storage, workshop and maker space, tool libraries, and biochar kilns. The infrastructure that keeps a regenerative operation running day to day."
                }
            ]
        }
    };

    return (
        <section className="py-24 bg-surface relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-text">The Two-Zone Strategy</h2>
                    <p className="text-xl text-text/60 max-w-2xl mx-auto">
                        Protect what already works, and build what's missing right next door.
                    </p>
                </div>

                {/* Desktop Split View / Mobile Tabs */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Card for Zone A */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className={`p-8 rounded-3xl border-2 border-primary/20 bg-background shadow-xl hover:shadow-2xl transition-all relative overflow-hidden group`}
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Anchor size={120} />
                        </div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-primary/10 p-4 rounded-2xl text-primary">
                                    <Anchor size={32} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-text">Zone A: The Anchor</h3>
                                    <p className="text-primary font-medium">Calcagnini Contemplative Center</p>
                                </div>
                            </div>
                            <p className="text-lg text-text/80 mb-6 leading-relaxed">
                                {zones.zoneA.description}
                            </p>
                            <ul className="space-y-3">
                                {zones.zoneA.details.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-text/70">
                                        <Leaf className="w-5 h-5 text-primary shrink-0 mt-1" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Card for Zone B */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className={`p-8 rounded-3xl border-2 border-accent/40 bg-gradient-to-br from-background to-accent/5 shadow-xl hover:shadow-accent/20 transition-all relative overflow-hidden group`}
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity text-accent">
                            <Sprout size={120} />
                        </div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-accent/10 p-4 rounded-2xl text-accent">
                                    <Sprout size={32} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-text">Zone B: Regen Campus</h3>
                                    <p className="text-accent font-medium">Where Eden Grows</p>
                                </div>
                            </div>
                            <p className="text-lg text-text/80 mb-6 leading-relaxed">
                                {zones.zoneB.description}
                            </p>

                            <div className="space-y-6">
                                <div className="bg-white/50 p-6 rounded-xl border border-accent/20">
                                    <h4 className="font-bold text-lg text-text mb-2 flex items-center gap-2">
                                        <Leaf size={18} className="text-accent" />
                                        <a
                                            href="https://www.artisanproperties.org/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:underline hover:text-accent transition-colors"
                                        >
                                            High Meadows Estate
                                        </a>
                                    </h4>
                                    <p className="text-text/70 text-sm">
                                        The Heart. 14 acres. Pilot food production, demonstration gardens, and PhD-level regenerative education.
                                    </p>
                                </div>
                                <div className="bg-white/50 p-6 rounded-xl border border-accent/20">
                                    <h4 className="font-bold text-lg text-text mb-2 flex items-center gap-2">
                                        <Hammer size={18} className="text-accent" /> The North Parcel
                                    </h4>
                                    <p className="text-text/70 text-sm">
                                        The Engine Room. 22 acres. Equipment storage, workshops, tool libraries, and working infrastructure.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
                {/* Video Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-16 max-w-4xl mx-auto"
                >
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-text mb-2">See the Vision in Action</h3>
                    </div>
                    <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-video bg-black">
                        <iframe
                            src="https://www.youtube.com/embed/GurbrtlGghU?rel=0"
                            title="Eden Regeneration Project Vision"
                            className="absolute top-0 left-0 w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
