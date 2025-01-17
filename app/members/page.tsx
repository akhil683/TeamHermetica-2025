import { SpaceBackground } from '@/components/SpaceBackground'
import { Button } from '@/components/ui/Button'
import React from 'react'

const MembersPage = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden animate-appear">
      <SpaceBackground />

      {/* Search Section */}
      <div className="container mx-auto px-4 py-8 mt-12">
        <div className='text-sm relative flex items-center flex-wrap gap-2 md:gap-4 my-6'>
          <Button className='text-sm bg-gradient-to-b from-indigo-400 duration-300 hover:from-indigo-600 to-indigo-700 rounded-full'>
            Final Year
          </Button>
          <Button className='bg-gradient-to-b from-indigo-400 hover:from-indigo-600 to-indigo-700 rounded-full'>
            3rd Year
          </Button>
          <Button className='bg-gradient-to-b from-indigo-400 hover:from-indigo-600 to-indigo-700 rounded-full'>
            2nd Year
          </Button>
          <Button className='bg-gradient-to-b from-indigo-400 hover:from-indigo-600 to-indigo-700 rounded-full'>
            1st Year
          </Button>
        </div>
      </div>
    </div >
  )
}

export default MembersPage
