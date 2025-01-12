
import { Button } from "@/components/ui/Button"
import { FlaskRoundIcon as Flask, Award } from "lucide-react"
import WavyLine from "../../components/wavy-line"
import AnimatedCharacter from "../../components/animated-character"
import MovingShapes from "../../components/moving-shapes"
import CardBackgroundShapes from "../../components/card-background-shapes"

const HeroSection = () => {
  return (
    <main className="min-h-screen container mx-auto px-6 py-12 pt-32 text-center relative">
      <WavyLine />

      <div className="relative z-10">
        <h1 className="text-5xl md:text-4xl font-black tracking-tight mb-6 leading-none">
          Team Hermetica
        </h1>
        <p className="text-2xl md:text-7xl font-semibold text-purple-600 mb-12">
          We React to What Matters!
        </p>

        {/* Cards Section */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
          <MovingShapes />
          <AnimatedCharacter />
          {/* Card 1 */}
          <div className="relative bg-purple-200 rounded-3xl p-8 transform transition-transform hover:scale-105 z-10 overflow-hidden">
            <CardBackgroundShapes />
            <div className="absolute top-4 left-4 bg-black text-white text-sm font-bold px-3 py-1 rounded-full">
              EST. 2014
            </div>
            <div className="h-full flex flex-col justify-between">
              <Flask className="h-12 w-12 mb-4 animate-pulse" />
              <div>
                <h3 className="text-2xl font-bold mb-2">Chemical Engineering</h3>
                <p className="text-gray-700">Department's Official Tech Team</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-yellow-200 rounded-3xl p-8 flex flex-col items-center justify-center transform transition-transform hover:scale-105 overflow-hidden">
            <CardBackgroundShapes />
            <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
            <Button
              className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-6 rounded-full group relative overflow-hidden"
            >
              <span className="relative z-10">SIGN UP NOW</span>
              <div className="absolute inset-0 bg-purple-600 transform translate-y-full group-hover:translate-y-0 transition-transform" />
            </Button>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl p-8 flex flex-col items-center justify-center transform transition-transform hover:scale-105 overflow-hidden">
            <CardBackgroundShapes />
            <Award className="h-12 w-12 text-yellow-500 mb-4 animate-spin-slow" />
            <h2 className="text-4xl font-bold mb-2">4.9</h2>
            <p className="text-gray-600">#satisfied members<br />worldwide</p>
            <div className="absolute inset-0 bg-purple-600 transform translate-y-full group-hover:translate-y-0 transition-transform" />
          </div>
        </div>

        {/* Description */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <p className="text-gray-600 text-lg">
            Team Hermetica, established in 2014, represents the Department of Chemical Engineering in the annual tech-fest NIMBUS at National Institute of Technology, Hamirpur.
          </p>
        </div>
      </div>
    </main>

  )
}

export default HeroSection
