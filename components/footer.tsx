"'use client'"

import { motion } from "framer-motion"
import { Instagram, Linkedin, Youtube } from "lucide-react"
import { Button } from "./ui/Button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" }
]

const workLinks = [
  "Projects",
  "Events",
  "Workshops",
  "Members",
  "Gallery",
  "About Us"
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-indigo-900/30 bg-opacity-30 to-black">
        <div className="absolute inset-0">
          {/* Animated gradient orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full mix-blend-overlay filter blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.2, 0.3],
              x: [-50, 50, -50],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full mix-blend-overlay filter blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.3, 0.2],
              x: [50, -50, 50],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 text-gray-400">
          {/* Team Info */}
          <div>
            <motion.h2
              className="text-2xl font-bold mb-4 text-indigo-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Team <span className="text-indigo-400">Hermetica</span>
            </motion.h2>
            <motion.p
              className="text-gray-400 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              "We React to What Matters!" Team Hermetica, was established as the departmental team of Chemical Engineering, at the National Institute of Technology, Hamirpur in the year 2014.
            </motion.p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center hover:bg-purple-600 transition-colors"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <social.icon className="w-5 h-5 text-white" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Team Work */}
          <div>
            <motion.h2
              className="text-2xl font-bold mb-4 text-indigo-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Team <span className="text-indigo-400">Work</span>
            </motion.h2>
            <ul className="space-y-2">
              {workLinks.map((link, index) => (
                <motion.li
                  key={link}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href="#"
                    className="text-gray-600 hover:text-purple-400 transition-colors"
                  >
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Form */}
          <div>
            <motion.h2
              className="text-2xl font-bold mb-4 text-indigo-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Contact <span className="text-indigo-400">Us</span>
            </motion.h2>
            <motion.form
              className="space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Input
                type="text"
                placeholder="Your Name"
                className="bg-white border-gray-300 text-gray-800 placeholder:text-gray-400"
              />
              <Input
                type="email"
                placeholder="Email Address"
                className="bg-white border-gray-300 text-gray-800 placeholder:text-gray-400"
              />
              <Textarea
                placeholder="Suggestions"
                className="bg-white border-gray-300 text-gray-800 placeholder:text-gray-400 min-h-[100px]"
              />
              <Button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
              >
                SEND
              </Button>
            </motion.form>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="mt-16 pt-8 border-t border-white/10 text-center text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="mb-2">A Chemical Engineering Club</p>
          <p>Copyright © 2024, All Rights Reserved</p>
        </motion.div>
      </div>
    </footer>
  )
}

