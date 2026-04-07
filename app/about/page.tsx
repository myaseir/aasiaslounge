import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

/**
 * Aasiya’s Lounge - About Page
 * Design: High-End Editorial / Luxury Brand Story
 * Focus: Founders story, philosophy, premium imagery, and whitespace
 */

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF9] text-[#2A2421] selection:bg-[#EAE4DD] selection:text-[#2A2421]">
      <Navbar />

      {/* 1. Hero Section - The Brand Identity */}
      <section className="relative pt-32 md:pt-48 pb-20 md:pb-32 px-5 md:px-12 lg:px-24 max-w-[1600px] mx-auto overflow-hidden">
        
        {/* Soft Background Glow */}
        <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#F5EFE9]/80 rounded-full blur-[100px] md:blur-[150px] pointer-events-none -z-10" />

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
          
          {/* Typography */}
          <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1 z-10 flex flex-col items-center lg:items-start">
            <div className="inline-flex items-center space-x-3 mb-6 md:mb-8">
              <span className="w-6 md:w-8 h-[1px] bg-[#8C7D73]" />
              <span className="text-[10px] md:text-[9px] tracking-[0.3em] md:tracking-[0.4em] uppercase text-[#8C7D73] font-bold">
                Our Story
              </span>
              <span className="w-6 md:w-0 h-[1px] bg-[#8C7D73] lg:hidden" />
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif leading-[1.1] md:leading-[1.05] tracking-tight mb-6 md:mb-8">
              Redefining <br className="hidden lg:block" />
              <span className="italic font-light text-[#8C7D73]">Luxury Wellness.</span>
            </h1>
            
            <p className="text-[14px] md:text-[15px] text-[#6B615A] font-light leading-relaxed mb-10 max-w-[90%] md:max-w-md text-center lg:text-left">
              Born from a vision to create an unparalleled sanctuary in Islamabad, Aasiya’s Lounge 
              is more than a salon. It is an institution dedicated to the meticulous art of self-care.
            </p>
          </div>

          {/* Aesthetic Image - Founder / Salon Vibe */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2 px-4 sm:px-10 lg:px-0">
            <div className="relative w-full max-w-[360px] md:max-w-[420px] aspect-[4/5] overflow-hidden group shadow-[0_20px_50px_-10px_rgba(0,0,0,0.05)] border-[10px] md:border-[15px] border-white">
              <img 
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000&auto=format&fit=crop" 
                alt="Aasiya Lounge Interior Aesthetics"
                className="w-full h-full object-cover transform transition-transform duration-[4s] ease-out group-hover:scale-105"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 2. The Philosophy - Text Centric */}
      <section className="py-20 md:py-32 px-5 md:px-12 bg-[#F8F6F3]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-serif text-[#2A2421] mb-8 md:mb-12 leading-tight">
            "Beauty is not just seen; <br className="hidden md:block" />
            <span className="italic font-light text-[#8C7D73]">it is deeply felt."</span>
          </h2>
          <div className="w-16 h-[1px] bg-[#8C7D73] mx-auto mb-10 md:mb-12" />
          <p className="text-[14px] md:text-[16px] text-[#6B615A] font-light leading-relaxed tracking-wide">
            At Aasiya's Lounge, our philosophy is rooted in the belief that luxury is an experience, 
            not a price tag. We source the finest products globally, employ masters of their craft, 
            and design every ritual to be a moment of absolute serenity. When you walk through our doors 
            in DHA Phase 6, you are stepping away from the noise of the world and into a space 
            curated entirely for your peace.
          </p>
        </div>
      </section>

      {/* 3. Core Values - Minimalist Grid */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          
          {/* Value 1 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left group">
            <span className="text-[2rem] font-serif text-[#EAE4DD] group-hover:text-[#8C7D73] transition-colors duration-500 mb-4">01</span>
            <h3 className="text-xl font-serif text-[#2A2421] mb-4 uppercase tracking-widest">Precision Artistry</h3>
            <p className="text-[13px] text-[#6B615A] font-light leading-relaxed">
              Every cut, stroke, and application is performed with exactness. We do not rush perfection; 
              we cultivate it through continuous education and passion.
            </p>
          </div>

          {/* Value 2 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left group">
            <span className="text-[2rem] font-serif text-[#EAE4DD] group-hover:text-[#8C7D73] transition-colors duration-500 mb-4">02</span>
            <h3 className="text-xl font-serif text-[#2A2421] mb-4 uppercase tracking-widest">Premium Ethics</h3>
            <p className="text-[13px] text-[#6B615A] font-light leading-relaxed">
              We compromise on nothing. The products touching your skin and hair are rigorously vetted 
              for quality, ensuring results that are both safe and spectacular.
            </p>
          </div>

          {/* Value 3 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left group">
            <span className="text-[2rem] font-serif text-[#EAE4DD] group-hover:text-[#8C7D73] transition-colors duration-500 mb-4">03</span>
            <h3 className="text-xl font-serif text-[#2A2421] mb-4 uppercase tracking-widest">Tranquil Spaces</h3>
            <p className="text-[13px] text-[#6B615A] font-light leading-relaxed">
              The environment matters. Our lounge is acoustically and visually designed to lower your 
              heart rate and elevate your spirit from the moment you arrive.
            </p>
          </div>

        </div>
      </section>

      {/* 4. Full Bleed Image / The Space */}
      <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2000&auto=format&fit=crop" 
          alt="Luxury Salon Interior"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#2A2421]/20" />
      </section>

      {/* 5. Visit Us / Booking Banner */}
      <section className="py-24 md:py-32 bg-[#1C1816] text-center px-5 md:px-6">
        <div className="max-w-2xl mx-auto text-[#FDFBF9]">
          <span className="text-[10px] md:text-[9px] tracking-[0.3em] md:tracking-[0.4em] uppercase text-[#C2B4A7] font-bold mb-6 block">
            Experience the Lounge
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 md:mb-8 leading-tight">
            We look forward to <br className="hidden md:block"/>
            <span className="italic font-light text-[#C2B4A7]">welcoming you.</span>
          </h2>
          <p className="text-[14px] md:text-[13px] text-[#A69C95] font-light mb-10 md:mb-12 leading-relaxed max-w-[90%] md:max-w-lg mx-auto">
            Located in the heart of Islamabad, Aasiya’s Lounge operates by appointment to ensure 
            every guest receives our undivided attention. 
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/book"
              className="inline-block w-full sm:w-auto px-10 md:px-12 py-4 md:py-5 bg-[#FDFBF9] text-[#1C1816] text-[11px] md:text-[10px] uppercase tracking-[0.25em] md:tracking-[0.3em] font-medium hover:bg-[#C2B4A7] transition-all duration-500"
            >
              Book an Appointment
            </Link>
            <Link 
              href="/services"
              className="inline-block w-full sm:w-auto px-10 md:px-12 py-4 md:py-5 border border-[#C2B4A7] text-[#FDFBF9] text-[11px] md:text-[10px] uppercase tracking-[0.25em] md:tracking-[0.3em] font-medium hover:bg-[#FDFBF9] hover:text-[#1C1816] transition-all duration-500"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

     
    </main>
  );
}