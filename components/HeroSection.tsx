"use client"
import React from 'react'
import { motion } from 'motion/react'
import { Button } from './ui/Button'
import { FlaskRoundIcon as Flask, Atom, Beaker, Pipette, Microscope, Thermometer, Droplet, Gauge, TestTube } from 'lucide-react'
import Link from 'next/link'

const ChemIcon = ({ icon: Icon, color, size, delay }: { icon: typeof Flask; color: string; size: number; delay: number }) => {
  return (
    <motion.div
      className={`absolute opacity-30 md:opacity-50 ${color}`}
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      }}
      animate={{
        y: [0, -30, 0],
        x: [0, Math.random() * 40 - 20, 0],
        rotate: [0, 360],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 5 + Math.random() * 5,
        delay: delay,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      <Icon size={size} />
    </motion.div>
  )
}

const MovingBackground = () => {
  const icons = [
    { Icon: TestTube, color: "text-yellow-500", size: 48 },
    { Icon: Flask, color: "text-blue-600", size: 64 },
    { Icon: Atom, color: "text-green-600", size: 48 },
    { Icon: Beaker, color: "text-purple-500", size: 72 },
    { Icon: Gauge, color: "text-purple-500", size: 52 },
    { Icon: Microscope, color: "text-red-500", size: 64 },
    { Icon: Droplet, color: "text-green-500", size: 56 },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {icons.map((icon, i) => (
        <ChemIcon
          key={i}
          icon={icon.Icon}
          color={icon.color}
          size={icon.size}
          delay={i * 0.2}
        />
      ))}
    </div>
  )
}

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-100 via-green-100 to-purple-100">
      <MovingBackground />
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-6xl font-bold mb-6 text-gray-800 drop-shadow-lg"
        >
          <span>Team Hermetica</span>
          <h1 className="mt-4 text-primaryOrange text-5xl  md:text-7xl">We React To What Matters !</h1>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg px-4 md:text-xl mb-8 text-gray-700 drop-shadow"
        >
          Team Hermetica, established in 2014, represents the Department of Chemical Engineering, in the annual tech-fest NIMBUS at National Institite of Technology, Hamirpur.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex gap-4 max-sm:flex-col justify-center items-center max-sm:px-12"
        >
          <Link href={'/projects'} className='w-full max-w-52'>
            <p className='px-6 py-2 bg-orange-500 max-sm:w-full text-white rounded-lg hover:text-orange-700 border border-orange-500 hover:bg-orange-500/10 duration-200'>Explore Projects</p>
          </Link>
          <Link href={"/about-us"} className='w-full max-w-52'>
            <p className='px-6 max-sm:w-full hover:bg-green-700 hover:text-white py-2 text-green-700 rounded-lg border border-green-600 bg-green-600/10 duration-200'>About Us</p>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

