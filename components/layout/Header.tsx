"use client";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RtdoLogo } from "@/components/svg/RtdoLogo";
import { useState } from "react";

export const Header = ({ isScrolled }: { isScrolled: boolean }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Home", "Services", "About Us", "Clients", "Contact"];

  return (
    <header className={`fixed w-full z-50 px-4 py-2 transition-all duration-500`}>
      <div className={`max-w-7xl mx-auto floating-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-3"
          >
            <RtdoLogo />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
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

          {/* Desktop CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:block"
          >
            <Button className="gradient-button">
              <span className="text-[#021526] font-medium">Get Started</span>
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-[#6EACDA] hover:text-[#E2E2B6] transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: isMenuOpen ? "auto" : 0, opacity: isMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className={`md:hidden overflow-hidden bg-[#021526]/95 rounded-b-2xl`}
        >
          {isMenuOpen && (
            <div className="px-4 py-4 space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="block py-2 text-[#6EACDA] hover:text-[#E2E2B6] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <Button className="gradient-button w-full mt-4">
                <span className="text-[#021526] font-medium">Get Started</span>
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    </header>
  );
}; 