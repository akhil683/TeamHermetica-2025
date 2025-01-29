"use client";

import { motion } from "framer-motion";
import { Zap, Eye, Target } from "lucide-react";
import { SpaceBackground } from "./SpaceBackground";

const aboutCards = [
  {
    title: "Nimbus",
    icon: Zap,
    description: [
      "Nimbus, the annual technical fest of NITH since 2010 is a groundbreaking amalgamation of science and technology with pure delight and enthusiasm.",
      "Nimbus has diversified into an organization that apart from showcasing advancement and innovation, also strives for the betterment of society.",
    ],
  },
  {
    title: "Our Vision",
    icon: Eye,
    description: [
      "To create a vivid environment in which human resources can meet national expectations.",
      "With a long-term goal of environmental protection, we analyze all new possibilities in chemical engineering in conjunction with research strengths in various technologies, diverse polymers, biochemical and food engineering.",
    ],
  },
  {
    title: "Our Mission",
    icon: Target,
    description: [
      "We conceive new knowledge via innovative research and collaborative initiatives that provide opportunities for long-term interaction with academia and industry.",
      "We aim to train students on intellectual resources, serve society, and create environment-friendly technologies. The mission of Team Hermetica is to inculcate the best knowledge in society.",
    ],
  },
];

function AboutCard({ card, index }: { card: typeof aboutCards[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 75 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: index * 0.1 },
      }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="bg-gradient-to-tr from-blue-900/30 via-indigo-900/20 to-purple-900/10 p-12 rounded-lg shadow-md border border-gray-700 flex flex-col hover:bg-indigo-700/10 hover:border-indigo-300 duration-200"
    >
      <div className="relative text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center">
          <card.icon className="w-8 h-8 text-white" />
        </div>

        <h3 className="text-xl font-bold mb-2 text-purple-300">{card.title}</h3>

        <div className="space-y-2">
          {card.description.map((paragraph, i) => (
            <p key={i} className="text-white leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function AboutSection() {
  return (
    <section className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-black via-indigo-600/20 to-black">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Us</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {aboutCards.map((card, index) => (
          <AboutCard key={card.title} card={card} index={index} />
        ))}
      </div>
    </section>
  );
}
