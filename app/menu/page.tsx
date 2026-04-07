'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

/**
 * Aasiya’s Lounge - Digital Menu Page (/menu)
 * Design: Full-screen, standalone luxury menu page with smooth scroll & sticky nav.
 */

export default function DigitalMenuPage() {
  const [activeCategory, setActiveCategory] = useState('makeup');

  // Handle scroll spy to update active category nav as the user scrolls down the page
  useEffect(() => {
    const handleScroll = () => {
      const sections = menuData.map(cat => document.getElementById(`menu-${cat.id}`));
      
      let current = activeCategory;
      sections.forEach(section => {
        if (section) {
          // Detect where the section is relative to the viewport
          const rect = section.getBoundingClientRect();
          // 180px offset accounts for the sticky headers at the top
          if (rect.top <= 180 && rect.bottom >= 180) {
            current = section.id.replace('menu-', '');
          }
        }
      });
      if (current !== activeCategory) {
        setActiveCategory(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeCategory]);

  const scrollToCategory = (id: string) => {
    setActiveCategory(id);
    const element = document.getElementById(`menu-${id}`);
    if (element) {
      // Calculate position accounting for current scroll and sticky header height (~130px)
      const topPos = element.getBoundingClientRect().top + window.scrollY - 130; 
      window.scrollTo({ top: topPos, behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-[#FDFBF9] text-[#2A2421] selection:bg-[#EAE4DD] selection:text-[#2A2421]">
      
      {/* 1. Header (Sticky Top) */}
      <div className="sticky top-0 z-50 bg-[#FDFBF9] border-b border-[#EAE4DD]">
        <div className="px-5 py-4 md:px-10 md:py-6 flex justify-between items-center max-w-5xl mx-auto">
          <div className="flex flex-col">
            <span className="text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-[#8C7D73] font-bold">
              Aasiya's Lounge
            </span>
            <h1 className="text-xl md:text-3xl font-serif text-[#2A2421]">
              Digital Menu
            </h1>
          </div>
          
          <Link 
            href="/"
            className="flex items-center gap-2 p-2 sm:px-4 sm:py-2 bg-[#F5EFE9] rounded-full hover:bg-[#EAE4DD] transition-colors group"
            aria-label="Back to Home"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#2A2421] group-hover:-translate-x-1 transition-transform duration-300">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span className="hidden sm:block text-[10px] uppercase tracking-widest font-medium text-[#2A2421]">Home</span>
          </Link>
        </div>

        {/* 2. Category Navigation (Sub-header) */}
        <div className="bg-[#FDFBF9]/95 backdrop-blur-md border-b border-[#EAE4DD] shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]">
          <div className="flex overflow-x-auto no-scrollbar px-5 md:px-10 py-4 space-x-8 md:space-x-12 max-w-5xl mx-auto">
            {menuData.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollToCategory(cat.id)}
                className={`relative text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-medium whitespace-nowrap transition-colors duration-300 ${
                  activeCategory === cat.id ? 'text-[#2A2421]' : 'text-[#A69C95] hover:text-[#8C7D73]'
                }`}
              >
                {cat.title}
                <span className={`absolute -bottom-4 left-0 w-full h-[1.5px] bg-[#8C7D73] transition-transform duration-300 origin-left ${
                  activeCategory === cat.id ? 'scale-x-100' : 'scale-x-0'
                }`} />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Scrollable Menu Content */}
      <div className="max-w-4xl mx-auto px-5 md:px-12 pt-16 pb-32 space-y-24">
        
        {menuData.map((category) => (
          <div key={category.id} id={`menu-${category.id}`} className="scroll-mt-40">
            
            {/* Category Title */}
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-5xl font-serif text-[#2A2421] mb-2">{category.title}</h2>
              {category.subtitle && (
                <p className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-medium text-[#8C7D73]">
                  {category.subtitle}
                </p>
              )}
            </div>

            {/* Sections within Category */}
            <div className="space-y-12">
              {category.sections.map((section, sIdx) => (
                <div key={sIdx} className="bg-white p-6 md:p-10 border border-[#F5EFE9] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.03)]">
                  
                  {/* Section Header */}
                  {section.title && (
                    <div className="mb-6 pb-4 border-b border-[#EAE4DD]">
                      <h3 className="text-[11px] md:text-[12px] font-bold tracking-[0.25em] uppercase text-[#2A2421]">
                        {section.title}
                      </h3>
                      {section.note && (
                        <p className="text-[10px] text-[#8C7D73] mt-2 italic font-light tracking-wide">
                          * {section.note}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Menu Items (Dotted Leader Line Layout) */}
                  <div className="space-y-5">
                    {section.items.map((item, iIdx) => (
                      <div key={iIdx} className="flex items-baseline justify-between group">
                        {/* Item Name */}
                        <div className="flex-none pr-3 md:pr-4">
                          <span className="text-[13px] md:text-[15px] font-medium text-[#2A2421] group-hover:text-[#8C7D73] transition-colors">
                            {item.name}
                          </span>
                        </div>
                        
                        {/* Dotted Leader Line */}
                        <div className="flex-grow border-b-[1.5px] border-dotted border-[#D4CEC9] opacity-70 relative top-[-4px] group-hover:border-[#8C7D73] transition-colors"></div>
                        
                        {/* Price */}
                        <div className="flex-none pl-3 md:pl-4">
                          <span className="text-[12px] md:text-[13px] font-semibold text-[#6B615A] whitespace-nowrap">
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

        {/* End of Menu Marker */}
        <div className="pt-12 pb-12 flex flex-col items-center opacity-40">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#8C7D73" strokeWidth="1" className="mb-4">
            <path d="M12 2L15 8L21 9L16.5 14L18 20L12 17L6 20L7.5 14L3 9L9 8L12 2Z" />
          </svg>
          <span className="text-[9px] uppercase tracking-widest text-[#2A2421] font-medium">End of Menu</span>
        </div>

      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </main>
  );
}

/* ==================================================================
   FULL MENU DATA 
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