"use client";
import { motion } from "framer-motion";

export const AboutUs = () => {
  const values = [
    { title: "Innovation First", description: "Pioneering digital solutions" },
    { title: "Client Success", description: "Driving measurable results" },
    { title: "Excellence", description: "Delivering premium quality" }
  ];

  return (
    <section id="about-us" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <div className="bg-gradient-to-br from-[#03346E]/90 to-[#021526]/90 rounded-3xl p-12 shadow-2xl backdrop-blur-sm border border-[#6EACDA]/20 transform hover:scale-105 transition-transform duration-300">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#E2E2B6] to-[#6EACDA] bg-clip-text text-transparent">
                Who We Are
              </h2>
              <p className="text-[#6EACDA] max-w-2xl mx-auto mb-12 text-lg">
                A team of passionate digital innovators dedicated to transforming businesses through strategic digital solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6 text-[#E2E2B6]">Our Mission</h3>
                <p className="text-[#6EACDA] mb-6">
                  To empower businesses with cutting-edge digital solutions that drive growth, enhance visibility, and create lasting impact in the digital landscape.
                </p>
                <div className="space-y-4">
                  {values.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3"
                    >
                      <div className="h-6 w-6 mt-1 rounded-full bg-[#6EACDA] flex items-center justify-center">
                        <span className="text-[#021526] font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="text-[#E2E2B6] font-semibold">{item.title}</h4>
                        <p className="text-[#6EACDA]">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-[#021526]/30 p-8 rounded-2xl border border-[#6EACDA]/20"
              >
                <div className="space-y-6">
                  <div>
                    <h4 className="text-[#E2E2B6] font-semibold mb-2">Years of Experience</h4>
                    <p className="text-4xl font-bold text-[#6EACDA]">2+</p>
                  </div>
                  <div>
                    <h4 className="text-[#E2E2B6] font-semibold mb-2">Projects Completed</h4>
                    <p className="text-4xl font-bold text-[#6EACDA]">10+</p>
                  </div>
                  <div>
                    <h4 className="text-[#E2E2B6] font-semibold mb-2">Client Satisfaction</h4>
                    <p className="text-4xl font-bold text-[#6EACDA]">98%</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 