import { AchievementCarousel } from "@/components/home/Achievements-carousel"
import DomainsSection from "../components/domains-section"
import AboutSection from "@/components/about-section"
import ClubCoordinator from "@/components/home/ClubCoordinator"
import HeroSection from "@/components/home/Hero"


export default function LandingPage() {

  return (
    <div className="min-h-screen bg-black overflow-hidden font-['Space_Grotesk'] relative animate-appear">
      <HeroSection />
      <AboutSection />
      <DomainsSection />
      <AchievementCarousel />
      <ClubCoordinator />
    </div>
  )
}

