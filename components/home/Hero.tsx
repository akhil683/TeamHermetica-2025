
import { Button } from "@/components/ui/Button"
import { FlaskRoundIcon as Flask, Award } from "lucide-react"
import { SpaceBackground } from "../SpaceBackground"

const HeroSection = () => {
  return (
    <main className="min-h-screen mx-auto py-12 pt-32 text-center relative">
      <SpaceBackground />

      <div className="relative z-10 max-md:px-6">
        <p className="text-xl md:text-4xl tracking-tight mb-6 leading-none text-white">
          Team Hermetica
        </p>
        <h1 className="text-4xl md:text-7xl font-semibold text-purple-600 mb-12 text-transparent bg-gradient-to-b from-indigo-300 to-indigo-500 bg-clip-text">
          We React to What Matters!
        </h1>

        {/* Description */}
        <div className="md:hidden mb-16 max-w-3xl mx-auto text-center">
          <p className="text-gray-300 text-lg">
            Team Hermetica, established in 2014, represents the Department of Chemical Engineering in the annual tech-fest NIMBUS at National Institute of Technology, Hamirpur.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
          {/* Card 1 */}
          <div className="max-md:hidden relative bg-purple-200 rounded-3xl p-8 transform transition-transform hover:scale-105 z-10 overflow-hidden">
            <div className="absolute top-4 left-4 bg-black text-white text-sm font-bold px-3 py-1 rounded-full">
              EST. 2014
            </div>
            <div className="h-full flex flex-col justify-between">
              <Flask className="h-12 w-12 mb-4 animate-pulse" />
              <div>
                <span className="text-2xl font-bold mb-2">Chemical Engineering</span>
                <p className="text-gray-700">Department's Official Tech Team</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-yellow-300 rounded-3xl p-8 flex flex-col items-center justify-center transform transition-transform hover:scale-105 overflow-hidden">
            <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
            <Button
              className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-6 rounded-full group relative overflow-hidden"
            >
              <span className="relative z-10">SIGN UP NOW</span>
              <div className="absolute inset-0 bg-purple-600 transform translate-y-full group-hover:translate-y-0 transition-transform" />
            </Button>
          </div>

          {/* Card 3 */}
          <div className="max-md:hidden  bg-white rounded-3xl p-8 flex flex-col items-center justify-center transform transition-transform hover:scale-105 overflow-hidden">
            <Award className="h-12 w-12 text-yellow-500 mb-4 animate-spin-slow" />
            <p className="text-4xl font-bold mb-2">4.9</p>
            <p className="text-gray-600">#satisfied members<br />worldwide</p>
            <div className="absolute inset-0 bg-purple-600 transform translate-y-full group-hover:translate-y-0 transition-transform" />
          </div>
        </div>

        {/* Description */}
        <div className="max-md:hidden mt-16 max-w-3xl mx-auto text-center">
          <p className="text-gray-300 text-lg">
            Team Hermetica, established in 2014, represents the Department of Chemical Engineering in the annual tech-fest NIMBUS at National Institute of Technology, Hamirpur.
          </p>
        </div>
      </div>
    </main>

  )
}

export default HeroSection
