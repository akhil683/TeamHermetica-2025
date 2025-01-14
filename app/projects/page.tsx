import BackgroundGradient from '@/components/projects/background-gradient'
import ProjectGrid from '@/components/projects/project-grid'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'

const ProjectPage = () => {
  return (
    <div className="min-h-screen bg-purple-50 relative overflow-hidden animate-appear">
      <BackgroundGradient />

      {/* Search Section */}
      <div className="container mx-auto px-4 py-8 mt-12">
        <div className="relative max-w-2xl mx-auto mb-12">
          <Input
            type="text"
            placeholder="Search projects"
            className="w-full bg-white/80 border-purple-200 text-gray-800 placeholder:text-gray-500 h-12 pl-12 rounded-full shadow-lg backdrop-blur-sm"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400" />
        </div>
        <ProjectGrid />
      </div>
    </div>
  )
}

export default ProjectPage
