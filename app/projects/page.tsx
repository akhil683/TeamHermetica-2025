import ProjectGrid from '@/components/projects/project-grid'
import { SpaceBackground } from '@/components/SpaceBackground'
import { Button } from '@/components/ui/Button'
import React from 'react'

const ProjectPage = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden animate-appear">
      <SpaceBackground />

      {/* Search Section */}
      <div className="container mx-auto px-4 py-8 mt-12">
        <div className='relative flex items-center gap-4 my-6'>
          <Button className='text-sm md:text-lg bg-gradient-to-b from-indigo-400 duration-300 hover:from-indigo-500 to-indigo-700 rounded-full'>
            2k25
          </Button>
          <Button className='text-sm md:text-lg bg-gradient-to-b from-indigo-400 hover:from-indigo-600 to-indigo-700 rounded-full'>
            2k24
          </Button>
        </div>
        <ProjectGrid />
      </div>
    </div >
  )
}

export default ProjectPage
