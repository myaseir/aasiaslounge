"use client";

import React from 'react';

export default function Hero() {
  const APPOINTMENT_LINK = "https://wa.me/923175656799";
  // Updated to a sophisticated, modern beauty visual for Makeup Launch
  const HERO_IMAGE = "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2000&auto=format&fit=crop";

  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-white overflow-hidden">
      
      {/* 1. Optimized Background Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src={HERO_IMAGE} 
          alt="Makeup Launch Luxury Artistry" 
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
        />
        {/* Dual-Layer Overlay for Text Clarity - Adjusted for the new image */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white/70"></div>
      </div>

      {/* 2. Main Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-6 pt-10">
        
        {/* Floating Brand Name */}
        <h1 className="text-[14vw] md:text-[10rem] font-serif text-zinc-900 leading-none tracking-tighter mb-4 md:mb-6 animate-fade-in drop-shadow-sm">
          Makeup Launch
        </h1>
        
        {/* Elegant Minimalist Divider */}
        <div className="h-px w-10 md:w-16 bg-zinc-900 mb-6 md:mb-10 opacity-40"></div>

        {/* Studio Subtitle - Updated for full service range */}
        <div className="flex flex-col items-center gap-4 mb-10 md:mb-14">
          <p className="text-[10px] md:text-sm tracking-[0.6em] uppercase text-zinc-800 font-medium">
            Makeup <span className="text-zinc-400 mx-1">/</span> Nails <span className="text-zinc-400 mx-1">/</span> Hair <span className="text-zinc-400 mx-1">/</span> Spa
          </p>
          <span className="text-[9px] tracking-[0.4em] uppercase text-rose-900 font-bold">The Luxury Experience</span>
        </div>

        {/* High-End Refined Button */}
        <a 
          href={APPOINTMENT_LINK}
          className="group relative px-10 py-4 md:px-14 md:py-5 border border-zinc-900 text-zinc-900 text-[10px] md:text-xs tracking-[0.5em] uppercase font-bold overflow-hidden transition-all duration-700 hover:text-white"
        >
          <span className="relative z-10">Book An Appointment</span>
          <div className="absolute inset-0 bg-zinc-900 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
        </a>
      </div>

      {/* 3. Global Accreditation Footer */}
      <div className="absolute bottom-10 w-full px-8 md:px-12 flex justify-between items-end text-[8px] md:text-[9px] tracking-[0.3em] uppercase">
        <div className="flex flex-col gap-2 text-zinc-500">
          <span>Premium Artistry</span>
          <span>Wellness & Glow</span>
        </div>
        <div className="flex flex-col gap-2 text-right text-zinc-500">
          <span>0317-5656799</span>
          <span>0315-1505838</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes slow-zoom {
          0% { transform: scale(1.05); }
          100% { transform: scale(1.15); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s infinite alternate ease-in-out;
        }
        .animate-fade-in {
          animation: fadeIn 2.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); filter: blur(15px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
      `}</style>
    </section>
  );
}