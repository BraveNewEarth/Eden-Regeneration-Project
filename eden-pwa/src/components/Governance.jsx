import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Settings, Users, BarChart3, TrendingUp } from 'lucide-react';

const governanceRoles = [
    {
        role: "Mission Sponsor",
        who: "Office of Mission & Ministry",
        desc: "The guardrail that keeps CCC as a retreat center. Non-negotiable.",
        icon: Shield
    },
    {
        role: "Operations",
        who: "Facilities & Site Ops",
        desc: "Handle the day-to-day running of the land and infrastructure.",
        icon: Settings
    },
    {
        role: "Academic Integration",
        who: "Faculty Fellows & Coordinator",
        desc: "Drive research, student practicums, and curriculum connection.",
        icon: Users
    },
    {
        role: "Measurement",
        who: "Sustainability Reporting",
        desc: "Own the data, learning outcomes, and transparent publication.",
        icon: BarChart3
    }
];

export default function Governance() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-6">

                {/* Governance Section */}
                <div className="mb-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-text">Governance</h2>
                        <p className="text-xl text-text/60 max-w-2xl mx-auto">
                            This only works with clear sponsorship and clear guardrails.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {governanceRoles.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-surface p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all text-center"
                            >
                                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <item.icon size={24} />
                                </div>
                                <h3 className="font-bold text-lg text-text mb-1">{item.who}</h3>
                                <p className="text-xs font-bold uppercase tracking-wider text-primary mb-3">{item.role}</p>
                                <p className="text-sm text-text/70">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Measurement Section */}
                <div className="glass-card p-10 md:p-16 bg-gradient-to-r from-primary/5 to-accent/5 relative overflow-hidden">
                    <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text">What We Measure</h2>
                            <p className="text-lg text-text/80 leading-relaxed mb-6">
                                This becomes real only when it is tracked. We report on soil organic matter, water retention, food yields, cost per pound, and retreatant engagement.
                            </p>
                            <div className="flex gap-4">
                                <div className="flex items-center gap-2 text-sm font-semibold bg-white/60 px-4 py-2 rounded-lg">
                                    <TrendingUp size={16} className="text-accent" /> Transparent Data
                                </div>
                                <div className="flex items-center gap-2 text-sm font-semibold bg-white/60 px-4 py-2 rounded-lg">
                                    <BarChart3 size={16} className="text-primary" /> Annual Reports
                                </div>
                            </div>
                        </div>

                        {/* Visual Abstract Chart */}
                        <div className="flex-1 w-full max-w-sm">
                            <div className="space-y-4">
                                <div className="h-10 w-full bg-primary/10 rounded-r-full relative overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: '85%' }}
                                        transition={{ duration: 1.5 }}
                                        className="absolute inset-y-0 left-0 bg-primary/80 flex items-center px-4 text-white text-xs font-bold"
                                    >
                                        Biodiversity Index
                                    </motion.div>
                                </div>
                                <div className="h-10 w-full bg-accent/10 rounded-r-full relative overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: '70%' }}
                                        transition={{ duration: 1.5, delay: 0.2 }}
                                        className="absolute inset-y-0 left-0 bg-accent flex items-center px-4 text-white text-xs font-bold"
                                    >
                                        Soil Organic Matter
                                    </motion.div>
                                </div>
                                <div className="h-10 w-full bg-blue-100 rounded-r-full relative overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: '92%' }}
                                        transition={{ duration: 1.5, delay: 0.4 }}
                                        className="absolute inset-y-0 left-0 bg-blue-500 flex items-center px-4 text-white text-xs font-bold"
                                    >
                                        Water Infiltration
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
