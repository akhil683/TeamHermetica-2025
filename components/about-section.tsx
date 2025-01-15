"use client"

import { motion } from "framer-motion"
import { Zap, Eye, Target } from "lucide-react"

const aboutCards = [
  {
    title: "Nimbus",
    icon: Zap,
    description: [
      "Nimbus, the annual technical fest of NITH since 2010 is a groundbreaking amalgamation science and technology with pure delight enthusiasm.",
      "Nimbus has diversified into an organization that apart from showcasing advancement and innovation, also strives for the betterment of society."
    ]
  },
  {
    title: "Our Vision",
    icon: Eye,
    description: [
      "To create a vivid environment in which human resources can meet national expectations.",
      "With a long-term goal of environmental protection, we analyse all new possibilities in chemcial engineering conjuction with research strengths various technologies, diverse polymers, biochemical and food engineering."
    ]
  },
  {
    title: "Our Mission",
    icon: Target,
    description: [
      "We conceive new knowledge via innovative research and collaborative initiatives that provide opportunity for long-term interaction with academia industry.",
      "We aim to train students on intellectual resources serve society and create environment- friendly technologies. The mission of Team Hermetica is inculcate the best knowledge in society."
    ]
  }
]

function AboutCard({ card, index }: { card: typeof aboutCards[0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: index * 0.2 }
      }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="bg-gradient-to-tr from-blue-900/30 via-indigo-900/20 to-purple-900/10 bg-opacity-50 p-6 md:p-12 rounded-lg shadow-lg backdrop-blur-sm border border-gray-700 flex flex-col hover:bg-indigo-700/10 hover:border-indigo-300 duration-300"
    >
      <div className="relative overflow-hidden h-full bg-transparent border-transparent hover:border-transparent">
        {/* Content */}
        <div className="relative p-8 text-center">
          <motion.div
            className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <card.icon className="w-10 h-10 text-white" />
          </motion.div>

          <h3 className="text-2xl font-bold mb-4 text-purple-300">
            {card.title}
          </h3>

          <div className="space-y-4">
            {card.description.map((paragraph, i) => (
              <p key={i} className="text-white leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function AboutSection() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-indigo-600/30 to-black relative py-24 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Us</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-16 md:gap-8 max-w-7xl mx-auto px-3">
          {aboutCards.map((card, index) => (
            <AboutCard key={card.title} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

