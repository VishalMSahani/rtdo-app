"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { RtdoLogo } from "@/components/svg/RtdoLogo";


export const Header = ({ isScrolled }: { isScrolled: boolean }) => {
  return (
    <header className={`fixed w-full z-50 px-4 py-2 transition-all duration-500`}>
      <div className={`max-w-7xl mx-auto floating-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="px-6 py-4 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-3"
          >
            <RtdoLogo />
            {/* <span className="text-xl font-bold bg-gradient-to-r from-[#E2E2B6] to-[#6EACDA] bg-clip-text text-transparent">
              Rtdo
            </span> */}
          </motion.div>
          <nav className="hidden md:flex items-center space-x-8">
            {["Home", "Services", "About Us", "Clients", "Contact"].map((item, index) => (
              <motion.a
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="relative text-sm font-medium before:content-[''] before:absolute before:w-full before:h-0.5 before:bg-[#6EACDA] before:bottom-0 before:left-0 before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100"
              >
                {item}
              </motion.a>
            ))}
          </nav>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button className="gradient-button">
              <span className="text-[#021526] font-medium">Get Started</span>
            </Button>
          </motion.div>
        </div>
      </div>
    </header>
  );
}; 