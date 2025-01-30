"use client"

import { motion } from "framer-motion"

export const AnimatedTitle = () => {
  const letters = "HERMETICA".split("")

  return (
    <div className="flex justify-center overflow-hidden">
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          className="inline-block font-bold text-[6rem] text-transparent bg-gradient-to-b from-white to-indigo-300 bg-clip-text"
          style={{
            fontFamily: "'Orbitron', sans-serif",
          }}
          initial={{ letterSpacing: "2.5em", y: 50, opacity: 0 }}
          animate={{ letterSpacing: "0.8em", y: 0, opacity: 1 }}
          transition={{
            duration: 2.5,
            ease: "easeOut",
            y: { duration: 1, ease: "easeOut" },
            opacity: { duration: 1.5, ease: "easeOut" },
          }}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  )
}

