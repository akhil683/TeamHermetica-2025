"use client"
import { AchievementCarousel } from "@/components/home/Achievements-carousel"
import DomainsSection from "../components/domains-section"
import AboutSection from "@/components/about-section"
import ClubCoordinator from "@/components/home/ClubCoordinator"
import { useState } from "react"
import StarToMoonAnimation from "@/components/StartToMoon"
import HeroSection from "@/components/home/Hero"


export default function LandingPage() {
  const [showAnimation, setShowAnimation] = useState(true)

  const handleAnimationComplete = () => {
    setShowAnimation(false)
  }

  return (
    <div className="min-h-screen bg-black overflow-hidden font-['Space_Grotesk'] relative animate-appear">
      {showAnimation && <StarToMoonAnimation onAnimationComplete={handleAnimationComplete} />}
      <HeroSection />
      <AboutSection />
      <DomainsSection />
      <AchievementCarousel />
      <ClubCoordinator />
    </div>
  )
}

