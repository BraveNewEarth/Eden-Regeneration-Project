import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Map } from 'lucide-react';
import campusBg from '../assets/campus-bg.png';
import mapBg from '../assets/hero-landscape.jpg';

export default function Ask() {
    const [showMap, setShowMap] = useState(false);

    return (
        <section className="relative py-32 text-white overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={campusBg}
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
                            <p className="text-sm">
                                <a
                                    href="https://www.artisanproperties.org/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-accent underline hover:text-accent/80 transition-colors"
                                >
                                    High Meadows
                                </a> becomes the regenerative heart.
                            </p>
                        </div>
                        <div className="glass-card bg-white/10 border-white/20 p-6 backdrop-blur-md">
                            <h3 className="font-bold text-primary mb-2">Zone B: Engine</h3>
                            <p className="text-sm">North Parcel becomes the operational backbone.</p>
                        </div>
                    </div>

                    <button
                        onClick={() => setShowMap(true)}
                        className="bg-accent hover:bg-accent/90 text-white px-10 py-5 rounded-full font-bold text-xl shadow-lg shadow-accent/25 transition-all transform hover:scale-105 flex items-center gap-3 mx-auto"
                    >
                        <Map size={24} />
                        Parcel Map View
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

            {/* Map Modal */}
            <AnimatePresence>
                {showMap && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
                        onClick={() => setShowMap(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-6xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setShowMap(false)}
                                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                            >
                                <X size={24} />
                            </button>
                            <img
                                src={mapBg}
                                alt="Parcel Map View"
                                className="w-full h-full object-contain max-h-[85vh]"
                            />
                            <div className="absolute bottom-0 inset-x-0 bg-black/60 text-white p-4 text-center backdrop-blur-sm">
                                <p className="font-semibold">Full Parcel View: Zone A (CCC) + Zone B (High Meadows & North Parcel)</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
