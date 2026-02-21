"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
    {
        id: 1,
        icon: "https://cdn.prod.website-files.com/6908286d3734c75cf5e7c556/691172ee9e895e2bca8c115a_icon-02.svg",
        title: "Our Mission",
        desc: "Advancing global health through innovative research, zero-defect manufacturing, and making superior pharmaceutical solutions accessible to make everyone well, everywhere.",
        img1: "https://cdn.prod.website-files.com/6908286d3734c75cf5e7c556/6933b2b9f615ee91fa4f92c6_home1-about1.jpg",
        img2: "https://cdn.prod.website-files.com/6908286d3734c75cf5e7c556/6933b2dd1dfa3090ec320343_home1-about1-img02.jpg",
    },
    {
        id: 2,
        icon: "https://cdn.prod.website-files.com/6908286d3734c75cf5e7c556/691171d87729d50f94212925_icon-01.svg",
        title: "Satisfied Clients",
        desc: "Proudly Serving Our Satisfied Clients",
        img1: "https://cdn.prod.website-files.com/6908286d3734c75cf5e7c556/693663d4d49c5ca120604cdf_home1-about1-img03.jpg",
        img2: "https://cdn.prod.website-files.com/6908286d3734c75cf5e7c556/693663e810ed39c9a3a8fcd7_home1-about1-img04.jpg",
    },
    {
        id: 3,
        icon: "https://cdn.prod.website-files.com/6908286d3734c75cf5e7c556/691172fa88e15a67f6d4f3ad_icon-03.svg",
        title: "Our Vision",
        desc: "To be a globally recognized leader in pharmaceuticals, setting the standard for excellence, scientific integrity, and compassionate care in improving human lives.",
        img1: "https://cdn.prod.website-files.com/6908286d3734c75cf5e7c556/693663fd23a85b83ba712e5b_home1-about1-img05.jpg",
        img2: "https://cdn.prod.website-files.com/6908286d3734c75cf5e7c556/6936640f95b35282fde07277_home1-about1-img06.jpg",
    },
];

export function WhoWeAreSection() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    return (
        <section className="relative w-full py-20 overflow-hidden bg-[#f4f7fa]">
            {/* Background Blob */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 opacity-80 pointer-events-none">
                <img
                    src="https://cdn.prod.website-files.com/6908286d3734c75cf5e7c556/690c85236f4226141a64cf36_home1-about1-bg-img.png"
                    alt="blob background"
                    className="w-[400px] h-auto object-contain"
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

                {/* Top Header Area */}
                <div className="flex flex-col md:flex-row mb-16 gap-8">
                    <div className="md:w-1/3 flex items-start">
                        <div className="flex items-center gap-2 text-slate-500 font-medium tracking-widest text-sm uppercase">
                            <img src="https://cdn.prod.website-files.com/6908286d3734c75cf5e7c556/690ece6c3c2f2fbdff25a9a0_subtitle-icon.svg" alt="*" className="w-4 h-4" />
                            Who we are
                        </div>
                    </div>
                    <div className="md:w-2/3">
                        <h2 className="text-[32px] md:text-5xl lg:text-[50px] font-bold text-[#0f283d] leading-[1.1] tracking-tight">
                            Pioneering Healthcare Innovation <br className="hidden md:block" />
                            with Trusted Excellence
                        </h2>
                    </div>
                </div>

                {/* Main Content Split */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 justify-between items-center">

                    {/* Left Column - Slider */}
                    <div className="w-full lg:w-[45%] flex flex-col lg:ml-24 xl:ml-32">
                        <div className="relative overflow-hidden w-full h-[380px]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentSlide}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className="w-full h-full"
                                >
                                    <div className="flex gap-4 h-full">

                                        {/* Left Column (Card & Small Image) */}
                                        <div className="w-1/2 flex flex-col gap-4 h-full">
                                            {/* Dark Card */}
                                            <div className="bg-[#1b5364] rounded-xl p-6 lg:p-8 flex flex-col justify-center text-white flex-1 min-h-0">
                                                <div className="mb-4 lg:mb-6">
                                                    <img src={slides[currentSlide].icon} alt="icon" className="w-10 h-10 lg:w-12 lg:h-12" />
                                                </div>
                                                <h3 className="text-xl lg:text-[22px] font-bold mb-2 lg:mb-3">{slides[currentSlide].title}</h3>
                                                <p className="text-[#a0bac3] text-sm lg:text-[15px] leading-relaxed pr-2">{slides[currentSlide].desc}</p>
                                            </div>

                                            {/* Small Image (Bottom Left) */}
                                            <div className="flex-1 min-h-0 overflow-hidden rounded-xl">
                                                <img
                                                    src={slides[currentSlide].img1}
                                                    alt="slider image 1"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>

                                        {/* Right Column (Tall Image) */}
                                        <div className="w-1/2 h-full overflow-hidden rounded-xl">
                                            <img
                                                src={slides[currentSlide].img2}
                                                alt="slider image 2"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Slider Controls */}
                        <div className="flex items-center justify-center lg:justify-start lg:pl-[50%] mt-4 gap-2">
                            <button
                                onClick={prevSlide}
                                className="w-10 h-10 lg:w-12 lg:h-12 bg-white flex items-center justify-center hover:bg-slate-50 transition-colors shadow-sm"
                            >
                                <ChevronLeft className="w-5 h-5 text-[#07242e]" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="w-10 h-10 lg:w-12 lg:h-12 bg-white flex items-center justify-center hover:bg-slate-50 transition-colors shadow-sm"
                            >
                                <ChevronRight className="w-5 h-5 text-[#07242e]" />
                            </button>
                        </div>
                    </div>

                    {/* Right Column - Content */}
                    <div className="w-full lg:w-[40%] flex flex-col justify-center lg:pl-12 lg:pr-8">
                        <p className="text-slate-500 leading-relaxed mb-8">
                            We are driven by a commitment to advancing global health. Our mission is to blend cutting-edge scientific research with world-class manufacturing, delivering pharmaceutical solutions that meet the highest standards of safety, efficacy, and quality.
                        </p>

                        <div className="mb-12">
                            <a href="/about-us" className="inline-flex items-center justify-center bg-[#07242e] text-white px-8 py-4 rounded font-semibold text-sm tracking-wide gap-3 hover:bg-[#0f283d] transition-colors">
                                KNOW MORE
                                <span className="text-xl leading-none">+</span>
                            </a>
                        </div>

                        {/* Progress Bars */}
                        <div className="space-y-8">
                            <div className="w-full">
                                <div className="flex justify-between items-end mb-2">
                                    <span className="text-[#07242e] font-semibold text-sm">Happy customer</span>
                                    <span className="text-slate-500 text-sm">80<sup>%</sup></span>
                                </div>
                                <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                                    <div className="bg-[#07242e] h-full" style={{ width: '80%' }}></div>
                                </div>
                            </div>

                            <div className="w-full">
                                <div className="flex justify-between items-end mb-2">
                                    <span className="text-[#07242e] font-semibold text-sm">Target identification</span>
                                    <span className="text-slate-500 text-sm">95<sup>%</sup></span>
                                </div>
                                <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                                    <div className="bg-[#07242e] h-full" style={{ width: '95%' }}></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div >
            </div >
        </section >
    );
}
