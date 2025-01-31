"use client"

import { motion } from "framer-motion"
import StarBackground from "./StarBackground"
import { AnimatedCircle } from "./AnimatedCircle"
import { AnimatedTitle } from "./AnimatedTitle"

const HeroSection = () => {

  return (
    <section className="relative h-screen bg-gradient-to-b from-black  overflow-hidden flex items-center">
      <StarBackground />
      <AnimatedCircle />
      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto text-center md:space-y-16 space-y-36">
          <motion.h1 initial={{ translateY: 100, scale: 0.8, opacity: 0.5 }} animate={{ translateY: 0, opacity: 1, scale: 1 }} transition={{ duration: 1.5, delay: 0.3 }} className="relative text-4xl bg-clip-text font-semibold inline-block text-transparent bg-gradient-to-tr from-purple-400 via-blue-400 to-pink-400">
            We React to What Matter !
          </motion.h1>
          <AnimatedTitle />
          <motion.p
            className="text-lg text-gray-300 md:text-xl md:px-32"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Team Hermetica, established in 2014, represents the Department of Chemical Engineering in the annual tech-fest NIMBUS at National Institute of Technology, Hamirpur.
          </motion.p>
        </div>
      </div>
    </section>

  )
}

export default HeroSection
