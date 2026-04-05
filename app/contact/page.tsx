import React from 'react';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white pt-20 flex flex-col">
      
      {/* 1. Hero / Editorial Header */}
      <section className="bg-zinc-950 text-zinc-200 py-32 md:py-48 px-6 text-center relative overflow-hidden">
        {/* Subtle Luxury Pattern */}
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/dust.png')] pointer-events-none"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto">
          <span className="text-rose-900 text-[10px] md:text-xs tracking-[0.8em] font-bold uppercase mb-8 block animate-pulse">
            Reservations
          </span>
          <h1 className="text-5xl md:text-8xl font-serif text-white mb-10 italic tracking-tighter leading-tight">
            Secure Your <br className="hidden md:block" /> Masterclass.
          </h1>
          <div className="w-px h-16 bg-rose-900/40 mx-auto mb-10"></div>
          <p className="max-w-2xl mx-auto font-light leading-relaxed text-zinc-400 text-lg md:text-xl italic">
            "Fulfilling your beauty needs with great panache. Stand out from the crowd with our definitive bridal finishing."
          </p>
        </div>
      </section>

      {/* 2. Contact & Booking Content */}
      <section className="py-24 px-4 md:px-12 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32 items-start">
          
          {/* Studio Information */}
          <div className="flex flex-col items-start pt-4 order-2 lg:order-1">
            <h2 className="text-4xl md:text-6xl font-serif text-zinc-900 mb-12 italic tracking-tight">The Studio</h2>
            
            <div className="mb-14 border-l border-zinc-200 pl-10 py-2">
              <h4 className="text-rose-900 text-[10px] tracking-[0.4em] font-bold uppercase mb-6">Location</h4>
              <p className="text-zinc-600 font-light text-xl leading-loose tracking-widest uppercase italic">
                Makeup Launch Luxury Studio<br />
                Premium Commercial Plaza<br />
                Lahore, Pakistan
              </p>
            </div>

            <div className="mb-14 border-l border-zinc-200 pl-10 py-2 w-full">
              <h4 className="text-rose-900 text-[10px] tracking-[0.4em] font-bold uppercase mb-6">Direct Hotlines</h4>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col">
                    <span className="text-[10px] text-zinc-400 uppercase tracking-widest mb-1">Bridal & Bookings</span>
                    <a href="tel:03175656799" className="text-zinc-900 font-bold text-2xl md:text-3xl hover:text-rose-900 transition-colors tracking-tighter">0317-5656799</a>
                </div>
                <div className="flex flex-col">
                    <span className="text-[10px] text-zinc-400 uppercase tracking-widest mb-1">Studio Support</span>
                    <a href="tel:03151505838" className="text-zinc-900 font-bold text-2xl md:text-3xl hover:text-rose-900 transition-colors tracking-tighter">0315-1505838</a>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-col gap-4">
              <a 
                href="https://wa.me/923175656799" 
                className="flex items-center gap-4 text-[11px] tracking-[0.5em] uppercase font-bold text-zinc-900 group"
              >
                Chat on WhatsApp
                <span className="h-px w-8 bg-rose-900 group-hover:w-16 transition-all duration-500"></span>
              </a>
            </div>
          </div>

          {/* Luxury Appointment Form */}
          <div className="bg-zinc-50 p-10 md:p-16 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-zinc-100 relative order-1 lg:order-2">
            <h3 className="text-3xl font-serif text-zinc-900 mb-10 italic">Inquiry Form</h3>
            
            <form className="flex flex-col gap-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-col gap-3">
                  <label htmlFor="name" className="text-[9px] tracking-[0.3em] text-zinc-400 uppercase font-bold">Full Name</label>
                  <input type="text" id="name" className="border-b border-zinc-200 py-3 focus:outline-none focus:border-rose-900 transition-colors bg-transparent text-zinc-900 text-sm font-light placeholder:text-zinc-300" placeholder="Maria Khan" required />
                </div>
                <div className="flex flex-col gap-3">
                  <label htmlFor="phone" className="text-[9px] tracking-[0.3em] text-zinc-400 uppercase font-bold">Phone Number</label>
                  <input type="tel" id="phone" className="border-b border-zinc-200 py-3 focus:outline-none focus:border-rose-900 transition-colors bg-transparent text-zinc-900 text-sm font-light placeholder:text-zinc-300" placeholder="+92 --- -------" required />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label htmlFor="service" className="text-[9px] tracking-[0.3em] text-zinc-400 uppercase font-bold">Wedding Service</label>
                <select id="service" className="border-b border-zinc-200 py-3 focus:outline-none focus:border-rose-900 transition-colors bg-transparent text-zinc-900 text-sm font-light appearance-none italic">
                  <option>Bridal Signature - Barat</option>
                  <option>Nikah & Engagement Look</option>
                  <option>Reception / Walima Glam</option>
                  <option>Party & Occasion Makeup</option>
                  <option>Luxury Hair Styling</option>
                  <option>Nail Art Masterclass</option>
                  <option>Spa & Skin Rituals</option>
                </select>
              </div>

              <div className="flex flex-col gap-3">
                <label htmlFor="message" className="text-[9px] tracking-[0.3em] text-zinc-400 uppercase font-bold">Wedding Details</label>
                <textarea id="message" rows={4} className="border-b border-zinc-200 py-3 focus:outline-none focus:border-rose-900 transition-colors bg-transparent text-zinc-900 text-sm font-light resize-none placeholder:text-zinc-300" placeholder="Please mention your wedding date and location..."></textarea>
              </div>

              <button 
                type="button" 
                className="mt-10 px-12 py-6 bg-zinc-950 hover:bg-rose-900 text-white text-[11px] tracking-[0.5em] uppercase font-bold transition-all duration-500 shadow-2xl active:scale-95"
              >
                Send My Request
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* 3. Credits Footer */}
      <div className="py-20 text-center opacity-40">
        <p className="text-[9px] tracking-[0.4em] uppercase text-zinc-500">
          Makeup Launch Experience • Developed by <span className="text-zinc-900 font-bold">Glacia Labs</span>
        </p>
      </div>
    </main>
  );
}