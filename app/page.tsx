import React from 'react'
import { Hero } from '@/components/HeroSection'
import ClubCoordinator from '@/components/home/CC'
import { Nimbus } from '@/components/home/Nimbus'
import { AchievementCarousel } from '@/components/home/Achievements'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <Nimbus />
      <AchievementCarousel />
      <ClubCoordinator />
    </main>
  )
}


