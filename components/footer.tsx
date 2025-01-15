"use client"

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
    <footer className="relative overflow-hidden bg-gradient-to-br from-black via-indigo-900/30 bg-opacity-30 to-black">
      {/* Content */}
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 text-gray-400">
          {/* Team Info */}
          <div>
            <motion.h2
              className="text-2xl font-bold mb-4 text-indigo-200"
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
              className="text-2xl font-bold mb-4 text-indigo-200"
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
                    className="text-gray-400 hover:text-purple-400 transition-colors"
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
              className="text-2xl font-bold mb-4 text-indigo-200"
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
                className="bg-white border-gray-300 text-gray-800 placeholder:text-gray-500"
              />
              <Input
                type="email"
                placeholder="Email Address"
                className="bg-white border-gray-300 text-gray-800 placeholder:text-gray-500"
              />
              <Textarea
                placeholder="Suggestions"
                className="bg-white border-gray-300 text-gray-800 placeholder:text-gray-500 min-h-[100px]"
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
          className="mt-16 pt-8 border-t border-white/10 text-center text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="mb-2">A Chemical Engineering Club</p>
          <p>Copyright © 2024, All Rights Reserved</p>
        </motion.div>
      </div>
    </footer >
  )
}

