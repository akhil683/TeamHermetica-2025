"use client"

import { useState, useEffect } from 'react'
import { achievements } from '@/data/Achievements'
import EmblaCarousel from '../Carousel'


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
    }, 4300)
    return () => clearInterval(timer)
  }, [])
  const OPTIONS = { dragFree: true, loop: true }

  return (
    <section id="achievements" className="relative py-20 overflow-hidden">

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white text-center">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Achievements</span>
        </h2>

        <EmblaCarousel options={OPTIONS} />
      </div>
    </section>
  )
}

