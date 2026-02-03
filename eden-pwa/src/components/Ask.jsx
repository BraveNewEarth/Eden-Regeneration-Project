import React from 'react';
import { motion } from 'framer-motion';

export default function Ask() {
    return (
        <section className="relative py-32 text-white overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/assets/campus-bg.png"
                    alt="High Meadows Estate"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/40"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">The Ask</h2>
                    <p className="text-2xl font-light mb-12 text-gray-200">
                        Will you help Georgetown plant this future?
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-left">
                        <div className="glass-card bg-white/10 border-white/20 p-6 backdrop-blur-md">
                            <h3 className="font-bold text-accent mb-2">Zone A</h3>
                            <p className="text-sm">CCC stays Mission & Ministry centered.</p>
                        </div>
                        <div className="glass-card bg-white/10 border-white/20 p-6 backdrop-blur-md">
                            <h3 className="font-bold text-secondary mb-2">Zone B: Heart</h3>
                            <p className="text-sm">High Meadows becomes the regenerative heart.</p>
                        </div>
                        <div className="glass-card bg-white/10 border-white/20 p-6 backdrop-blur-md">
                            <h3 className="font-bold text-primary mb-2">Zone B: Engine</h3>
                            <p className="text-sm">North Parcel becomes the operational backbone.</p>
                        </div>
                    </div>

                    <button className="bg-accent hover:bg-accent/90 text-white px-10 py-5 rounded-full font-bold text-xl shadow-lg shadow-accent/25 transition-all transform hover:scale-105">
                        Approve Feasibility Plan
                    </button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-24 border-t border-white/20 pt-12 flex flex-col md:flex-row items-center justify-center gap-8 text-left max-w-2xl mx-auto"
                >
                    <div className="w-16 h-16 bg-gray-300 rounded-full shrink-0 overflow-hidden">
                        {/* Placeholder for Bruce's face if we had it, or initials */}
                        <div className="w-full h-full bg-slate-700 flex items-center justify-center text-xl font-bold">BW</div>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold">Bruce Weaver</h4>
                        <p className="text-gray-400 text-sm mb-2">Caretaker and systems-minded steward.</p>
                        <p className="text-gray-300 italic text-sm">
                            "From loading B-52s to tending Blue Ridge soil — focused on turning neglected land and underused infrastructure into something that works, heals, and lasts."
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
