"use client";
import { motion } from "framer-motion";
import { Twitter, Linkedin, Facebook, Instagram, ChevronRight, MapPin, Mail, Phone, Link } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ALink from "next/link";


export const Footer = () => {
  return (
    <footer className="bg-[#021526]/90 border-t border-[#6EACDA]/20 py-16 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#E2E2B6]">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "Services", "About Us", "Clients", "Contact"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(" ", "-")}`} 
                    className="text-[#6EACDA] hover:text-[#E2E2B6] transition-colors flex items-center space-x-2"
                  >
                    <ChevronRight className="w-4 h-4" />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#E2E2B6]">Services</h3>
            <ul className="space-y-3">
              {["Web Development", "Design Solutions", "SEO Services", "Digital Marketing"].map((service) => (
                <li key={service}>
                  <a href="#" className="text-[#6EACDA] hover:text-[#E2E2B6] transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#E2E2B6]">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-[#6EACDA]">
                <MapPin className="w-5 h-5 mt-1" />
                <span>House No 0041, Room No 1, Ground Floor, <br/> Sector-11, Juhugaon, Near Amar Bar, Mens House, <br/> Sanpada, Thane, Maharashtra, India, 400703</span>
              </li>
              <li className="flex items-center space-x-3 text-[#6EACDA]">
                <Mail className="w-5 h-5" />
                <a href="mailto:contact@digitalpro.com" className="hover:text-[#E2E2B6] transition-colors">
               info@rtodtechsolutions.com
                </a>
              </li>
              <li className="flex items-center space-x-3 text-[#6EACDA]">
                <Phone className="w-5 h-5" />
                <a href="tel:+15551234567" className="hover:text-[#E2E2B6] transition-colors">
                +91 8767194830
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#E2E2B6]">Newsletter</h3>
            <p className="text-[#6EACDA] mb-4">Stay updated with our latest news and updates.</p>
            <div className="flex space-x-2">
              <Input
                placeholder="Enter your email"
                className="bg-[#021526]/50 border-[#6EACDA]/20 text-white placeholder:text-gray-400"
              />
              <Button className="gradient-button">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-[#6EACDA]/20 pt-8 text-center">
          <div className="flex justify-center space-x-6 mb-6">
            {[
              { icon: Twitter, label: "Twitter" },
              { icon: Linkedin, label: "LinkedIn" },
              { icon: Facebook, label: "Facebook" },
              { icon: Instagram, label: "Instagram" }
            ].map(({ icon: Icon, label }) => (
              <motion.a
                key={label}
                href="#"
                className="p-2 rounded-full border border-[#6EACDA]/20 hover:bg-[#6EACDA]/10 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-5 h-5 text-[#6EACDA]" />
                <span className="sr-only">{label}</span>
              </motion.a>
            ))}
          </div>
          <p className="mt-2">  <ALink className="text-white flex justify-center" href="https://vishalsahani.tech/"> <span className="mr-2">Designed & developend By</span> <span className="text-blue-200">Vishal Sahani</span></ALink></p>
          <p className="text-[#6EACDA]">
            © {new Date().getFullYear()} RTOD Tech Solutions. All rights reserved. 
          </p>
        </div>
      </div>
    </footer>
  );
}; 
