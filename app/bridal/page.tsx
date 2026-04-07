import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

/**
 * Aasiya’s Lounge - Bridal Boutique Page
 * Design: Ultra-Premium Editorial (Mobile-Optimized)
 * Focus: Flawless responsive stacking, legible mobile typography
 */

export default function BridalPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF9] text-[#2A2421] selection:bg-[#EAE4DD] selection:text-[#2A2421]">
      <Navbar />

      {/* 1. Hero Section - Mobile Adjusted */}
      <section className="relative pt-28 md:pt-40 lg:pt-48 pb-16 md:pb-32 px-5 md:px-12 lg:px-24 max-w-[1600px] mx-auto overflow-hidden lg:overflow-visible">
        
        {/* Soft Ambient Glow */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-1/4 w-[300px] lg:w-[400px] h-[300px] lg:h-[400px] bg-[#F5EFE9]/80 rounded-full blur-[100px] pointer-events-none -z-10" />

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
          
          {/* Typography Block */}
          <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1 z-10 flex flex-col items-center lg:items-start">
            <div className="inline-flex items-center space-x-3 mb-6 md:mb-8">
              <span className="w-6 md:w-8 h-[1px] bg-[#8C7D73]" />
              <span className="text-[10px] md:text-[9px] tracking-[0.3em] md:tracking-[0.4em] uppercase text-[#8C7D73] font-bold">
                The Bridal Boutique
              </span>
              <span className="w-6 md:w-0 h-[1px] bg-[#8C7D73] lg:hidden" />
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif leading-[1.1] md:leading-[1.05] tracking-tight mb-6 md:mb-8">
              Flawless. <br className="hidden lg:block" />
              Timeless. <br className="lg:hidden" />
              <span className="italic font-light text-[#8C7D73]">Picture-Perfect.</span>
            </h1>
            
            <p className="text-[14px] md:text-[15px] text-[#6B615A] font-light leading-relaxed mb-10 max-w-[90%] md:max-w-md text-center lg:text-left">
              Your wedding day is a masterpiece in the making. Our signature panels combine 
              luxury skincare, precision artistry, and elite styling to ensure you radiate total confidence.
            </p>
            
            <Link 
              href="/book"
              className="group relative w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 sm:py-5 bg-[#2A2421] text-white text-[11px] md:text-[10px] uppercase tracking-[0.25em] font-medium overflow-hidden transition-all duration-500"
            >
              <span className="relative z-10 group-hover:text-[#FDFBF9] transition-colors duration-500">Inquire Availability</span>
              <div className="absolute inset-0 bg-[#8C7D73] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            </Link>
          </div>

          {/* Passepartout Image Frame - Mobile Scaled */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2 px-4 sm:px-10 lg:px-0">
            <div className="relative p-3 md:p-4 bg-white shadow-[0_20px_50px_-10px_rgba(0,0,0,0.05)] w-full max-w-[360px] md:max-w-[420px] aspect-[4/5] group">
              <div className="w-full h-full relative overflow-hidden border border-[#F5EFE9]">
                <img 
                  src="https://images.unsplash.com/photo-1629118477133-b8b1499f2b8a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Aesthetic Bridal Makeup"
                  className="w-full h-full object-cover transform transition-transform duration-[4s] ease-out group-hover:scale-105"
                />
              </div>
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-6 md:w-8 h-[1px] bg-white/60 mix-blend-overlay" />
            </div>
          </div>

        </div>
      </section>

      {/* 2. Signature Collections - Mobile Gap & Aspect Ratio Adjusted */}
      <section className="py-20 md:py-32 px-5 md:px-12 bg-[#F8F6F3]">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16 md:mb-24 px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#2A2421] mb-4 md:mb-6">Signature Collections</h2>
            <p className="text-[14px] md:text-[15px] text-[#6B615A] font-light tracking-wide max-w-lg mx-auto">
              Curated luxury panels, tailored to the unique energy of your celebration.
            </p>
          </div>

          {/* Increased mobile gap (gap-16) to ensure overlapping boxes don't touch the next image */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 md:gap-12 lg:gap-16">
            {bridalPackages.map((pkg, index) => (
              <div key={index} className="flex flex-col group">
                
                {/* Image Section - aspect-[4/5] on mobile gives image more height to support the overlap */}
                <div className="relative aspect-[4/5] md:aspect-[3/4] w-full overflow-hidden bg-[#EAE4DD]">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title}
                    className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105 opacity-95"
                  />
                </div>

                {/* Overlapping Content Box - perfectly centered on mobile */}
                <div className="relative -mt-16 mx-4 md:-mt-20 md:mx-6 bg-white p-8 sm:p-10 shadow-[0_15px_35px_-5px_rgba(0,0,0,0.04)] border border-[#F0EBE6] z-10 flex flex-col flex-grow transition-transform duration-500 md:group-hover:-translate-y-2">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl md:text-3xl font-serif text-[#2A2421] mb-2">{pkg.title}</h3>
                    <p className="text-[10px] md:text-[9px] uppercase tracking-[0.25em] md:tracking-[0.3em] font-medium text-[#8C7D73]">{pkg.subtitle}</p>
                  </div>

                  <div className="space-y-4 md:space-y-5 flex-grow">
                    {pkg.options.map((option, oIdx) => (
                      <div key={oIdx} className="flex flex-col items-center border-b border-[#F5EFE9] pb-3 md:pb-4">
                        <p className="text-[11px] md:text-[10px] tracking-[0.15em] md:tracking-[0.2em] uppercase text-[#6B615A] mb-1 text-center">{option.panel}</p>
                        <p className="text-[16px] md:text-[15px] font-medium text-[#2A2421] tracking-tight">Rs. {option.price}/-</p>
                      </div>
                    ))}
                  </div>

                  {pkg.note && (
                    <div className="mt-8 pt-6 border-t border-dotted border-[#EAE4DD] text-center">
                      <p className="text-[10px] md:text-[9px] uppercase tracking-[0.2em] font-bold text-[#8C7D73] mb-2">Complimentary Ritual</p>
                      <p className="text-[12px] md:text-[11px] leading-relaxed text-[#6B615A] font-light px-2 md:px-0">{pkg.note}</p>
                    </div>
                  )}
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Party & Guest Makeup - Image Aspect Fixed for Mobile */}
      <section className="bg-white">
        <div className="flex flex-col lg:flex-row min-h-[auto] lg:min-h-[70vh]">
            
            {/* Visual Half - Fixed height on mobile to prevent massive scrolling */}
            <div className="w-full lg:w-1/2 relative h-[40vh] sm:h-[50vh] lg:h-auto overflow-hidden group">
                <img 
                    src="https://images.unsplash.com/photo-1487412912498-0447578fcca8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Party Makeup Editorial"
                    className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-[5s] group-hover:scale-105"
                />
            </div>

            {/* Content Half */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-24 bg-white">
                <div className="w-full max-w-md">
                    <div className="mb-10 lg:mb-14 text-center sm:text-left">
                        <span className="text-[10px] md:text-[9px] tracking-[0.3em] md:tracking-[0.4em] uppercase text-[#8C7D73] font-bold mb-4 block">
                            Occasion Artistry
                        </span>
                        <h3 className="text-3xl md:text-4xl font-serif text-[#2A2421] mb-3 md:mb-4">Party Makeup</h3>
                        <p className="text-[14px] md:text-[13px] text-[#6B615A] font-light leading-relaxed">
                            Bespoke glam for family, bridesmaids, and esteemed guests. 
                            Ensuring flawless harmony with the bridal party.
                        </p>
                    </div>
                    
                    <div className="space-y-6">
                        {partyMakeup.map((item, index) => (
                            <div key={index} className="flex flex-col sm:flex-row sm:items-end justify-between group text-center sm:text-left">
                                <span className="text-[15px] font-medium text-[#2A2421] group-hover:text-[#8C7D73] transition-colors duration-300">
                                    {item.name}
                                </span>
                                {/* Dotted line hidden on mobile for cleaner stacking */}
                                <div className="hidden sm:block flex-grow border-b border-dotted border-[#D4CEC9] mx-4 relative top-[-6px]"></div>
                                <span className="text-[14px] sm:text-[13px] font-medium text-[#6B615A] mt-1 sm:mt-0">
                                    Rs. {item.price}/-
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
      </section>

      {/* 4. Consultation Banner */}
      <section className="py-24 md:py-32 bg-[#1C1816] text-center px-5 md:px-6">
        <div className="max-w-2xl mx-auto text-[#FDFBF9]">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 md:mb-8 leading-tight">
            Design your unique <br className="hidden md:block"/>
            <span className="italic font-light text-[#C2B4A7]">bridal aesthetic.</span>
          </h2>
          <p className="text-[14px] md:text-[13px] text-[#A69C95] font-light mb-10 md:mb-12 leading-relaxed max-w-[90%] md:max-w-lg mx-auto">
            We highly recommend a specialized consultation. Allow our senior team to analyze your skin, 
            discuss your wardrobe, and customize a look that feels authentically you.
          </p>
          <Link 
            href="/book"
            className="inline-block w-full sm:w-auto px-10 md:px-12 py-4 md:py-5 border border-[#C2B4A7] text-[#FDFBF9] text-[11px] md:text-[10px] uppercase tracking-[0.25em] md:tracking-[0.3em] font-medium hover:bg-[#FDFBF9] hover:text-[#1C1816] transition-all duration-500"
          >
            Request Appointment
          </Link>
        </div>
      </section>

    
    </main>
  );
}

/* ==================================================================
   DATA STRUCTURES
================================================================== */

const bridalPackages = [
    {
        title: 'Barat',
        subtitle: 'The Grand Celebration',
        image: 'https://plus.unsplash.com/premium_photo-1682092632793-c7d75b23718e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
        options: [
            { panel: 'Signature Panel', price: '55,000' },
            { panel: 'Senior Panel', price: '45,000' },
        ],
        note: '6-Step Ritual: Body Wax, Facial, Mani, Pedi, Eyebrows & Face Wax.',
    },
    {
        title: 'Walima',
        subtitle: 'The Reception Elegance',
        image: 'https://plus.unsplash.com/premium_photo-1690148812608-9942834931a1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
        options: [
            { panel: 'Signature Panel', price: '45,000' },
            { panel: 'Senior Panel', price: '38,000' },
        ],
    },
    {
        title: 'Nikkah',
        subtitle: 'Intimate Beginnings',
        image: 'https://plus.unsplash.com/premium_photo-1661894693368-2dc6e9fcaed2?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
        options: [
            { panel: 'Signature Panel', price: '35,000' },
            { panel: 'Senior Panel', price: '30,000' },
        ],
    },
];

const partyMakeup = [
    { name: 'Signature Party Makeup', price: '7,000' },
    { name: 'Glowy Party Makeup', price: '6,000' },
    { name: 'Simple Party Makeup', price: '5,000' },
];