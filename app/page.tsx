"use client";

import { useState } from "react";
import { HeroSection } from "@/components/hero-section";
import { WhoWeAreSection } from "@/components/who-we-are-section";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { ProductVideoSection } from "@/components/product-video-section";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { Preloader } from "@/components/preloader";

export default function Home() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <main className="min-h-screen bg-slate-50 relative">
      <Preloader onComplete={() => setIsVideoPlaying(true)} />
      <HeroSection isPlaying={isVideoPlaying} />
      <WhoWeAreSection />
      <AboutSection />
      <ServicesSection />
      <ProductVideoSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
