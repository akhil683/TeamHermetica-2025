"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '../ui/Button'
import Image from 'next/image'
import image from "../../public/achievement.jpg"

interface Achievement {
  id: number
  year: string
  title: string
  image: string
}

const achievements: Achievement[] = [
  {
    id: 1,
    year: "Nimbus 2k16",
    title: "Best Publicity Team in Nimbus",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    year: "Nimbus 2k17",
    title: "Best Event in Nimbus 2k17",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    year: "Nimbus 2k18",
    title: "Best Innovative Team Nimbus",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export function AchievementCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + achievements.length) % achievements.length)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="achievements" className="relative py-20 bg-gradient-to-b from-indigo-900 to-indigo-300 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 20,
            ease: "linear"
          }}
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,90,0,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white text-center">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Domains</span>
        </h2>

        <div className="relative h-[400px] md:h-[500px] flex items-center justify-center mb-16">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x)
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1)
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1)
                }
              }}
              className="absolute w-full max-w-3xl"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-orange-500/20">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="aspect-video rounded-lg overflow-hidden mb-6"
                >
                  <Image
                    // src={achievements[currentIndex].image}
                    src={image}
                    alt={achievements[currentIndex].title}
                    className="w-full h-full object-cover"
                    width={500}
                    height={500}
                  />
                </motion.div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-orange-500 mb-2">
                    {achievements[currentIndex].year}
                  </h3>
                  <p className="text-xl md:text-2xl text-white">
                    {achievements[currentIndex].title}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <Button
            onClick={() => paginate(-1)}
            className="absolute left-4 md:left-8 z-20 bg-yellow-500 hover:bg-yellow-600 rounded-full p-2"
            size="icon"
            variant="ghost"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            onClick={() => paginate(1)}
            className="absolute right-4 md:right-8 z-20 bg-yellow-500 hover:bg-yellow-600 rounded-full p-2"
            size="icon"
            variant="ghost"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Dots */}
          <div className="absolute -bottom-[30%] left-0 right-0 flex justify-center gap-3 pb-4">
            {achievements.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === currentIndex ? 'bg-yellow-500 scale-125' : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

