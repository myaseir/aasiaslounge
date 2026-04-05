import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-zinc-400 py-24 md:py-32 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
        
        {/* Brand Column */}
        <div className="md:col-span-5 flex flex-col items-start">
          <h3 className="text-3xl md:text-4xl font-serif text-white italic mb-8 tracking-tighter uppercase">
            Makeup Launch
          </h3>
          <p className="text-[10px] leading-loose font-light tracking-[0.2em] max-w-sm uppercase opacity-60">
            Rawalpindi's premier sanctuary for luxury bridal transformations and wellness rituals. 
            Defining the standard of elegance in the Twin Cities.
          </p>
          
          <div className="mt-12 flex gap-8 text-[10px] tracking-[0.4em] uppercase font-bold text-white/40">
            <a href="#" className="hover:text-rose-900 transition-colors">Instagram</a>
            <a href="#" className="hover:text-rose-900 transition-colors">Facebook</a>
          </div>
        </div>
        
        {/* Navigation Column - Matches Navbar Links */}
        <div className="md:col-span-2">
          <h4 className="text-white text-[11px] tracking-[0.3em] uppercase mb-10 font-bold">Explore</h4>
          <ul className="flex flex-col gap-5 text-[10px] tracking-[0.2em] uppercase font-medium">
            <li>
              <Link href="/bridal" className="hover:text-white transition-colors">The Bridal Edit</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white transition-colors">The Studio</Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-white transition-colors">Wedding Gallery</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition-colors">Our Story</Link>
            </li>
          </ul>
        </div>

        {/* Studio Location */}
        <div className="md:col-span-2">
          <h4 className="text-white text-[11px] tracking-[0.3em] uppercase mb-10 font-bold">The Studio</h4>
          <address className="not-italic text-[10px] font-light leading-loose tracking-widest uppercase italic">
            
            Rawalpindi, Pakistan
          </address>
        </div>

        {/* Contact/Enquiries */}
        <div className="md:col-span-3">
          <h4 className="text-white text-[11px] tracking-[0.3em] uppercase mb-10 font-bold">Book My Date</h4>
          <div className="flex flex-col gap-6 text-[11px] tracking-widest">
            <div className="flex flex-col gap-2">
               <span className="text-[9px] text-rose-900 font-bold uppercase tracking-[0.3em]">Direct Hotlines</span>
               <a href="tel:03175656799" className="text-white hover:text-rose-900 transition-colors font-medium tracking-normal text-xl">0317-5656799</a>
               <a href="tel:03151505838" className="text-white hover:text-rose-900 transition-colors font-medium tracking-normal text-xl">0315-1505838</a>
            </div>
            <div className="pt-4 border-t border-white/5">
              <a href="mailto:hello@makeuplaunch.com" className="hover:text-rose-900 transition-colors text-[10px] uppercase tracking-[0.2em]">
                hello@makeuplaunch.com
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Copyright Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-24 pt-10 border-t border-zinc-900/50 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] tracking-[0.3em] uppercase">
        <div className="text-zinc-600 font-medium">
          © {currentYear} <span className="text-zinc-500">Makeup Launch</span> Bridal Studio • Est 2026
        </div>
        
        <div className="flex items-center gap-2 text-zinc-600">
          <span>Crafted by</span>
          <a 
            href="https://glacialabs.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-rose-900 transition-all font-bold"
          >
            Glacia Labs
          </a>
        </div>
      </div>
    </footer>
  );
}