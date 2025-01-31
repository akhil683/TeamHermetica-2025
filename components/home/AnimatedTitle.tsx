"use client"

import { delay, motion } from "framer-motion"
import { useEffect, useState } from "react"

export const AnimatedTitle = () => {
  const letters = "HERMETICA".split("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoading(true)
    }, 2500)
  }, [])

  return (
    <div className="flex justify-center overflow-hidden py-4">
      {letters.map((letter, index) => (
        <>
          {loading ? (
            <motion.span
              key={index + 50}
              className="inline-block font-bold text-3xl md:text-[6rem] text-transparent bg-gradient-to-b from-white to-indigo-300 bg-clip-text"
              style={{
                fontFamily: "'Orbitron', sans-serif"
              }}
              initial={{
                y: 0, letterSpacing: '0.8em', textShadow: '0 0 0px #ffffff',
              }}
              animate={{
                y: [0, -20, 0], letterSpacing: '0.8em', textShadow: ['0 0 15px rgba(255, 255, 255, 0.7)', '0 0 5px rgba(255, 255, 255, 0.3)']
              }}
              transition={{
                duration: 2.5,
                ease: "easeOut",
                repeatType: 'reverse',
                repeat: 500,
                delay: index / 10,
                textShadow: { duration: 1, ease: "easeOut", repeat: 500, repeatType: 'reverse' },
              }}
            >
              {letter}
            </motion.span>
          ) : (
            <motion.span
              key={index}
              className="inline-block font-bold text-3xl md:text-[6rem] text-transparent bg-gradient-to-b from-white to-indigo-300 bg-clip-text"
              style={{
                fontFamily: "'Orbitron', sans-serif",
              }}
              initial={{ letterSpacing: "2.5em", opacity: 0, textShadow: '0 0 15px rgba(255, 255, 255, 0.7)' }}
              animate={{ letterSpacing: "0.8em", opacity: 1, textShadow: '0 0 15px rgba(255, 255, 255, 0.7)' }}
              transition={{
                duration: 2.5,
                ease: "easeOut",
                y: { duration: 1, ease: "easeOut" },
                opacity: { duration: 1.5, ease: "easeOut" },
              }}
            >
              {letter}
            </motion.span>
          )}
        </>
      ))}
    </div>
  )
}

