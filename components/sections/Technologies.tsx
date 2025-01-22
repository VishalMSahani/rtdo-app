"use client";
import { motion } from "framer-motion";
import { Code2, Database, Cloud, Palette, Terminal, Globe } from "lucide-react";

export const Technologies = () => {
  const techs = [
    {
      icon: <Code2 className="w-8 h-8" />,
      name: "Frontend",
      tools: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      name: "Backend",
      tools: ["Node.js", "Python", "PostgreSQL", "MongoDB"]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      name: "Cloud",
      tools: ["AWS", "Google Cloud", "Azure", "Vercel"]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      name: "Design",
      tools: ["Figma", "Adobe XD", "Photoshop", "Illustrator"]
    },
    {
      icon: <Terminal className="w-8 h-8" />,
      name: "DevOps",
      tools: ["Docker", "Kubernetes", "CI/CD", "Git"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      name: "Analytics",
      tools: ["Google Analytics", "Mixpanel", "Hotjar", "Amplitude"]
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#E2E2B6] to-[#6EACDA] bg-clip-text text-transparent">
            Technologies We Master
          </h2>
          <p className="text-[#6EACDA] max-w-2xl mx-auto">
            Cutting-edge tools and technologies we use to build exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techs.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#03346E]/40 to-[#021526]/40 p-8 rounded-2xl border border-[#6EACDA]/20 backdrop-blur-sm hover:from-[#03346E]/60 hover:to-[#021526]/60 transition-all duration-300"
            >
              <div className="text-[#6EACDA] mb-4">{tech.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-[#E2E2B6]">{tech.name}</h3>
              <div className="flex flex-wrap gap-2">
                {tech.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 bg-[#021526]/50 rounded-full text-sm text-[#6EACDA] border border-[#6EACDA]/20"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 