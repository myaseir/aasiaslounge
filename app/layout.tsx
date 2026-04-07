import type { Metadata } from "next";
import { Montserrat, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"], 
  variable: "--font-cormorant",
  weight: ['300', '400', '500', '600', '700'] 
});



export const metadata: Metadata = {
  title: "Aasiya's Lounge | Luxury Beauty, Wellness & Bridal Studio Islamabad",
  description: "Islamabad's premier sanctuary for luxury bridal transformations, bespoke hair color, and precision wellness rituals. Defining elegance at F10/2, Idrees Market.",
  keywords: [
    "Aasiya's Lounge",
    "Luxury Salon Islamabad", 
    "Bridal Makeup Islamabad", 
    "Best Beauty Studio F10", 
    "Premium Hair Salon Islamabad", 
    "Luxury Skincare & Spa Pakistan"
  ],
  openGraph: {
    title: "Aasiya's Lounge | Luxury Beauty & Wellness",
    description: "Experience the art of radiance. Premium bridal artistry, hair treatments, and wellness in Islamabad.",
    url: 'https://aasiyaslounge.com',
    siteName: "Aasiya's Lounge",
    locale: 'en_PK',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.variable} ${cormorant.variable} font-sans bg-white text-zinc-900 antialiased flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}