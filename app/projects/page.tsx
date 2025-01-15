import ProjectGrid from '@/components/projects/project-grid'
import { SpaceBackground } from '@/components/SpaceBackground'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'

const ProjectPage = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden animate-appear">
      <SpaceBackground />

      {/* Search Section */}
      <div className="container mx-auto px-4 py-8 mt-12">
        <div className="relative max-w-2xl mx-auto mb-12">
          <Input
            type="text"
            placeholder="Search projects"
            className="w-full bg-gray-800/80 border-gray-500 text-gray-200 placeholder:text-gray-500 h-12 pl-12 rounded-full shadow-lg backdrop-blur-sm"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-indigo-400" />
        </div>
        <ProjectGrid />
      </div>
    </div>
  )
}

export default ProjectPage
