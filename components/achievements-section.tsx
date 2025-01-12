import { Card } from "@/components/ui/card"

interface Achievement {
  year: string
  title: string
  image: string
}

const achievements: Achievement[] = [
  {
    year: "Nimbus 2k16",
    title: "Best Publicity Team in Nimbus",
    image: "/placeholder.svg?height=400&width=600"
  },
  {
    year: "Nimbus 2k17",
    title: "Best Event in Nimbus 2k17",
    image: "/placeholder.svg?height=400&width=600"
  },
  {
    year: "Nimbus 2k18",
    title: "Best Innovative Team Nimbus",
    image: "/placeholder.svg?height=400&width=600"
  }
]

export default function AchievementsSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-yellow-900/20" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-purple-500/5 backdrop-blur-3xl" />
        {/* Animated shapes */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-400/10 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-yellow-400/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Past <span className="text-purple-500">Achievement</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement) => (
            <Card key={achievement.year} className="group relative overflow-hidden rounded-3xl border-0">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40 group-hover:from-black/90 group-hover:to-black/50 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="relative p-8 min-h-[300px] flex flex-col justify-end text-white">
                <h3 className="text-purple-400 text-xl mb-3 font-semibold">
                  {achievement.year}
                </h3>
                <p className="text-2xl font-bold leading-tight group-hover:text-purple-300 transition-colors">
                  {achievement.title}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 border-2 border-purple-500/0 group-hover:border-purple-500/50 rounded-3xl transition-colors duration-300" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

