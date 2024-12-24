import React from 'react'
import { motion } from 'motion/react'
import { FollowerPointerCard } from '@/components/ui/following-pointer'
import ProjectCard from '@/components/ProjectCard'
import { ProjectsData } from '@/constants/Projects'

const ProjectCardContainer = () => {
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
