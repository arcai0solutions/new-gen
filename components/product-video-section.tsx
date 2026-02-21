export function ProductVideoSection() {
    return (
        <section className="w-full h-[60vh] min-h-[400px] max-h-[800px] relative bg-slate-900 overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src="/product.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        </section>
    );
}
