'use client'

import { motion } from "framer-motion"
import { Star } from 'lucide-react'
import { Card } from "@/components/ui/card"
import image from "../../public/achievement.jpg"
import Image from "next/image"
import Link from "next/link"

interface Project {
  id: number
  title: string
  image: string
  rating: number
  reviews: number
}

const projects: Project[] = [
  {
    id: 1,
    title: "Cementious Material from Agro-waste Production",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-14%20231102-xT74GYBQehmggANCtsSoAQjrNC7Svg.png",
    rating: 4,
    reviews: 4
  },
  {
    id: 2,
    title: "Noise Proofing by Upcycling Agro-waste",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-14%20231102-xT74GYBQehmggANCtsSoAQjrNC7Svg.png",
    rating: 2,
    reviews: 2
  },
  {
    id: 3,
    title: "Electricity Generating Tiles",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-14%20231102-xT74GYBQehmggANCtsSoAQjrNC7Svg.png",
    rating: 3,
    reviews: 1
  },
  {
    id: 4,
    title: "Blending of Hydrogen in Natural Gas Pipeline",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-14%20231102-xT74GYBQehmggANCtsSoAQjrNC7Svg.png",
    rating: 4,
    reviews: 1
  }
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${star <= rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
            }`}
        />
      ))}
    </div>
  )
}

export default function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {projects.map((project) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: project.id * 0.1 }}
        >
          <Card className="min-h-96 group relative overflow-hidden rounded-xl border-transparent bg-gradient-to-tr from-gray-900 via-indigo-900/50 to-gray-900 bg-opacity-20 transition-all duration-300">
            <Link href={"/projects/1"}>
              {/* Project Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  // src={project.image}
                  src={image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Project Info */}
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <StarRating rating={project.rating} />
                  <span className="text-gray-500 text-sm">({project.reviews})</span>
                </div>
                <h3 className="text-gray-300 text-lg font-medium line-clamp-2 group-hover:text-purple-600 transition-colors">
                  {project.title}
                </h3>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 border-2 border-purple-500/0 group-hover:border-purple-500/50 rounded-xl transition-colors duration-300" />
            </Link>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

