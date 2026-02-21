"use client";

import React, { useRef, useEffect } from "react";
import { AnimatedMenu } from "@/components/animated-menu";

export function HeroSection({ isPlaying = true }: { isPlaying?: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Speed up video playback and handle play state
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.5;

      if (isPlaying) {
        videoRef.current.play().catch(e => console.log("Auto-play prevented", e));
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  const handleVideoEnded = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0; // Reset to start frame
      videoRef.current.pause(); // Ensure it stops playing
    }
  };

  return (
    <section className="relative w-screen h-[100dvh] bg-sky-200 p-[5px]">
      {/* The Authentic Glass Frame using the user's preferred styling */}
      <div className="relative w-full h-full rounded-[40px] border border-white/20 bg-gradient-to-b from-white/20 to-white/5 backdrop-blur-2xl shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8),0_0_50px_-10px_rgba(255,255,255,0.15),inset_0_1px_0_0_rgba(255,255,255,0.3)] overflow-hidden flex items-center justify-center p-0 md:p-0">

        {/* Logo overlay on top-left of the glass container */}
        <div className="absolute top-4 left-4 md:top-8 md:left-8 z-50 bg-white rounded-lg md:rounded-xl p-1 md:p-[6px] shadow-lg flex items-center justify-center border border-white/50">
          <img
            src="/Newgen-Lanka-Health-Care-Logo.png"
            alt="Newgen Lanka Healthcare Logo"
            className="h-10 md:h-12 lg:h-16 w-auto select-none pointer-events-none drop-shadow-sm"
          />
        </div>

        {/* Animated Pill Menu */}
        <AnimatedMenu />

        {/* Video plays once and stops at the first frame */}
        <video
          ref={videoRef}
          muted
          playsInline
          onEnded={handleVideoEnded}
          className="w-full h-full object-cover rounded-[40px]"
        >
          <source src="/Cinematic_extreme_slowmotion_1080p_20260221.mp4" type="video/mp4" />
        </video>

        {/* Black overlay on top of the video */}
        <div className="absolute inset-0 bg-black/40 rounded-[40px] pointer-events-none" />

        {/* Hero Text Overlay */}
        <div className="absolute inset-0 z-30 flex flex-col items-start justify-end text-left px-8 md:px-16 pb-24 md:pb-32 pointer-events-none">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
            Empowering Health Through<br />Innovation & Excellence
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-white/90 max-w-3xl leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]">
            At Newgen Lanka, we blend advanced scientific research with world-class manufacturing to deliver superior pharmaceutical solutions. Guided by global GMP standards and a commitment to zero defects, we are dedicated to making everyone well, everywhere.
          </p>
        </div>
      </div>
    </section>
  );
}
