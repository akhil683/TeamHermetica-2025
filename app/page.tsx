"use client"
import BackgroundShapes from "../components/background-shapes"
import { AchievementCarousel } from "@/components/home/Achievements-carousel"
import DomainsSection from "../components/domains-section"
import Footer from "../components/footer"
import HeroSection from "@/components/home/Hero"


export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black overflow-hidden font-['Space_Grotesk'] relative animate-appear">
      <BackgroundShapes />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      {/* <AboutSection /> */}

      {/* Achievements Section */}
      <AchievementCarousel />

      {/* Domains Section */}
      {/* <DomainsSection /> */}

      {/* Footer */}
      <Footer />
    </div>
  )
}

