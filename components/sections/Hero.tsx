"use client";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center">
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <h1 className="text-3xl md:text-6xl font-bold mb-8 text-[#E2E2B6] leading-tight">
            RTOD Tech Solutions <br/>
            <span className="text-lg text-white font-medium md:text-2xl"> Transform Your Digital Presence with Innovative Strategies</span>
           
          </h1>
          <p className="text-sm  mb-5 text-[#6EACDA]">
            We help businesses grow through cutting-edge digital marketing solutions
          </p>
          <motion.div 
            className="flex justify-center space-x-4"
            variants={staggerChildren}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeInUp}>
              <Button className="gradient-button">
                <span>Our Services</span>
              </Button>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Button variant="outline" className="rounded-full border-[#6EACDA] text-[#6EACDA] hover:bg-[#6EACDA] hover:text-white transition-all duration-300">
                Get in Touch
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#6EACDA] w-8 h-8" />
      </motion.div>
    </section>
  );
}; 