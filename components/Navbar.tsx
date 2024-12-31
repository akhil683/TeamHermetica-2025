'use client'
import React, { useState } from 'react'
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react'
import Link from 'next/link';

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="text-gray-800 hover:text-blue-600 transition-colors font-medium">
    {children}
  </Link>
)

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="absolute top-0 left-0 right-0 z-10 bg-white bg-opacity-80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-blue-600 text-2xl font-bold">Team Hermetica</Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/projects">Projects</NavLink>
              <NavLink href="/events">Events</NavLink>
              <NavLink href="/members">Members</NavLink>
              <NavLink href="/gallery">Gallery</NavLink>
              <NavLink href="/about-us">About Us</NavLink>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-blue-600 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white bg-opacity-90 shadow-lg">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/events">Events</NavLink>
            <NavLink href="/members">Members</NavLink>
            <NavLink href="/gallery">Gallery</NavLink>
            <NavLink href="/about-us">About Us</NavLink>
          </div>
        </motion.div>
      )}
    </nav>
  )
}

