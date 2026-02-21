import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="bg-slate-50 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 lg:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

                    {/* Brand Column */}
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold text-[#07242e] tracking-tight">Newgen<span className="text-sky-500">Lanka</span></span>
                        </div>
                        <p className="text-slate-500 leading-relaxed text-sm">
                            Committed to making wellness accessible for everyone, everywhere. Exploring the latest innovations with trusted experts.
                        </p>
                        <div className="flex items-center gap-4 mt-2">
                            <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-sky-500 hover:border-sky-200 hover:bg-sky-50 transition-all">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-sky-500 hover:border-sky-200 hover:bg-sky-50 transition-all">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-sky-500 hover:border-sky-200 hover:bg-sky-50 transition-all">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-sky-500 hover:border-sky-200 hover:bg-sky-50 transition-all">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-6 lg:pl-12">
                        <h4 className="text-[#0f283d] font-bold text-lg">Quick Links</h4>
                        <ul className="flex flex-col gap-4 text-sm">
                            <li><a href="/" className="text-slate-500 hover:text-sky-500 transition-colors">Home</a></li>
                            <li><a href="/about-us" className="text-slate-500 hover:text-sky-500 transition-colors">About Us</a></li>
                            <li><a href="/services" className="text-slate-500 hover:text-sky-500 transition-colors">Our Services</a></li>
                            <li><a href="/products" className="text-slate-500 hover:text-sky-500 transition-colors">Products</a></li>
                            <li><a href="/contact" className="text-slate-500 hover:text-sky-500 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-[#0f283d] font-bold text-lg">Our Services</h4>
                        <ul className="flex flex-col gap-4 text-sm">
                            <li><a href="#" className="text-slate-500 hover:text-sky-500 transition-colors">Laboratory Equipment</a></li>
                            <li><a href="#" className="text-slate-500 hover:text-sky-500 transition-colors">Medical Scanners</a></li>
                            <li><a href="#" className="text-slate-500 hover:text-sky-500 transition-colors">Automated Systems</a></li>
                            <li><a href="#" className="text-slate-500 hover:text-sky-500 transition-colors">Training Programs</a></li>
                            <li><a href="#" className="text-slate-500 hover:text-sky-500 transition-colors">Technical Support</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-[#0f283d] font-bold text-lg">Contact Us</h4>
                        <ul className="flex flex-col gap-5 text-sm">
                            <li className="flex items-start gap-4">
                                <MapPin className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                                <span className="text-slate-500 leading-relaxed">123 Health Care Ave, Colombo 03, Sri Lanka</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Phone className="w-5 h-5 text-sky-500 shrink-0" />
                                <span className="text-slate-500">+94 11 234 5678</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Mail className="w-5 h-5 text-sky-500 shrink-0" />
                                <span className="text-slate-500">info@newgenlanka.com</span>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-slate-500 text-sm">
                        © {new Date().getFullYear()} Newgen Lanka. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 text-sm">
                        <a href="#" className="text-slate-500 hover:text-sky-500 transition-colors">Privacy Policy</a>
                        <a href="#" className="text-slate-500 hover:text-sky-500 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
