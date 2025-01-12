"use client"
import AnimatedCursor from "../components/animated-cursor"
import BackgroundShapes from "../components/background-shapes"
import AboutSection from "../components/about-section"
import AchievementsCarousel from "../components/achievements-carousel"
import DomainsSection from "../components/domains-section"
import Footer from "../components/footer"
import { Navbar } from "@/components/Navbar"
import HeroSection from "@/components/home/Hero"


export default function LandingPage() {
  return (
    <div className="min-h-screen bg-purple-50 overflow-hidden font-['Space_Grotesk'] relative">
      <AnimatedCursor />
      <BackgroundShapes />

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Achievements Section */}
      <AchievementsCarousel />

      {/* Domains Section */}
      <DomainsSection />

      {/* Footer */}
      <Footer />
    </div>
  )
}

