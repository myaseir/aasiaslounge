import React from 'react';
import Link from 'next/link';

/**
 * Aasiya’s Lounge - Minimalist Luxury Footer
 * Design: High-end Boutique / Typography-focused
 * Focus: Breathing space, left-aligned mobile layout, and muted premium tones.
 */

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Bridal', href: '/bridal' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Digital Menu', href: '/menu' }
  ];

  return (
    <footer className="bg-[#f8f6f2] text-[#333333] pt-20 pb-10 border-t border-[#ede9e3]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-12 md:gap-x-12">
          
          {/* Brand & Tagline Section */}
          <div className="md:col-span-1 flex flex-col space-y-3">
            <h2 className="text-xl md:text-2xl font-serif tracking-[0.15em] uppercase text-[#1a1a1a]">
              Aasiya’s Lounge
            </h2>
            <p className="text-[13px] md:text-sm font-light text-[#7a746e] italic leading-relaxed max-w-[200px]">
              Silk, Smooth, Superior Elegance
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col space-y-5">
            <h3 className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#968478]">Navigation</h3>
            <ul className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm font-light text-[#4a4a4a] transition-opacity duration-300 hover:opacity-50"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Location Section */}
          <div className="flex flex-col space-y-5">
            <h3 className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#968478]">Studio</h3>
            <div className="flex flex-col space-y-2 text-sm font-light text-[#4a4a4a] leading-relaxed">
              <p>Idrees Market, F-10/2</p>
              <p>Islamabad, Pakistan</p>
              <p className="pt-2">+92 300 0000000</p>
            </div>
          </div>

          {/* Social Links Section */}
          <div className="flex flex-col space-y-5">
            <h3 className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#968478]">Connect</h3>
            <div className="flex items-center space-x-6">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:opacity-40 hover:scale-105"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a 
                href="https://wa.me/923000000000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:opacity-40 hover:scale-105"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:opacity-40 hover:scale-105"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-[#ede9e3]/60 flex flex-col items-start space-y-4">
          <p className="text-[10px] tracking-[0.1em] text-[#968478] opacity-70 uppercase">
            © {currentYear} Aasiya’s Lounge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// --- Minimal Line Icons (SVG) ---

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-7.6 8.38 8.38 0 0 1 3.8.9L21 3.5z"></path>
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

export default Footer;