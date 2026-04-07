'use client';

import React, { useEffect, useState } from 'react';

/**
 * Aasiya Lounge - Ultra-Premium Hero
 * Refined for a high-end editorial aesthetic.
 */

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    // Added pt-24 to pt-32 to ensure clear separation from the sticky navbar
    <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-[#FAF9F6] pt-28 pb-12 lg:pt-36">
      
      {/* 1. Abstract Background Art (Soft & Minimal) */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F3EFEA] skew-x-[-12deg] translate-x-32 pointer-events-none hidden lg:block" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-rose-50/60 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-4 items-center">
          
          {/* LEFT: Content (Spans 7 columns for readability) */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className={`transition-all duration-[1200ms] cubic-bezier(0.2, 0, 0, 1) ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}>
              
              {/* Premium Label */}
              <div className="inline-flex items-center space-x-3 mb-8">
                <div className="h-[1px] w-8 bg-amber-800/40" />
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-amber-900/60">
                  Est. Islamabad 2026
                </span>
              </div>

              {/* Editorial Headline */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-[#1C1917] leading-[1.05] tracking-tight mb-8">
                The Art of <br />
                <span className="italic font-light text-stone-400">Radiance.</span>
              </h1>

              {/* Elevated Subtext */}
              <p className="text-base md:text-lg text-stone-600 font-light leading-relaxed max-w-lg mb-12 border-l border-stone-200 pl-6">
                Discover a sanctuary where science meets serenity. Our tailored wellness 
                rituals are designed to celebrate your unique grace.
              </p>

              {/* CTAs - Refined Minimalist Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <button className="group relative w-full sm:w-auto bg-[#1C1917] text-white px-10 py-5 text-[11px] uppercase tracking-[0.2em] font-bold overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-stone-400">
                  <span className="relative z-10">Book Appointment</span>
                  <div className="absolute inset-0 bg-stone-700 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </button>
                
                <button className="group w-full sm:w-auto px-10 py-5 text-[11px] uppercase tracking-[0.2em] font-bold text-stone-800 flex items-center justify-center gap-2 transition-colors hover:text-amber-800">
                  Explore Menu
                  <svg width="18" height="1" viewBox="0 0 18 1" fill="none" className="transition-transform group-hover:translate-x-2">
                    <rect width="18" height="1" fill="currentColor"/>
                  </svg>
                </button>
              </div>

              {/* Social/Trust Proof (Subtle) */}
              <div className="mt-20 flex items-center gap-12 border-t border-stone-100 pt-8 max-w-md">
                <div>
                  <p className="text-2xl font-serif text-stone-800">4.9</p>
                  <p className="text-[9px] uppercase tracking-widest text-stone-400">Client Rating</p>
                </div>
                <div className="w-[1px] h-10 bg-stone-100" />
                <div>
                  <p className="text-2xl font-serif text-stone-800">15k+</p>
                  <p className="text-[9px] uppercase tracking-widest text-stone-400">Luxury Facials</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Visuals (Spans 5 columns) */}
          <div className="lg:col-span-5 order-1 lg:order-2 relative">
            <div className={`relative transition-all duration-[1500ms] delay-300 cubic-bezier(0.2, 0, 0, 1) ${
              isLoaded ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
            }`}>
              
              {/* Main Image Frame - High End Finish */}
              <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] aspect-[4/5] max-w-[420px] mx-auto group">
                <img 
                  src="https://images.unsplash.com/photo-1555820585-c5ae44394b79?q=80&w=425&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Aasiya Lounge Treatment"
                  className="w-full h-full object-cover transition-transform duration-[4s] scale-105 group-hover:scale-100"
                />
                {/* Soft Glass Overlay bottom */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-stone-900/40 to-transparent" />
              </div>

              {/* Floating Element 1 - The "Glass Card" */}
              <div className="absolute -bottom-8 -right-8 z-20 bg-white/40 backdrop-blur-xl p-8 shadow-2xl border border-white/20 hidden xl:block animate-float">
                <p className="text-[9px] uppercase tracking-[0.3em] text-amber-900 font-bold mb-2">Signature Choice</p>
                <p className="text-lg font-serif italic text-stone-800">Gold Infusion Facial</p>
              </div>

              {/* Floating Decoration - Luxury Ring */}
              <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full border-[0.5px] border-stone-200 pointer-events-none animate-spin-extremely-slow" />
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes spin-extremely-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-spin-extremely-slow {
          animation: spin-extremely-slow 25s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;