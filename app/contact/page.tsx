import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

/**
 * Aasiya’s Lounge - Contact & Reservations Page
 * Design: High-End Editorial / Luxury Stationery Layout
 * Focus: Clean lines, minimalist forms, elegant typography
 */

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF9] text-[#2A2421] selection:bg-[#EAE4DD] selection:text-[#2A2421]">
      <Navbar />

      {/* 1. Hero Section */}
      <section className="relative pt-32 md:pt-48 pb-16 md:pb-24 px-5 md:px-12 lg:px-24 max-w-[1600px] mx-auto overflow-hidden">
        {/* Soft Ambient Glow */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#F5EFE9]/80 rounded-full blur-[100px] pointer-events-none -z-10" />

        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-3 mb-6 md:mb-8">
            <span className="w-6 md:w-8 h-[1px] bg-[#8C7D73]" />
            <span className="text-[10px] md:text-[9px] tracking-[0.3em] md:tracking-[0.4em] uppercase text-[#8C7D73] font-bold">
              Connect With Us
            </span>
            <span className="w-6 md:w-8 h-[1px] bg-[#8C7D73]" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.1] md:leading-[1.05] tracking-tight mb-6 md:mb-8">
            Reservations & <br className="hidden md:block" />
            <span className="italic font-light text-[#8C7D73]">Inquiries.</span>
          </h1>
          
          <p className="text-[14px] md:text-[15px] text-[#6B615A] font-light leading-relaxed max-w-lg mx-auto">
            Whether you are booking a signature ritual, a bridal consultation, or simply have a question 
            about our services, our concierge team is here to assist you.
          </p>
        </div>
      </section>

      {/* 2. Contact Split Layout (Info + Form) */}
      <section className="pb-24 md:pb-32 px-5 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column: Contact Information */}
          <div className="w-full lg:w-5/12 space-y-12 md:space-y-16">
            
            {/* Location */}
            <div>
              <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#8C7D73] mb-4">The Lounge</h3>
              <div className="space-y-2 text-[15px] md:text-[16px] font-serif text-[#2A2421]">
                <p>F10/2, Idrees Market</p>
                <p>Islamabad, Pakistan</p>
              </div>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noreferrer"
                className="inline-block mt-4 text-[11px] uppercase tracking-widest text-[#6B615A] border-b border-[#6B615A] pb-0.5 hover:text-[#2A2421] hover:border-[#2A2421] transition-colors"
              >
                Get Directions
              </a>
            </div>

            {/* Direct Contact */}
            <div>
              <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#8C7D73] mb-4">Direct Contact</h3>
              <div className="space-y-4 text-[15px] md:text-[16px] font-serif text-[#2A2421]">
                <p className="flex items-center hover:text-[#8C7D73] transition-colors cursor-pointer">
                  +92 300 1234567
                </p>
                <p className="flex items-center hover:text-[#8C7D73] transition-colors cursor-pointer italic">
                  hello@aasiyaslounge.com
                </p>
              </div>
            </div>

            {/* Hours */}
            <div>
              <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#8C7D73] mb-4">Opening Hours</h3>
              <div className="space-y-2 text-[14px] text-[#6B615A] font-light tracking-wide">
                <div className="flex justify-between max-w-[250px]">
                  <span>Tuesday – Sunday</span>
                  <span>11:00 AM – 8:00 PM</span>
                </div>
                <div className="flex justify-between max-w-[250px]">
                  <span>Monday</span>
                  <span className="italic text-[#8C7D73]">Closed</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Contact Form */}
          <div className="w-full lg:w-7/12 bg-white p-8 md:p-14 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.03)] border border-[#F5EFE9]">
            <h2 className="text-2xl font-serif text-[#2A2421] mb-8">Send a Message</h2>
            
            <form className="space-y-8">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Name */}
                <div className="relative group">
                  <input 
                    type="text" 
                    id="name"
                    required
                    className="w-full bg-transparent border-b border-[#D4CEC9] py-3 text-[14px] font-light text-[#2A2421] focus:outline-none focus:border-[#8C7D73] transition-colors peer placeholder-transparent"
                    placeholder="Name"
                  />
                  <label htmlFor="name" className="absolute left-0 top-3 text-[11px] uppercase tracking-widest text-[#A69C95] transition-all peer-focus:-top-4 peer-focus:text-[9px] peer-focus:text-[#8C7D73] peer-valid:-top-4 peer-valid:text-[9px] peer-valid:text-[#8C7D73] cursor-text">
                    Full Name *
                  </label>
                </div>

                {/* Email */}
                <div className="relative group">
                  <input 
                    type="email" 
                    id="email"
                    required
                    className="w-full bg-transparent border-b border-[#D4CEC9] py-3 text-[14px] font-light text-[#2A2421] focus:outline-none focus:border-[#8C7D73] transition-colors peer placeholder-transparent"
                    placeholder="Email"
                  />
                  <label htmlFor="email" className="absolute left-0 top-3 text-[11px] uppercase tracking-widest text-[#A69C95] transition-all peer-focus:-top-4 peer-focus:text-[9px] peer-focus:text-[#8C7D73] peer-valid:-top-4 peer-valid:text-[9px] peer-valid:text-[#8C7D73] cursor-text">
                    Email Address *
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Phone */}
                <div className="relative group">
                  <input 
                    type="tel" 
                    id="phone"
                    className="w-full bg-transparent border-b border-[#D4CEC9] py-3 text-[14px] font-light text-[#2A2421] focus:outline-none focus:border-[#8C7D73] transition-colors peer placeholder-transparent"
                    placeholder="Phone"
                  />
                  <label htmlFor="phone" className="absolute left-0 top-3 text-[11px] uppercase tracking-widest text-[#A69C95] transition-all peer-focus:-top-4 peer-focus:text-[9px] peer-focus:text-[#8C7D73] peer-valid:-top-4 peer-valid:text-[9px] peer-valid:text-[#8C7D73] cursor-text">
                    Phone Number
                  </label>
                </div>

                {/* Subject / Service */}
                <div className="relative group">
                  <select 
                    id="service"
                    className="w-full bg-transparent border-b border-[#D4CEC9] py-3 text-[13px] font-light text-[#2A2421] focus:outline-none focus:border-[#8C7D73] transition-colors appearance-none cursor-pointer"
                    defaultValue=""
                  >
                    <option value="" disabled className="text-[#A69C95]">Select Inquiry Type</option>
                    <option value="booking">General Booking</option>
                    <option value="bridal">Bridal Consultation</option>
                    <option value="press">Press / Media</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                  {/* Custom Arrow for Select */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L5 5L9 1" stroke="#8C7D73" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="relative group pt-4">
                <textarea 
                  id="message"
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-[#D4CEC9] py-3 text-[14px] font-light text-[#2A2421] focus:outline-none focus:border-[#8C7D73] transition-colors peer placeholder-transparent resize-none"
                  placeholder="Message"
                ></textarea>
                <label htmlFor="message" className="absolute left-0 top-7 text-[11px] uppercase tracking-widest text-[#A69C95] transition-all peer-focus:top-0 peer-focus:text-[9px] peer-focus:text-[#8C7D73] peer-valid:top-0 peer-valid:text-[9px] peer-valid:text-[#8C7D73] cursor-text">
                  Your Message *
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button 
                  type="submit"
                  className="w-full block text-center px-10 py-5 bg-[#2A2421] text-white text-[11px] uppercase tracking-[0.25em] font-medium hover:bg-[#8C7D73] transition-colors duration-500"
                >
                  Send Inquiry
                </button>
              </div>

            </form>
          </div>

        </div>
      </section>

      {/* 3. Cinematic Full Bleed Image */}
      <section className="relative h-[40vh] md:h-[60vh] w-full overflow-hidden border-t border-b border-[#F5EFE9]">
        <img 
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2000&auto=format&fit=crop" 
          alt="Spa Details"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#2A2421]/10 mix-blend-overlay" />
      </section>

      {/* 4. Alternative Booking CTA */}
      <section className="py-24 bg-[#1C1816] text-center px-5">
        <div className="max-w-xl mx-auto text-[#FDFBF9]">
          <h2 className="text-3xl font-serif mb-6">Prefer immediate booking?</h2>
          <p className="text-[13px] text-[#A69C95] font-light mb-10 leading-relaxed">
            Skip the inquiry and secure your appointment directly through our live booking system.
          </p>
          <Link 
            href="/book"
            className="inline-block px-12 py-4 border border-[#C2B4A7] text-[#FDFBF9] text-[10px] uppercase tracking-[0.3em] font-medium hover:bg-[#FDFBF9] hover:text-[#1C1816] transition-all duration-500"
          >
            Book Online Now
          </Link>
        </div>
      </section>

     
    </main>
  );
}