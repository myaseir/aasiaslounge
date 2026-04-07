'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

/**
 * Aasiya’s Lounge - Premium Services Menu
 * Design: High-end Spa / Editorial Menu Aesthetic
 * Focus: Typography, precise alignment, luxury whitespace.
 */

export default function ServicesPage() {
  const [activeSection, setActiveSection] = useState('makeup');

  // Optional: Highlight active section on scroll (simplified for performance)
  useEffect(() => {
    const handleScroll = () => {
      const sections = menuData.map(cat => document.getElementById(cat.id));
      const scrollPosition = window.scrollY + 200; // Offset for sticky headers

      sections.forEach(section => {
        if (section && section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#1C1917] antialiased selection:bg-[#E8E4DF]">
      <Navbar />

      {/* Editorial Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-12 max-w-4xl mx-auto text-center">
        <span className="text-[10px] tracking-[0.4em] uppercase text-[#968478] font-bold block mb-6">
          The Treatment Menu
        </span>
        <h1 className="text-5xl md:text-7xl font-serif leading-none mb-6 text-[#1C1917]">
          Curated <span className="italic font-light text-[#968478]">Rituals</span>
        </h1>
        <p className="max-w-xl mx-auto text-[13px] md:text-sm text-[#5C5A57] font-light leading-relaxed">
          A comprehensive selection of premium treatments designed to elevate your natural beauty. 
          Performed with precision, using the industry's finest products.
        </p>
      </section>

      {/* Mobile Sticky Navigation (Visible only on small screens) */}
      <nav className="lg:hidden sticky top-[64px] z-40 bg-[#FAF9F6]/95 backdrop-blur-md border-y border-[#E8E4DF] overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="flex px-6 py-4 space-x-8 min-w-max">
          {menuData.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className={`text-[10px] uppercase tracking-[0.25em] font-medium transition-colors ${
                activeSection === cat.id ? 'text-[#1C1917] border-b border-[#1C1917] pb-1' : 'text-[#A3A19E] hover:text-[#1C1917]'
              }`}
            >
              {cat.title}
            </a>
          ))}
        </div>
      </nav>

      {/* Main Layout: Sidebar + Content */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-24 flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
        
        {/* Desktop Sticky Sidebar */}
        <aside className="hidden lg:block w-1/4 shrink-0">
          <div className="sticky top-32 space-y-6 border-l border-[#E8E4DF] pl-8">
            {menuData.map((cat) => (
              <div key={cat.id}>
                <a
                  href={`#${cat.id}`}
                  className={`text-[11px] uppercase tracking-[0.25em] transition-all duration-300 block ${
                    activeSection === cat.id 
                      ? 'text-[#1C1917] font-bold translate-x-2' 
                      : 'text-[#968478] font-medium hover:text-[#1C1917]'
                  }`}
                >
                  {cat.title}
                </a>
              </div>
            ))}
          </div>
        </aside>

        {/* Menu Content */}
        <div className="w-full lg:w-3/4 space-y-32">
          {menuData.map((category) => (
            <div key={category.id} id={category.id} className="scroll-mt-32 md:scroll-mt-40">
              
              {/* Category Header */}
              <div className="mb-16 text-center lg:text-left">
                <h2 className="text-4xl md:text-5xl font-serif text-[#1C1917] mb-3">
                  {category.title}
                </h2>
                {category.subtitle && (
                  <p className="text-[11px] uppercase tracking-[0.3em] text-[#968478] font-medium">
                    {category.subtitle}
                  </p>
                )}
              </div>

              {/* Sections (e.g., Barat, Balayage) */}
              <div className="space-y-16">
                {category.sections.map((section, sIdx) => (
                  <div key={sIdx}>
                    
                    {/* Section Header */}
                    {section.title && (
                      <div className="mb-8 border-b border-[#E8E4DF] pb-3">
                        <h3 className="text-[12px] md:text-[13px] font-bold tracking-[0.25em] uppercase text-[#1C1917]">
                          {section.title}
                        </h3>
                        {section.note && (
                          <p className="text-[11px] text-[#968478] mt-2 italic font-light tracking-wide">
                            * {section.note}
                          </p>
                        )}
                      </div>
                    )}

                    {/* Menu Items List - Premium Dotted Layout */}
                    <div className="space-y-5">
                      {section.items.map((item, iIdx) => (
                        <div key={iIdx} className="flex items-baseline justify-between group">
                          {/* Item Name */}
                          <div className="flex-none pr-4 md:pr-6">
                            <span className="text-[14px] md:text-[15px] font-medium text-[#1C1917] group-hover:text-[#968478] transition-colors">
                              {item.name}
                            </span>
                          </div>
                          
                          {/* Dotted Line */}
                          <div className="flex-grow border-b-2 border-dotted border-[#E8E4DF] opacity-60 relative top-[-4px] group-hover:border-[#968478] transition-colors"></div>
                          
                          {/* Price */}
                          <div className="flex-none pl-4 md:pl-6">
                            <span className="text-[12px] md:text-[13px] font-medium text-[#5C5A57] whitespace-nowrap">
                              Rs. {item.price}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Booking Section */}
      <section className="py-24 border-t border-[#E8E4DF] bg-[#F3EFEA] text-center mt-12">
        <h2 className="text-3xl font-serif text-[#1C1917] mb-8">Experience the Elegance</h2>
        <Link 
          href="/book"
          className="inline-block px-10 py-4 bg-[#1C1917] text-white text-[11px] uppercase tracking-[0.25em] font-bold hover:bg-[#968478] hover:shadow-xl transition-all duration-300"
        >
          Book Your Appointment
        </Link>
      </section>

    
    </main>
  );
}

/* ==================================================================
   FULL MENU DATA 
   (Exact transcription from provided images, properly categorized)
================================================================== */

const menuData = [
  {
    id: 'makeup',
    title: 'Makeups',
    subtitle: 'Flawless, Timeless, Picture-Perfect',
    sections: [
      {
        title: 'Barat',
        note: 'Includes 6 Services: Full Body Wax, Facial, Manicure, Pedicure, Eyebrows & Face Wax',
        items: [
          { name: 'Signature Panel', price: '55,000/-' },
          { name: 'Senior Panel', price: '45,000/-' },
        ]
      },
      {
        title: 'Walima',
        items: [
          { name: 'Signature Panel', price: '45,000/-' },
          { name: 'Senior Panel', price: '38,000/-' },
        ]
      },
      {
        title: 'Nikkah & Engagement',
        items: [
          { name: 'Signature Panel', price: '35,000/-' },
          { name: 'Senior Panel', price: '30,000/-' },
        ]
      },
      {
        title: 'Party Makeup',
        items: [
          { name: 'Signature Party Makeup', price: '7,000/-' },
          { name: 'Glowy Party Makeup', price: '6,000/-' },
          { name: 'Simple Party Makeup', price: '5,000/-' },
        ]
      }
    ]
  },
  {
    id: 'hair-color',
    title: 'Signature Hair Coloring',
    subtitle: 'Luxury, Vibrance, Radiance',
    sections: [
      {
        title: 'Global Dye',
        items: [
          { name: 'Short (Starting From)', price: '15,000/-' },
          { name: 'Medium (Starting From)', price: '18,000/-' },
          { name: 'Long (Starting From)', price: '25,000/-' },
        ]
      },
      {
        title: 'Balayage',
        items: [
          { name: 'Short (Starting From)', price: '15,000/-' },
          { name: 'Medium (Starting From)', price: '25,000/-' },
          { name: 'Long (Starting From)', price: '30,000/-' },
        ]
      },
      {
        title: 'Highlights / Lowlights',
        items: [
          { name: 'Short (Starting From)', price: '20,000/-' },
          { name: 'Medium (Starting From)', price: '25,000/-' },
          { name: 'Long (Starting From)', price: '30,000/-' },
        ]
      },
      {
        title: 'Root Touch Up',
        note: 'Includes wash & Paddle Brush Dry',
        items: [
          { name: 'Roots Touch up 1 Inch', price: '4,500/-' },
          { name: 'Roots Touch up 2 Inch', price: '6,000/-' },
          { name: 'Roots Touch Half Head', price: '8,000/-' },
        ]
      }
    ]
  },
  {
    id: 'hair-treatments',
    title: 'Signature Hair Treatments',
    subtitle: 'With Consultation',
    sections: [
      {
        title: 'Simple Protein Treatment',
        items: [
          { name: 'Short (Starting From)', price: '2,000/-' },
          { name: 'Medium (Starting From)', price: '2,500/-' },
          { name: 'Long (Starting From)', price: '3,000/-' },
        ]
      },
      {
        title: 'Brazilian Keratin Treatment',
        items: [
          { name: 'Short (Starting From)', price: '16,000/-' },
          { name: 'Medium (Starting From)', price: '22,000/-' },
          { name: 'Long (Starting From)', price: '25,000/-' },
        ]
      },
      {
        title: 'Nanoplastia Treatment',
        items: [
          { name: 'Short (Starting From)', price: '15,000/-' },
          { name: 'Medium (Starting From)', price: '20,000/-' },
          { name: 'Long (Starting From)', price: '25,000/-' },
        ]
      }
    ]
  },
  {
    id: 'hair-cut',
    title: 'Signature Hair Cut',
    subtitle: '& Blow Dry Collection',
    sections: [
      {
        title: 'Signature Combo',
        items: [
          { name: 'Signature Hair Cut + Inward Blow Dry', price: '5,000/-' },
          { name: 'Signature Hair Cut + Outward Blow Dry', price: '5,500/-' },
        ]
      },
      {
        title: 'Senior Artist Combo',
        items: [
          { name: 'Hair Cutting by Senior Artist + Inward', price: '4,000/-' },
          { name: 'Hair Cutting by Senior Artist + Outward', price: '4,500/-' },
        ]
      },
      {
        title: 'Inward Blow Dry',
        items: [
          { name: 'Short', price: '1,800/-' },
          { name: 'Shoulder Length', price: '2,000/-' },
          { name: 'Medium', price: '2,200/-' },
          { name: 'Long', price: '2,500/-' },
        ]
      },
      {
        title: 'Outward Blow Dry',
        items: [
          { name: 'Short', price: '2,000/-' },
          { name: 'Shoulder Length', price: '2,200/-' },
          { name: 'Medium', price: '2,500/-' },
          { name: 'Long', price: '3,000/-' },
        ]
      },
      {
        title: 'Add On Services',
        items: [
          { name: 'Trimming', price: '2,500/-' },
          { name: 'Flick Cutting', price: '1,500/-' },
          { name: 'Baby Cut', price: '2,000/-' },
        ]
      }
    ]
  },
  {
    id: 'facials',
    title: 'Facials',
    subtitle: 'Revitalize & Rejuvenate',
    sections: [
      {
        title: 'Luxury Skin Care',
        items: [
          { name: 'Hydra Facial', price: '6,500/-' },
          { name: 'Deep Hydration', price: '6,000/-' },
          { name: 'Korean Glass', price: '6,000/-' },
          { name: 'Gold Facial', price: '5,500/-' },
          { name: 'Classic Facial', price: '4,000/-' },
        ]
      }
    ]
  },
  {
    id: 'mani-pedi',
    title: 'Luxury Manicure & Pedicure',
    subtitle: 'All Process include Hand & Feet Massage',
    sections: [
      {
        title: 'Nail & Skin Care',
        items: [
          { name: 'Dr. meinaier', price: '5,500/-' },
          { name: 'Spa Turkish', price: '5,000/-' },
          { name: 'Aroma', price: '4,500/-' },
          { name: 'Conatural', price: '4,000/-' },
        ]
      }
    ]
  },
  {
    id: 'waxing',
    title: 'Luxury Waxing',
    subtitle: 'Silk, Smooth, Superior Elegance',
    sections: [
      {
        title: 'Body Waxing',
        items: [
          { name: 'Full Body Wax (Fruit Wax)', price: '8,000/-' },
          { name: 'Full Arms', price: '2,500/-' },
          { name: 'Half Arms', price: '1,500/-' },
          { name: 'Full Legs', price: '2,500/-' },
          { name: 'Half Legs', price: '1,800/-' },
          { name: 'Full Front', price: '2,000/-' },
          { name: 'Full Back', price: '2,200/-' },
          { name: 'Under Legs', price: '1,800/-' },
          { name: 'Belly', price: '1,200/-' },
          { name: 'Under Arms', price: '800/-' },
        ]
      },
      {
        title: 'Face Waxing & Threading',
        items: [
          { name: 'Full Face Wax', price: '1,500/-' },
          { name: 'Chin Area Wax', price: '500/-' },
          { name: 'Eyebrows Wax', price: '500/-' },
          { name: 'Upper Lips Wax', price: '300/-' },
          { name: 'Full Face Threading', price: '1,500/-' },
          { name: 'Eyebrows Threading', price: '400/-' },
          { name: 'Upper Lips Threading', price: '300/-' },
        ]
      }
    ]
  }
];