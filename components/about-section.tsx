"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export function AboutSection() {
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [hasPlayed, setHasPlayed] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const sectionRef = useRef<HTMLElement>(null);

    // Use Intersection Observer to play video when it comes into view
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasPlayed && videoRef.current) {
                        videoRef.current.play();
                        setHasPlayed(true);
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [hasPlayed]);

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            const { currentTime, duration } = videoRef.current;
            if (duration > 0 && duration - currentTime <= 1.5) {
                setIsTransitioning(true);
            }
        }
    };

    const handleVideoEnded = () => {
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.pause();
        }
        setIsTransitioning(true);
    };

    return (
        <section
            ref={sectionRef}
            className="relative w-screen pt-12 pb-8 md:pt-20 md:pb-12 lg:pt-24 lg:pb-12 bg-slate-50 flex items-center justify-center px-4 md:px-8 lg:px-16 overflow-hidden"
        >
            <div className="relative w-full max-w-7xl mx-auto flex items-center justify-center">

                {/* Right side (Text content) - pushed to the right half, always in flow */}
                <div className="relative w-full flex items-center">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{
                            opacity: isTransitioning ? 1 : 0,
                            x: isTransitioning ? 0 : 50,
                        }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                        className="w-full lg:w-1/2 ml-auto z-0 pr-4 lg:pr-12 md:pl-8"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
                            <span className="text-sky-500">We are</span> Newgen Lanka...
                        </h2>
                        <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
                            We are Newgen Lanka because we are passionate about the <span className="font-semibold text-slate-800">NEW</span> and how our offerings should help everyone at every age through the <span className="font-semibold text-slate-800">GEN</span>erations. Above all, we are proud to be Sri <span className="font-semibold text-slate-800">LANKA</span>ns committed to making well everyone, everywhere.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                {
                                    title: "Passionate",
                                    color: "from-sky-400 to-blue-500",
                                    shadow: "shadow-blue-500/40",
                                    icon: <svg viewBox="0 0 24 24" className="w-5 h-5 text-white drop-shadow-md" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
                                },
                                {
                                    title: "Caring",
                                    color: "from-sky-400 to-blue-500",
                                    shadow: "shadow-blue-500/40",
                                    icon: <svg viewBox="0 0 24 24" className="w-5 h-5 text-white drop-shadow-md" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" /></svg>
                                },
                                {
                                    title: "Reliable",
                                    color: "from-sky-400 to-blue-500",
                                    shadow: "shadow-blue-500/40",
                                    icon: <svg viewBox="0 0 24 24" className="w-5 h-5 text-white drop-shadow-md" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" /></svg>
                                },
                                {
                                    title: "Integrity",
                                    color: "from-sky-400 to-blue-500",
                                    shadow: "shadow-blue-500/40",
                                    icon: <svg viewBox="0 0 24 24" className="w-5 h-5 text-white drop-shadow-md" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                                }
                            ].map((item, idx) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                    animate={isTransitioning ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 20 }}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.4, delay: 1 + (idx * 0.15), type: "spring", bounce: 0.4 }}
                                    className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100/50 backdrop-blur-sm cursor-pointer"
                                >
                                    <div className={`
                                        p-3 mb-4 rounded-xl shadow-lg ${item.shadow}
                                        bg-gradient-to-br ${item.color}
                                        transform transition-transform hover:-translate-y-1 hover:rotate-3
                                        border border-white/20 ring-1 ring-black/5
                                        flex items-center justify-center
                                    `}>
                                        {item.icon}
                                    </div>
                                    <span className="font-semibold text-slate-800 text-lg tracking-tight">{item.title}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Video - Absolutely positioned, slides from center to left */}
                <motion.div
                    animate={{
                        left: isTransitioning ? "0%" : "50%",
                        x: isTransitioning ? "0%" : "-50%",
                        width: isTransitioning ? "50%" : "100%",
                        maxWidth: isTransitioning ? "600px" : "800px",
                    }}
                    transition={{ duration: 1.5, type: "spring", bounce: 0.1 }}
                    className="absolute z-10 rounded-[30px] overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)]"
                    style={{ top: "50%", y: "-50%" }}
                >
                    <video
                        ref={videoRef}
                        muted
                        playsInline
                        onTimeUpdate={handleTimeUpdate}
                        onEnded={handleVideoEnded}
                        className="w-full h-auto object-cover rounded-[30px]"
                    >
                        <source src="/about-vid.mp4" type="video/mp4" />
                    </video>
                </motion.div>

            </div>
        </section>
    );
}
