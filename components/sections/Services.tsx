"use client";
import { motion } from "framer-motion";
import { LineChart, Monitor, Share2, Search, Server, Shield, Globe, Fingerprint } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Services = () => {
  const services = [
    {
      icon: <Monitor className="w-10 h-10 text-[#6EACDA]" />,
      title: "Web Development",
      description: "Custom websites and applications built with cutting-edge technology"
    },
    {
      icon: <LineChart className="w-10 h-10 text-[#6EACDA]" />,
      title: "Digital Marketing",
      description: "Data-driven strategies to boost your online presence"
    },
    {
      icon: <Search className="w-10 h-10 text-[#6EACDA]" />,
      title: "SEO Optimization",
      description: "Improve visibility and organic traffic to your website"
    },
    {
      icon: <Share2 className="w-10 h-10 text-[#6EACDA]" />,
      title: "Social Media",
      description: "Engaging content and community management"
    },
    {
        icon: <Server className="w-10 h-10 text-[#6EACDA]" />,
        title: "Full IT Support",
        description: "Comprehensive IT solutions for seamless business operations"
      },
      {
        icon: <Shield className="w-10 h-10 text-[#6EACDA]" />,
        title: "Network Security & Firewall",
        description: "Protect your data with robust security measures"
      },
      {
        icon: <Globe className="w-10 h-10 text-[#6EACDA]" />,
        title: "Hosting & Domain Service",
        description: "Reliable hosting and domain registration for your business"
      },
      {
        icon: <Fingerprint className="w-10 h-10 text-[#6EACDA]" />,
        title: "Biometric Security & Camera",
        description: "Advanced biometric and surveillance systems for safety"
      }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-[#E2E2B6]">Our Services</h2>
          <p className="text-[#6EACDA] max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 bg-[#03346E]/40 border-[#6EACDA]/20 backdrop-blur-sm hover:bg-[#03346E]/60 transition-all duration-300">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-[#E2E2B6]">{service.title}</h3>
                <p className="text-[#6EACDA]">{service.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 