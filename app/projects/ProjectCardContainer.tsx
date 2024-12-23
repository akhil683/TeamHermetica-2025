import React from 'react'
import { motion } from 'motion/react'
import img from "../../public/projects/bio.jpeg"
import { FollowerPointerCard } from '@/components/ui/following-pointer'
import ProjectCard from '@/components/ProjectCard'
import { StaticImageData } from 'next/image'

interface ProjectType {
  title: string,
  description: string,
  image: StaticImageData,
  href: string,
  color: string,
}

const ProjectCardContainer = () => {

  const ProjectsData: ProjectType[] = [
    {
      title: "BioLume Aqua Scape",
      description: "Explore our curretn innovation",
      image: img,
      href: "/biolume-aqua-scape",
      color: "bg-sky-500"
    },
    {
      title: "Bio Brick",
      description: "Explore our curretn innovation",
      image: img,
      href: "/biolume-aqua-scape",
      color: "bg-sky-500"
    },
    {
      title: "BioLume Aqua Scape",
      description: "Explore our curretn innovation",
      image: img,
      href: "/biolume-aqua-scape",
      color: "bg-sky-500"
    },
    {
      title: "BioLume Aqua Scape",
      description: "Explore our curretn innovation",
      image: img,
      href: "/biolume-aqua-scape",
      color: "bg-sky-500"
    },
    {
      title: "BioLume Aqua Scape",
      description: "Explore our curretn innovation",
      image: img,
      href: "/biolume-aqua-scape",
      color: "bg-sky-500"
    },
  ]
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-7xl mx-auto">
        {
          ProjectsData.map((project, index) => (
            <FollowerPointerCard
              className={`hover:${project.color}`}
              title={
                <h1 className='px-6 py-2 rounded-full bg-green-500 border-2 border-solid border-white'>
                  {project.title}
                </h1>
              }
            >
              <ProjectCard project={project} index={index} />
            </FollowerPointerCard>
          ))
        }
      </div >
    </section >
  )
}

export default ProjectCardContainer
