import { SpaceBackground } from '@/components/SpaceBackground'
import { Button } from '@/components/ui/Button'
import React from 'react'
import { GuestLectures, GuestLecturesType } from '@/data/GuestLectures'
import ProjectCard from '@/components/projects/ProjectCard'

const GuestLecturesPage = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden animate-appear">
      <SpaceBackground />

      {/* Search Section */}
      <div className="container mx-auto px-4 py-8 mt-12">
        <div className='relative flex items-center gap-4 my-6'>
          {/* <Button className='text-sm md:text-lg bg-gradient-to-b from-indigo-400 duration-300 hover:from-indigo-500 to-indigo-700 rounded-full'> */}
          {/*   2k25 */}
          {/* </Button> */}
          {/* <Button className='text-sm md:text-lg bg-gradient-to-b from-indigo-400 hover:from-indigo-600 to-indigo-700 rounded-full'> */}
          {/*   2k24 */}
          {/* </Button> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {GuestLectures.map((project) => (
            <ProjectCard project={project} key={project.name} />
          ))}
        </div>
      </div>
    </div >
  )
}

export default GuestLecturesPage
