'use client'
import { ArrowRight } from "lucide-react"
import { motion } from "motion/react"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"

interface PropType {
  project: {
    title: string,
    description: string,
    image: StaticImageData,
    href: string,
    color: string,
  },
  index: number
}

const ProjectCard = ({ project, index }: PropType) => {

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }
  return (
    <motion.div
      key={project.title}
      variants={itemVariants}
      className={`relative ${index === 1 ? "md:mt-16" : ""
        } ${index === 2 ? "md:mt-[-4rem]" : ""
        }`}
    >
      <div className="group">
        <div className="relative overflow-hidden rounded-lg">
          <Image
            src={project.image}
            alt={project.title}
            width={600}
            height={600}
            className="object-cover w-full h-[300px] md:h-[500px] transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="mt-6">
          <h3 className="text-3xl font-medium mb-2">
            {project.title}
          </h3>
          <p className="text-gray-600 mb-4">
            {project.description}
          </p>
          <Link
            href={project.href}
            className="inline-flex items-center font-medium hover:text-gray-900 transition-colors"
          >
            Project Detail
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
