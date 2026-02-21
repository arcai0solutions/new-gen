"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const texts = [
    "Delivering superior pharmaceutical solutions globally."
];

export function Preloader({ onComplete }: { onComplete?: () => void }) {
    const [isLoading, setIsLoading] = useState(true);
    const [textIndex, setTextIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    // Disable scrolling while loading
    useEffect(() => {
        if (isLoading) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isLoading]);

    // Handle typing animation
    useEffect(() => {
        if (!isLoading) return;

        const currentString = texts[textIndex];
        let timeoutId: NodeJS.Timeout;

        if (!isDeleting) {
            // Typing
            if (displayedText.length < currentString.length) {
                timeoutId = setTimeout(() => {
                    setDisplayedText(currentString.slice(0, displayedText.length + 1));
                }, 50); // Typing speed
            } else {
                // Wait before deleting
                timeoutId = setTimeout(() => setIsDeleting(true), 1500);
            }
        } else {
            // Deleting
            if (displayedText.length > 0) {
                timeoutId = setTimeout(() => {
                    setDisplayedText(currentString.slice(0, displayedText.length - 1));
                }, 30); // Deletion speed
            } else {
                // Move to next string
                setIsDeleting(false);
                setTextIndex((prev) => (prev + 1) % texts.length);
            }
        }

        return () => clearTimeout(timeoutId);
    }, [displayedText, isDeleting, textIndex, isLoading]);

    // Wait a minimum time before letting the page load, but ideally wait for video content if we could
    // For now, we'll use a fixed timeout (e.g., 4 seconds) to show off the typing animation
    useEffect(() => {
        const minLoadTime = setTimeout(() => {
            setIsLoading(false);
            if (onComplete) onComplete();
        }, 4000); // 4 seconds of preloading

        return () => clearTimeout(minLoadTime);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                    transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#07242e]"
                >
                    <div className="flex flex-col items-center gap-8">
                        {/* Typing Container */}
                        <div className="h-8 flex flex-col items-center justify-center">
                            <p className="text-white/90 text-lg md:text-xl font-medium tracking-wide font-mono flex items-center">
                                {displayedText}
                                <motion.span
                                    animate={{ opacity: [1, 0] }}
                                    transition={{ repeat: Infinity, duration: 0.8 }}
                                    className="w-[2px] h-5 bg-white ml-1 inline-block"
                                />
                            </p>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
