'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

/**
 * Aasiya’s Lounge - Refined Side-Drawer Navbar
 * Design: High-end Minimalist / Side-Drawer Navigation
 * Focus: Mobile usability, subtle dimming, and left-aligned typography.
 */

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll detection for background transitions
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when drawer is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Bridal', href: '/bridal' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ease-in-out ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-md border-b border-[#F5F1EE]' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10 h-[64px] flex items-center justify-between">
          
          {/* Left: Hamburger (Mobile Only) */}
          <div className="flex items-center flex-1 lg:hidden">
            <button
              onClick={() => setIsOpen(true)}
              className="p-1 -ml-1 text-[#1a1a1a] transition-opacity hover:opacity-60"
              aria-label="Open navigation menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            </button>
          </div>

          {/* Desktop Brand Section */}
          <div className="hidden lg:flex items-center flex-1">
            <Link href="/" className="group">
              <span className="text-lg font-serif tracking-[0.2em] uppercase text-[#1a1a1a] transition-colors group-hover:text-[#968478]">
                Aasiya’s Lounge
              </span>
            </Link>
          </div>

          {/* Mobile Brand Section (Centered) */}
          <div className="flex lg:hidden justify-center items-center flex-grow">
            <Link href="/" className="text-[14px] font-serif tracking-[0.25em] uppercase text-[#1a1a1a]">
              Aasiya’s Lounge
            </Link>
          </div>

          {/* Desktop Menu Links */}
          <div className="hidden lg:flex items-center justify-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[11px] tracking-[0.2em] uppercase text-[#444] transition-opacity hover:opacity-50"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right: Book CTA */}
          <div className="flex items-center justify-end flex-1">
            <Link
              href="/book"
              className="px-5 py-2 text-[10px] md:text-[11px] tracking-[0.15em] uppercase font-medium bg-[#F5F1EE] text-[#4A3F35] rounded-full transition-all duration-300 active:scale-[0.97] hover:bg-[#EBE4DE]"
            >
              Book
            </Link>
          </div>
        </div>
      </nav>

      {/* Side Drawer Component */}
      <div className="relative z-[60]">
        {/* Dim Overlay */}
        <div
          className={`fixed inset-0 bg-black/20 backdrop-blur-[2px] transition-opacity duration-500 ease-in-out ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* 75% Width Side Drawer */}
        <div
          className={`fixed top-0 left-0 h-full w-[75%] max-w-[320px] bg-[#FAF9F8] shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* Drawer Header */}
          <div className="h-[64px] px-6 flex items-center justify-between border-b border-[#F5F1EE]">
            <span className="text-[11px] tracking-[0.2em] uppercase font-medium text-[#968478]">Navigation</span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-[#222] transition-opacity hover:opacity-60"
              aria-label="Close menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Left-Aligned Menu Items */}
          <div className="flex flex-col pt-8 px-8 space-y-7">
            {navLinks.map((link, i) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-serif text-[#1a1a1a] transition-all duration-500 delay-[${i * 40}ms] ${
                  isOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Drawer Footer Info */}
          <div className="absolute bottom-10 left-8">
            <div className="flex flex-col space-y-1">
              <span className="text-[9px] tracking-[0.3em] uppercase text-[#968478] opacity-60">
                Aasiya’s Lounge
              </span>
              <span className="text-[9px] tracking-[0.1em] text-[#968478] opacity-40">
                Premium Beauty & Wellness
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;