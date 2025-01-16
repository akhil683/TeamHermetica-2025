import Image from 'next/image'
import { Star } from 'lucide-react'
import image from "../../public/achievement.jpg"

export default function ProjectDetail() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-indigo-500/20 to-black">
      <main className="container mx-auto px-6 py-20">
        {/* Project Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-b from-indigo-200 to-indigo-500 bg-clip-text text-transparent">
          Cementitious Material from Agro-waste and fly ash
        </h1>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Project Image */}
          <div className="rounded-3xl overflow-hidden bg-[#f3e5ff]/10 p-1">
            <div className="relative h-[400px] rounded-3xl overflow-hidden">
              <Image
                src={image}
                alt="Cementitious Material Project"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-6">
            {/* Proposer Info */}
            <div className="bg-indigo-400/10 rounded-3xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl text-white">Proposed By: <span className="text-[#b794f4]">Abhinav Chahar</span></h2>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#ffd700] text-[#ffd700]" />
                  ))}
                </div>
              </div>

              {/* Project Description */}
              <p className="text-gray-400 leading-relaxed mb-4">
                The utilization of agro-waste and industrial byproducts in cementitious materials has gained significant attention as a sustainable and environmentally friendly approach to construction. This abstract presents an overview of the research and development of cementitious materials derived from a combination of agro-waste and fly ash.
              </p>
              <button className="text-[#b794f4] hover:text-[#9f7aea] transition-colors">
                Read more
              </button>
            </div>

            {/* Team Members */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-indigo-400/10 rounded-3xl p-6">
                <h3 className="text-white text-lg mb-2">Constructed By</h3>
                <p className="text-gray-400">Akhilesh, Abhinav</p>
              </div>
              <div className="bg-indigo-400/10 rounded-3xl p-6">
                <h3 className="text-white text-lg mb-2">Volunteer</h3>
                <p className="text-gray-400">Mohit, Geetanjly</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

