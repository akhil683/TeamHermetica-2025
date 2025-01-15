"use client"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { FlaskRoundIcon as Flask, Menu } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"



export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 flex justify-center p-4 z-50" >
        <nav className="flex items-center justify-between px-8 py-2 bg-gray-200/60  text-black backdrop-blur-md rounded-full w-[95%]">
          <Link href={"/"} className="flex items-center gap-2">
            <Flask className="h-8 w-8 text-white" />
            <span className="text-xl font-bold">
              Team Hermetica
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <Button
              className="bg-indigo-700 text-white hover:bg-gray-800 px-6 md:py-5 py-3 rounded-full group relative overflow-hidden"
            >
              <span className="relative z-10">SIGN UP</span>
              <div className="absolute inset-0 bg-purple-600 transform translate-y-full group-hover:translate-y-0 transition-transform" />
            </Button>
            <Button variant="ghost" className="bg-indigo-700 rounded-full text-white hover:text-white hover:bg-purple-600" onClick={toggleMenu}>
              <Menu className="h-12 w-12" />
            </Button>
          </div>
        </nav>
      </header >

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={toggleMenu}
            />
            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 bg-gray-900/80 text-white backdrop-blur-xl p-6 rounded-t-3xl border border-neutral-200 border-purple-500/20 z-50 dark:border-neutral-800"
            >
              <div className="flex flex-col gap-4">
                <Link
                  href="/projects"
                  className="text-lg font-medium hover:text-purple-400 transition-colors text-center py-3"
                  onClick={toggleMenu}
                >
                  Projects
                </Link>
                <Link
                  href="/events"
                  className="text-lg font-medium hover:text-purple-400 transition-colors text-center py-3"
                  onClick={toggleMenu}
                >
                  Events
                </Link>
                <Link
                  href="/guest-lectures"
                  className="text-lg font-medium hover:text-purple-400 transition-colors text-center py-3"
                  onClick={toggleMenu}
                >
                  Guest Lectures
                </Link>
                <Link
                  href="/members"
                  className="text-lg font-medium hover:text-purple-400 transition-colors text-center py-3"
                  onClick={toggleMenu}
                >
                  Members
                </Link>
                <Link
                  href="/gallery"
                  className="text-lg font-medium hover:text-purple-400 transition-colors text-center py-3"
                  onClick={toggleMenu}
                >
                  Gallery
                </Link>
                <Link
                  href="/about"
                  className="text-lg font-medium hover:text-purple-400 transition-colors text-center py-3"
                  onClick={toggleMenu}
                >
                  About Us
                </Link>
                <Button
                  className="md:hidden bg-purple-500 hover:bg-purple-600 text-white rounded-full px-6 py-6 mt-2"
                  onClick={toggleMenu}
                >
                  Sign In
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

