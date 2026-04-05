import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      {/* Editorial Header */}
      <section className="bg-zinc-950 text-zinc-200 py-32 md:py-48 px-4 text-center relative overflow-hidden">
        {/* Subtle Textured Background */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/dust.png')] pointer-events-none"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto">
          <span className="text-rose-900 text-[10px] md:text-xs tracking-[0.6em] font-bold uppercase mb-8 block animate-fade-in">
            The Collective
          </span>
          <h1 className="text-5xl md:text-8xl font-serif text-white mb-10 italic tracking-tighter leading-tight">
            Defined by Artistry. <br/> Refined by Passion.
          </h1>
          <div className="w-px h-16 bg-rose-900/40 mx-auto mb-10"></div>
          <p className="max-w-2xl mx-auto font-light leading-relaxed text-zinc-400 text-lg md:text-xl italic">
            Makeup Launch is more than a salon; it is a high-fashion sanctuary where beauty is elevated to an art form.
          </p>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          
          {/* Editorial Visual */}
          <div className="relative h-[600px] md:h-[800px] w-full overflow-hidden shadow-2xl group bg-zinc-100">
            <img 
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop" 
              alt="Makeup Launch Luxury Studio" 
              className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-[2s] ease-in-out scale-105 group-hover:scale-100"
            />
            {/* Elegant Floating Label */}
            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-6 shadow-xl">
                <p className="text-zinc-900 text-[10px] tracking-[0.4em] uppercase font-bold">Est. 2026</p>
            </div>
          </div>

          {/* Brand Narrative */}
          <div className="flex flex-col items-start">
            <h4 className="text-rose-900 text-[11px] tracking-[0.4em] uppercase font-bold mb-6">
              Our Vision
            </h4>
            <h2 className="text-4xl md:text-6xl font-serif text-zinc-900 mb-10 italic leading-tight tracking-tighter">
              A Masterclass in <br/> Modern Elegance.
            </h2>
            
            <div className="space-y-8 text-zinc-600 font-light text-lg leading-loose">
              <p>
                Makeup Launch was born from a desire to bridge the gap between editorial fashion and personal beauty. We specialize in enhancing your most unique features, creating a perfect synergy between your vision and our technical expertise.
              </p>
              <p>
                Our studio offers a holistic suite of luxury services—from bespoke makeup transformations and couture hair styling to precision nail art and rejuvenating spa rituals. Every detail is curated to ensure you leave with a definitive finish that reflects your individuality.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-zinc-100">
                <div>
                    <h5 className="text-zinc-900 text-[10px] tracking-[0.3em] uppercase font-bold mb-2">The Quality</h5>
                    <p className="text-sm italic">Premium products, elite techniques.</p>
                </div>
                <div>
                    <h5 className="text-zinc-900 text-[10px] tracking-[0.3em] uppercase font-bold mb-2">The Service</h5>
                    <p className="text-sm italic">Bespoke care for every guest.</p>
                </div>
              </div>
            </div>

            <div className="mt-16 flex flex-col sm:flex-row gap-8 items-center w-full">
              <Link 
                href="https://wa.me/923175656799" 
                className="w-full sm:w-auto px-12 py-5 bg-zinc-950 hover:bg-rose-900 text-white text-[11px] tracking-[0.4em] uppercase font-bold transition-all duration-500 text-center shadow-2xl"
              >
                Experience the Launch
              </Link>
              <div className="flex flex-col gap-1 items-start">
                <span className="text-[9px] tracking-widest uppercase text-zinc-400">Inquiries</span>
                <span className="text-zinc-900 font-bold text-sm">0317-5656799</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values / Quote Section */}
      <section className="bg-zinc-50 py-32 px-6 text-center border-y border-zinc-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-10">
             <span className="text-4xl text-rose-900 opacity-30 font-serif">“</span>
          </div>
          <p className="text-3xl md:text-5xl font-serif italic text-zinc-900 leading-snug mb-10 tracking-tight">
            We believe that true beauty isn't about transformation, but about the artful revelation of your most confident self.
          </p>
          <div className="flex flex-col items-center gap-4">
             <div className="h-px w-20 bg-rose-900/30"></div>
             <span className="text-[10px] tracking-[0.6em] uppercase text-rose-900 font-bold">The Makeup Launch Promise</span>
          </div>
        </div>
      </section>
      
      {/* Software House Credit */}
      <div className="py-12 text-center opacity-30">
        <p className="text-[9px] tracking-[0.4em] uppercase text-zinc-500">
          Crafting Digital Excellence with <span className="text-zinc-900 font-bold">Glacia Labs</span>
        </p>
      </div>
    </main>
  );
}