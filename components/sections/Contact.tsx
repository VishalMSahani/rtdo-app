"use client";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-[#E2E2B6]"
        >
          Get in Touch
        </motion.h2>
        <div className="max-w-2xl mx-auto">
          <motion.form 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Input
              placeholder="Your Name"
              className="bg-[#021526]/50 border-[#6EACDA]/20 text-white placeholder:text-gray-400"
            />
            <Input
              type="email"
              placeholder="Your Email"
              className="bg-[#021526]/50 border-[#6EACDA]/20 text-white placeholder:text-gray-400"
            />
            <Select>
              <SelectTrigger className="bg-[#021526]/50 border-[#6EACDA]/20 text-white">
                <SelectValue placeholder="How Can We Help?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="web">Web Development</SelectItem>
                <SelectItem value="design">Design Solutions</SelectItem>
                <SelectItem value="seo">SEO Services</SelectItem>
                <SelectItem value="social">Social Media</SelectItem>
              </SelectContent>
            </Select>
            <Textarea
              placeholder="Your Message"
              className="bg-[#021526]/50 border-[#6EACDA]/20 text-white placeholder:text-gray-400"
              rows={5}
            />
            <Button type="submit" className="gradient-button w-full">
              <span>Send Message</span>
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}; 