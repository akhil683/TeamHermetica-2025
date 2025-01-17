'use client'

import { motion } from 'framer-motion'
import { Card } from "@/components/ui/card"
import { Instagram, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'

interface Member {
  id: number
  name: string
  position: string
  image: string
  bio: string
  social: {
    instagram?: string
    linkedin?: string
    email?: string
  }
}

const members: Member[] = [
  {
    id: 1,
    name: "Priyanshu Garg",
    position: "Club Co-ordinator",
    image: "https://firebasestorage.googleapis.com/v0/b/hermetica-76788.appspot.com/o/Members%2F2nd%20year%2Fpriyanshu.jpg?alt=media&token=6c08fdcc-05b4-4f28-bf49-c3422734f774",
    bio: "Chemical Engineering student passionate about sustainable technologies and innovative solutions. Leading team projects and organizing technical events.",
    social: {
      instagram: "https://instagram.com/aditya",
      linkedin: "https://linkedin.com/in/aditya",
      email: "mailto:aditya@team.com"
    }
  },
  {
    id: 2,
    name: "Rohit Kumar",
    position: "Club Coordinator",
    image: "https://firebasestorage.googleapis.com/v0/b/hermetica-76788.appspot.com/o/Members%2F2nd%20year%2Frohit.jpeg?alt=media&token=3b1e862a-805f-4b32-8d92-2baaa849c5b3",
    bio: "Specializing in process optimization and automation. Passionate about mentoring juniors and driving innovation in chemical engineering.",
    social: {
      instagram: "https://instagram.com/nikhil",
      linkedin: "https://linkedin.com/in/nikhil",
      email: "mailto:nikhil@team.com"
    }
  },
]

export default function ClubCoordinator() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-indigo-600/20 to-black">
      <main className="container mx-auto px-4 sm:px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white text-center">
            Club <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Coordinators</span>
          </h2>


          <p className="text-gray-400 max-w-2xl mx-auto">
            Meet our dedicated team of coordinators who lead Team Hermetica towards excellence in chemical engineering innovation.
          </p>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {members.map((member) => (
            <motion.div
              key={member.id}
              className="group relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="relative overflow-hidden rounded-3xl bg-[#f3e5ff]/10 border-none aspect-[3/4] max-h-[500px]">
                {/* Member Image */}
                <div className="absolute inset-0">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Overlay with Member Info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-bold bg-gradient-to-b text-transparent bg-clip-text from-indigo-400 to-purple-400 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-white font-semibold mb-4">
                      {member.position}
                    </p>
                    <p className="text-gray-300 text-sm mb-6 line-clamp-3">
                      {member.bio}
                    </p>

                    {/* Social Links */}
                    <div className="flex gap-4">
                      {member.social.instagram && (
                        <a
                          href={member.social.instagram}
                          target="_blank"
                          className="text-white hover:text-[#E1306C] transition-colors"
                        >
                          <Instagram className="h-5 w-5" />
                        </a>
                      )}
                      {member.social.linkedin && (
                        <a
                          href={member.social.linkedin}
                          target="_blank"
                          className="text-white hover:text-[#0077B5] transition-colors"
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                      )}
                      {member.social.email && (
                        <a
                          href={member.social.email}
                          target="_blank"
                          className="text-white hover:text-[#b794f4] transition-colors"
                        >
                          <Mail className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Name Label (visible by default) */}
                <div className="absolute bottom-4 left-4 right-4 p-2 bg-gradient-to-b from-purple-700 to-indigo-700 backdrop-blur-sm rounded-full text-center group-hover:opacity-0 transition-opacity duration-300">
                  <h3 className="text-white font-medium">
                    {member.name}
                  </h3>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  )
}

