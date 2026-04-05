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
  title: "Makeup Launch | Luxury Bridal Studio & Wedding Artistry Rawalpindi",
  description: "Rawalpindi's premier sanctuary for luxury bridal transformations, couture hair, and precision nail artistry. Defining elegance in the Twin Cities.",
  keywords: [
    "Bridal Makeup Rawalpindi", 
    "Best Wedding Salon Rawalpindi", 
    "Luxury Salon Bahria Town", 
    "Nail Art Rawalpindi", 
    "Makeup Launch Studio",
    "Bridal Services Islamabad"
  ],
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