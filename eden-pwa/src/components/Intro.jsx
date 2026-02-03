import React from 'react';
import { motion } from 'framer-motion';

export default function Intro() {
    return (
        <section id="intro" className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text">Why This Exists</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
                </motion.div>

                <div className="space-y-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col md:flex-row gap-8 items-center"
                    >
                        <div className="flex-1 text-lg leading-relaxed text-text/80">
                            <p className="mb-6 font-medium text-xl text-primary">
                                "Forty years ago, I was loading nuclear weapons onto B-52 bombers."
                            </p>
                            <p className="mb-6">
                                Today, I tend 55 acres of mountaintop land in the Blue Ridge — land Georgetown entrusted to serve students and retreatants who come here seeking reflection, healing, and purpose.
                            </p>
                            <p>
                                This is not a proposal to convert a retreat center into a farm or an event venue. It is a proposal to build something beside it. Something that turns Georgetown's commitment to "care for our common home" from a principle into a practice you can walk through, taste, and measure.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 md:p-10 border-l-4 border-l-accent"
                    >
                        <h3 className="text-2xl font-bold mb-4 text-text">The Core Value</h3>
                        <p className="text-lg text-text/70 italic">
                            "In an age where information is abundant and cheap, what remains genuinely rare is formation, discernment, leadership, and hands-on systems practice. Eden doesn't put Georgetown's value in a report. It puts it in living soil."
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>
        </section>
    );
}
