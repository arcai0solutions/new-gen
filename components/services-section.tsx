"use client";

import React from "react";
import { motion } from "framer-motion";

const services = [
    {
        id: "01",
        title: "Antimicrobials",
        description: "An antimicrobial is an agent that eradicates microorganisms or stops their growth.",
        icon: "/range/antimicrobials.svg"
    },
    {
        id: "02",
        title: "Alimentary system related product",
        description: "These are agents used to treat conditions of the digestive system consisting of the gastrointestinal tract and accessory organs of digestion.",
        icon: "/range/alimentary.svg"
    },
    {
        id: "03",
        title: "Antihistamines",
        description: "Antihistamines are agents which treat allergic conditions.",
        icon: "/range/antihistamines.svg"
    },
    {
        id: "04",
        title: "Neuropsychiatric products",
        description: "These are agents which are prescribed to treat different types of mental health conditions.",
        icon: "/range/neuropsychiatric.svg"
    },
    {
        id: "05",
        title: "Cardiovascular system related products",
        description: "These are agents which are prescribed to treat conditions involving the circulatory system consisting of the heart, blood and blood vessels.",
        icon: "/range/cardiovascular.svg"
    },
    {
        id: "06",
        title: "Endocrine system related products",
        description: "These are agents which treat conditions of the endocrine system containing endocrine glands that secrete hormones.",
        icon: "/range/endocrine.svg"
    },
    {
        id: "07",
        title: "Dermatological products",
        description: "Dermatological agents treat skin conditions.",
        icon: "/range/dermatological.svg"
    },
    {
        id: "08",
        title: "Respiratory system related products",
        description: "These are agents which are prescribed to treat conditions involving the respiratory system consisting of the lungs, airways and blood vessels.",
        icon: "/range/respiratory.svg"
    }
];

export function ServicesSection() {
    return (
        <section id="services" className="bg-white text-black relative z-30 mt-20 md:mt-32">
            <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row">

                {/* Left Sticky Sidebar */}
                <div className="w-full lg:w-1/2 lg:h-screen lg:sticky lg:top-24 flex flex-col justify-center px-6 py-20 md:px-12 lg:px-20 border-r border-[#E5E5E5]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col gap-12 max-w-xl"
                    >
                        <div className="flex items-center gap-2">
                            <span className="text-sky-500 text-xl font-bold">{"//"}</span>
                            <span className="text-black font-semibold tracking-wide">WHAT WE DELIVER</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-tight tracking-tight">
                            OUR RANGE
                        </h2>
                        <div className="mt-8 mx-auto lg:mx-0">
                            <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-3">
                                GMP Compliance
                            </h3>
                            <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-sm">
                                All manufacturing formalities at the Newgen Lanka facility are guided by and adhere to Good Manufacturing Practices (WHO GMP) prescribed.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Right side items */}
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="group border-b border-[#E5E5E5] p-6 md:p-8 lg:p-10 hover:bg-[#FAFAFA] transition-colors duration-300 min-h-[180px] flex flex-col justify-center gap-5"
                            >
                                <div className="flex justify-between items-start w-full">
                                    <div className="w-12 h-12 md:w-16 md:h-16 relative">
                                        <img
                                            alt={service.title}
                                            loading="lazy"
                                            className="w-full h-full object-contain"
                                            src={service.icon}
                                        />
                                    </div>
                                    <span className="text-gray-400 text-lg font-medium">{service.id}</span>
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight group-hover:text-sky-500 transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-500 text-base leading-relaxed max-w-lg">
                                        {service.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
