"'use client'"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "./ui/Button"
import { Card } from "@/components/ui/card"

interface Achievement {
  year: string
  title: string
}

const achievements: Achievement[] = [
  {
    year: "Nimbus 2k16",
    title: "Best Publicity Team in Nimbus"
  },
  {
    year: "Nimbus 2k17",
    title: "Best Event in Nimbus 2k17"
  },
  {
    year: "Nimbus 2k18",
    title: "Best Innovative Team Nimbus"
  }
]

const variants = {
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

export default function AchievementsCarousel() {
  const [[page, direction], setPage] = useState([0, 0])

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection])
  }

  const currentIndex = ((page % achievements.length) + achievements.length) % achievements.length

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-purple-900/90" />

        {/* Animated lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line
            x1="0" y1="100%" x2="100%" y2="0"
            stroke="rgba(139, 92, 246, 0.2)" strokeWidth="2"
            className="animate-[dash_20s_linear_infinite]"
            strokeDasharray="10,10"
          />
          <path
            d="M0,50 Q25,25 50,50 T100,50"
            fill="none"
            stroke="rgba(168, 85, 247, 0.2)"
            strokeWidth="2"
            className="animate-[wave_10s_ease-in-out_infinite]"
          >
            <animate
              attributeName="d"
              values="M0,50 Q25,25 50,50 T100,50; Q25,75 T100,50"
              dur="10s"
              repeatCount="indefinite"
            />
          </path>
        </svg>

        {/* Floating shapes */}
        <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-purple-500/20 rounded-full animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-purple-400/20 rounded-lg rotate-45 animate-float animation-delay-1000" />
        <div className="absolute top-3/4 left-1/2 w-8 h-8 border-2 border-purple-500/20 rounded-full animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
            Past
            <span className="text-purple-500">
              Achievement
            </span>
          </h2>
        </div>

        <div className="relative h-[500px] max-w-4xl mx-auto">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
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
              className="absolute w-full"
            >
              <Card className="group relative overflow-hidden rounded-3xl border-0 h-[500px]">
                <div className="relative overflow-hidden rounded-3xl h-full bg-gradient-to-br from-purple-900 to-indigo-900 p-8 flex flex-col justify-end">
                  {/* Animated background elements */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full">
                      <svg className="w-full h-full" viewBox="0 100" preserveAspectRatio="none">
                        <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="0.5">
                          <animate attributeName="d" dur="10s" repeatCount="indefinite" values="M0,0 L100,0 L100,100 L0,100 Z;
                                                   M0,50 L50,0 L100,50 L50,100 Z"/>
                        </path>
                      </svg>
                    </div>
                    <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-purple-500/20 rounded-full animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-indigo-500/20 rounded-lg rotate-45 animate-bounce" />
                    <div className="absolute top-3/4 left-1/2 w-8 h-8 border-2 border-yellow-500/20 rounded-full animate-spin" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <motion.h3
                      className="text-purple-300 text-2xl mb-3 font-semibold"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {achievements[currentIndex].year}
                    </motion.h3>
                    <motion.p
                      className="text-3xl font-bold leading-tight text-white group-hover:text-purple-200 transition-colors"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {achievements[currentIndex].title}
                    </motion.p>
                  </div>

                  {/* Hover effect border */}
                  <div className="absolute inset-0 border-2 border-purple-500/0 group-hover:border-purple-500/50 rounded-3xl transition-colors duration-300" />
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="absolute left-0 right-0 bottom-[-80px] flex justify-center items-center gap-4">
            <Button
              onClick={() => paginate(-1)}
              variant="outline"
              size="icon"
              className="rounded-full bg-purple-500/10 border-purple-500/20 hover:bg-purple-500/20"
            >
              <ChevronLeft className="h-4 w-4 text-purple-500" />
            </Button>
            <div className="flex gap-2">
              {achievements.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setPage([index, index > currentIndex ? 1 : -1])}
                  className={`w-2 h-2 rounded-full transition-all ${index === currentIndex
                    ? "bg-purple-500 w-4"
                    : "bg-purple-500/20 hover:bg-purple-500/40"
                    }`}
                />
              ))}
            </div>
            <Button
              onClick={() => paginate(1)}
              variant="outline"
              size="icon"
              className="rounded-full bg-purple-500/10 border-purple-500/20 hover:bg-purple-500/20"
            >
              <ChevronRight className="h-4 w-4 text-purple-500" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

