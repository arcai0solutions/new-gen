export function CtaSection() {
    return (
        <section className="relative w-full py-24 bg-[#07242e] overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-[#1b5364] rounded-full blur-[120px] opacity-50" />
            <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-[#0f283d] rounded-full blur-[100px] opacity-50" />

            <div className="relative max-w-7xl mx-auto px-4 md:px-8 z-10 text-center">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                    Ready to transform your <br className="hidden md:block" />
                    healthcare experience?
                </h2>
                <p className="text-[#a0bac3] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                    Join thousands of satisfied clients who trust Newgen Lanka for exceptional medical equipment and automated systems.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="/contact" className="px-8 py-4 bg-white text-[#07242e] font-semibold rounded-full hover:bg-slate-100 hover:scale-105 transition-all shadow-lg text-lg w-full sm:w-auto text-center">
                        Contact Us Today
                    </a>
                    <a href="/services" className="px-8 py-4 bg-transparent border border-[#a0bac3]/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all text-lg w-full sm:w-auto text-center">
                        Explore Our Services
                    </a>
                </div>
            </div>
        </section>
    );
}
