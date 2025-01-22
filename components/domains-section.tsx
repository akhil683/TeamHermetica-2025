"use client"

import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import { Code, Film, Paintbrush, PenTool } from "lucide-react"
import { MouseEvent } from "react"
import { SpaceBackground } from "./SpaceBackground"

const domains = [
  {
    title: "Web Development",
    icon: Code,
    gradient: "from-blue-500 to-cyan-500",
    shadowColor: "rgba(59, 130, 246, 0.5)",
    description: "Creating responsive and dynamic web applications"
  },
  {
    title: "Video Editing",
    icon: Film,
    gradient: "from-purple-500 to-pink-500",
    shadowColor: "rgba(168, 85, 247, 0.5)",
    description: "Crafting engaging visual stories and content"
  },
  {
    title: "Graphic Design",
    icon: Paintbrush,
    gradient: "from-green-500 to-emerald-500",
    shadowColor: "rgba(16, 185, 129, 0.5)",
    description: "Designing stunning visuals and brand identities"
  },
  {
    title: "Content Writing",
    icon: PenTool,
    gradient: "from-red-500 to-rose-500",
    shadowColor: "rgba(239, 68, 0.5)",
    description: "Crafting compelling stories and content"
  }
]

function DomainCard({ domain, index }: { domain: typeof domains[0], index: number }) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  const background = useMotionTemplate`radial-gradient(
    circle at ${mouseX}px ${mouseY}px,
    ${domain.shadowColor} 0%,
    transparent 60%
  )`

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: index * 0.2 }
      }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="relative group"
    >
      <motion.div
        className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ background }}
        onMouseMove={handleMouseMove}
      />
      <div className="relative bg-gray-900/50 backdrop-blur-xl rounded-3xl p-8 h-full border border-neutral-200 border-white/10 dark:border-neutral-800">
        {/* Animated Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${domain.gradient} opacity-0 group-hover:opacity-10 transition-opacity rounded-3xl`} />

        {/* Content */}
        <div className="relative z-10">
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${domain.gradient} flex items-center justify-center mb-6`}
          >
            <domain.icon className="w-8 h-8 text-white" />
          </motion.div>

          <motion.h3
            className="text-xl font-semibold mb-2 text-white group-hover:text-transparent bg-clip-text bg-gradient-to-r transition-all duration-300"
            style={{ backgroundImage: `linear-gradient(to right, ${domain.shadowColor}, white)` }}
          >
            {domain.title}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0.7 }}
            whileHover={{ opacity: 1 }}
            className="text-white/70"
          >
            {domain.description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  )
}

export default function DomainsSection() {
  return (
    <section className="min-h-screen relative flex flex-col justify-center items-center py-24 overflow-hidden bg-gradient-to-b from-black via-indigo-600/30 to-black">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Domains</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {domains.map((domain, index) => (
            <DomainCard key={domain.title} domain={domain} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

