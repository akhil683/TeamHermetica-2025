import React from 'react'
import { Hero } from '../components/hero'
import Nimbus from '@/components/home/CC'
import ClubCoordinator from '@/components/home/CC'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <ClubCoordinator />
    </main>
  )
}


