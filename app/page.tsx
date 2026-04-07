import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Link from 'next/link';

/**
 * Aasiya’s Lounge - Main Home Page (page.tsx)
 * Design: Minimalist, Premium Editorial, Mobile-First
 */

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] selection:bg-[#E8E4DF] selection:text-[#1C1917]">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* 1. Services Overview (The Menu) */}
      <section className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-6 md:space-y-0">
          <div>
            <h2 className="text-sm tracking-[0.3em] text-[#968478] uppercase font-bold mb-4">
              Our Curated Menu
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif text-[#1C1917]">
              Signature <span className="italic font-light text-[#968478]">Services</span>
            </h3>
          </div>
          <Link 
            href="/services"
            className="text-[11px] tracking-[0.2em] uppercase text-[#1C1917] border-b border-[#1C1917] pb-1 hover:text-[#968478] hover:border-[#968478] transition-colors self-start md:self-auto"
          >
            View Full Menu
          </Link>
        </div>

        {/* Services Grid - Mobile First */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {services.map((service, index) => (
            <Link 
              href={service.link} 
              key={index}
              className="group block p-10 bg-white border border-[#E8E4DF] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-700"
            >
              <div className="flex justify-between items-start mb-16">
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#968478] font-medium">
                  0{index + 1}
                </span>
                <span className="text-xl text-[#1C1917] opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0 duration-500">
                  →
                </span>
              </div>
              <h4 className="text-2xl font-serif text-[#1C1917] mb-3 group-hover:text-[#968478] transition-colors">
                {service.title}
              </h4>
              <p className="text-sm font-light text-[#5C5A57] tracking-wide">
                {service.desc}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* 2. Philosophy / Editorial Section */}
      <section className="bg-[#F3EFEA] py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Image Block */}
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:max-w-none">
              <div className="absolute inset-0 bg-[#E8E4DF] translate-x-4 translate-y-4" />
              <img 
                src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1000&auto=format&fit=crop" 
                alt="Aasiya Lounge Atmosphere" 
                className="relative z-10 w-full h-full object-cover"
              />
            </div>

            {/* Text Block */}
            <div className="flex flex-col justify-center max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
              <span className="text-[10px] tracking-[0.4em] uppercase text-[#968478] font-bold mb-6 block">
                Our Philosophy
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-[#1C1917] leading-tight mb-8">
                A sanctuary of <span className="italic font-light text-[#968478]">refinement</span>.
              </h2>
              <p className="text-base text-[#5C5A57] font-light leading-relaxed mb-10">
                At Aasiya's Lounge, we believe that true beauty is an extension of inner wellness. 
                Our space is designed to be a haven from the bustling streets of Islamabad—a place 
                where time slows down, and luxury is found in the details. 
              </p>
              <div className="flex justify-center lg:justify-start">
  <img 
    src="/signature.png" 
    alt="Founder Signature" 
    className="h-26 opacity-60 mix-blend-multiply"
  />
</div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Final Booking CTA */}
      <section className="py-32 px-6 text-center max-w-3xl mx-auto">
        <span className="text-[10px] tracking-[0.4em] uppercase text-[#968478] font-bold mb-6 block">
          Begin Your Journey
        </span>
        <h2 className="text-4xl md:text-6xl font-serif text-[#1C1917] mb-12">
          Reserve Your <br />
          <span className="italic font-light text-[#968478]">Experience</span>
        </h2>
        <Link 
          href="/book"
          className="inline-block bg-[#1C1917] text-white px-12 py-5 text-[11px] uppercase tracking-[0.25em] font-bold transition-all duration-500 hover:bg-[#968478] active:scale-[0.98]"
        >
          Book an Appointment
        </Link>
      </section>

      {/* Footer */}
     
    </main>
  );
}

// --- Data ---

const services = [
  { 
    title: "Signature Hair", 
    desc: "Global dyes, dimensional balayage, and restorative keratin treatments.", 
    link: "/services#hair" 
  },
  { 
    title: "Luxury Facials", 
    desc: "Hydra, Korean Glass, and Gold facials tailored to your unique skin profile.", 
    link: "/services#facials" 
  },
  { 
    title: "Bridal Artistry", 
    desc: "Flawless, timeless makeup panels for Barat, Walima, and Nikkah.", 
    link: "/bridal" 
  },
  { 
    title: "Spa & Wellness", 
    desc: "Premium manicures, pedicures, and silk-smooth waxing experiences.", 
    link: "/services#spa" 
  }
];