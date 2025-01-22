"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpCircle } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { AboutUs } from "@/components/sections/AboutUs";
import { Services } from "@/components/sections/Services";
import { Clients } from "@/components/sections/Clients";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { Technologies } from "@/components/sections/Technologies";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen gradient-grid text-white">
      <Header isScrolled={isScrolled} />
      <Hero />
      <AboutUs />
      <Services />
      <Technologies />
      <Clients />
      <Contact />
      <Footer />
      
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 gradient-button p-2 hover:scale-110 transition-transform"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUpCircle className="w-6 h-6 text-[#021526]" />
      </motion.button>
    </div>
  );
}