"use client"
import React, { useState } from 'react'
import { SpaceBackground } from '@/components/SpaceBackground'
import { Button } from '@/components/ui/Button'
import { hermeticaGallery } from '@/data/Gallery'
import { motion } from 'framer-motion'
import Image from 'next/image'

const GalleryPage = () => {
  const [filteredGallery, setFilteredGallery] = useState(hermeticaGallery.previous_nimbus)

  return (
    <section className="min-h-screen bg-black relative overflow-hidden animate-appear">
      <SpaceBackground />

      {/* Filter Section */}
      <div className="container mx-auto px-2 md:px-4 mt-24">
        <div className='max-md:text-sm relative flex items-center flex-wrap gap-2 md:gap-4 my-6'>
          <Button
            onClick={() => setFilteredGallery(hermeticaGallery.previous_nimbus)}
            className='max-md:text-xs bg-gradient-to-b from-indigo-400 duration-300 hover:from-indigo-600 to-indigo-700 rounded-full'
          >
            Nimbus 2k24
          </Button>
          <Button
            onClick={() => setFilteredGallery(hermeticaGallery.pre_nimbus)}
            className='max-md:text-xs bg-gradient-to-b from-indigo-400 hover:from-indigo-600 to-indigo-700 rounded-full'
          >
            Pre-Nimbus
          </Button>
          <Button
            onClick={() => setFilteredGallery(hermeticaGallery.hermetica_day)}
            className='max-md:text-xs bg-gradient-to-b from-indigo-400 hover:from-indigo-600 to-indigo-700 rounded-full'
          >
            Hermetica Day
          </Button>
          <Button
            onClick={() => setFilteredGallery(hermeticaGallery.workshops)}
            className='max-md:text-xs bg-gradient-to-b from-indigo-400 hover:from-indigo-600 to-indigo-700 rounded-full'
          >
            Workshops
          </Button>
          <Button
            onClick={() => setFilteredGallery(hermeticaGallery.awareness)}
            className='max-md:text-xs bg-gradient-to-b from-indigo-400 hover:from-indigo-600 to-indigo-700 rounded-full'
          >
            Awareness
          </Button>
        </div>
      </div>

      <div className="relative px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center max-w-7xl mx-auto">
        {filteredGallery.map(image => (
          <motion.div
            key={image}
            className='h-56 bg-gray-600/60 rounded-2xl'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={image}
              alt='hermetida day'
              width={500}
              height={500}
              priority
              className='h-full rounded-xl hover:scale-105 duration-200'
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default GalleryPage
