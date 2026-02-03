import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden text-white">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/assets/hero-landscape.jpg"
                    alt="Eden Regeneration Project"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-background"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider uppercase bg-accent/20 border border-accent/40 rounded-full text-accent backdrop-blur-sm">
                        Georgetown's Next Great Work
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
                        Eden Regeneration <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Project 2.0</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
                        From Contemplation to Regeneration. Protecting the retreat center's purpose while building a plug-and-play Regenerative Demonstration Campus next door.
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg shadow-primary/25 transition-all"
                        onClick={() => document.getElementById('intro')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Explore the Vision
                    </motion.button>
                </motion.div>
            </div>

            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <ArrowDown size={32} />
            </motion.div>
        </section>
    );
}
