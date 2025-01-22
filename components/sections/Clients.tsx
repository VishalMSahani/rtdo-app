"use client";
import { motion } from "framer-motion";
import { Building, Trophy, Star } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Clients = () => {
  const clients = [
    {
      name: "TechCorp Global",
      logo: <Building className="w-12 h-12 text-[#6EACDA]" />,
      description: "Leading technology solutions provider",
      achievement: "500% ROI increase"
    },
    {
      name: "EcoSmart Solutions",
      logo: <Trophy className="w-12 h-12 text-[#6EACDA]" />,
      description: "Sustainable energy innovator",
      achievement: "1M+ social reach"
    },
    {
      name: "FinanceHub",
      logo: <Star className="w-12 h-12 text-[#6EACDA]" />,
      description: "Financial services leader",
      achievement: "200% conversion rate"
    }
  ];

  return (
    <section id="clients" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-[#E2E2B6]">Success Stories</h2>
          <p className="text-[#6EACDA] max-w-2xl mx-auto">
            See how we've helped businesses achieve remarkable growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-[#03346E]/40 border-[#6EACDA]/20 backdrop-blur-sm hover:bg-[#03346E]/60 transition-all duration-300">
                <div className="mb-6">{client.logo}</div>
                <h3 className="text-xl font-bold mb-2 text-[#E2E2B6]">{client.name}</h3>
                <p className="text-[#6EACDA] mb-4">{client.description}</p>
                <div className="pt-4 border-t border-[#6EACDA]/20">
                  <p className="text-[#E2E2B6] font-semibold">{client.achievement}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 