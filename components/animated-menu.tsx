"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const links = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Contact", href: "#contact" },
];

export function AnimatedMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Background Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-slate-900/30 backdrop-blur-sm"
                        onClick={() => setIsOpen(false)}
                    />
                )}
            </AnimatePresence>

            {/* Menu Button (Closed State) */}
            <div className="absolute top-4 right-4 md:top-8 md:right-8 z-[110]">
                <AnimatePresence>
                    {!isOpen && (
                        <motion.button
                            layoutId="pill-menu-container"
                            onClick={() => setIsOpen(true)}
                            className="rounded-full px-6 py-2.5 md:px-8 md:py-3.5 font-bold uppercase tracking-wider text-sm md:text-base text-slate-800 bg-gradient-to-b from-white via-gray-100 to-gray-300 shadow-[inset_0_-4px_8px_rgba(0,0,0,0.15),inset_0_4px_8px_rgba(255,255,255,0.9),0_8px_20px_rgba(0,0,0,0.2)] border border-white/50 outline-none flex items-center justify-center cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="drop-shadow-sm whitespace-nowrap">Menu</span>
                        </motion.button>
                    )}
                </AnimatePresence>
            </div>

            {/* Expanded Menu (Open State) - Centered */}
            <div className={`fixed inset-0 z-[110] flex items-center justify-center pointer-events-none ${isOpen ? "pointer-events-auto" : ""}`}>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            layoutId="pill-menu-container"
                            className="bg-white/95 backdrop-blur-xl rounded-full p-2 md:p-3 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/50 flex items-center overflow-hidden"
                        >
                            <div className="flex items-center gap-2 px-2">
                                {links.map((link, i) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        initial={{ opacity: 0, scale: 0.5, x: -20, filter: "blur(10px)" }}
                                        animate={{ opacity: 1, scale: 1, x: 0, filter: "blur(0px)" }}
                                        exit={{ opacity: 0, scale: 0.5, x: -20, filter: "blur(10px)" }}
                                        transition={{ delay: 0.15 + (i * 0.05), type: "spring", bounce: 0.4 }}
                                        className="px-5 py-2.5 md:px-8 md:py-3.5 rounded-full bg-slate-100 border border-slate-200/60 text-[#0f283d] font-bold tracking-wide text-sm md:text-base hover:bg-[#07242e] hover:text-white hover:scale-105 transition-all shadow-sm whitespace-nowrap"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </motion.a>
                                ))}

                                <motion.button
                                    initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                                    exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                                    transition={{ delay: 0.35, type: "spring" }}
                                    onClick={() => setIsOpen(false)}
                                    className="ml-2 w-10 h-10 md:w-14 md:h-14 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors cursor-pointer"
                                >
                                    <X className="w-5 h-5 md:w-6 md:h-6" />
                                </motion.button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}
