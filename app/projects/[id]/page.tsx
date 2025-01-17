
import Image from 'next/image'
import { Star } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/input'
import { Card } from "@/components/ui/card"
import image from "../../../public/achievement.jpg"
import { db } from '@/lib/db/db'
import { projectsTable } from '@/lib/db/schema'
import { eq } from 'drizzle-orm'

type Props = {
  params: Promise<{
    id: string,
  }>
}

export async function generateStaticParams() {
  const projects = await db
    .select()
    .from(projectsTable)

  if (!projects) return []

  return projects.map((data: any) => ({
    id: data.id
  }))
}

export const generateMetadata = async ({
  params,
}: Props) => {
  const { id } = await params
  const data = await db
    .select()
    .from(projectsTable)
    .where(eq(projectsTable.projectId, id))

  if (!data) {
    return {
      title: "Project Not Found",
    };
  }
  return {
    title: data[0].name,
    description: data[0].description,
  };
};

export default async function ProjectDetail({ params }: Props) {
  const { id } = await params
  const data = await db
    .select()
    .from(projectsTable)
    .where(eq(projectsTable.projectId, id))
  const project = data[0]
  console.log(project)
  const reviews = [
    {
      id: 1,
      author: "Rahul Kumar",
      rating: 5,
      comment: "Excellent research on sustainable construction materials. The combination of agro-waste and fly ash shows promising results.",
      date: "2024-01-15"
    },
    {
      id: 2,
      author: "Priya Singh",
      rating: 4,
      comment: "Very innovative approach to eco-friendly construction materials. Would love to see more detailed results.",
      date: "2024-01-14"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-indigo-600/20 to-black">
      <main className="container mx-auto px-6 py-20">
        <div className='min-h-screen flex justify-center items-center'>
          <div>
            {/* Project Title */}
            <h1 className="text-2xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-b from-indigo-200 to-indigo-500 bg-clip-text text-transparent">
              {project.name}
            </h1>

            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20">
              {/* Project Image */}
              <div className="relative h-[500px] rounded-3xl overflow-hidden">
                <Image
                  src={project.image as string}
                  alt="Cementitious Material Project"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Project Details */}
              <div className="space-y-6">
                {/* Proposer Info */}
                <div className="bg-gradient-to-tr from-blue-900/30 via-indigo-900/20 to-purple-900/20 bg-opacity-50 hover:bg-indigo-600/10 duration-300 rounded-3xl p-6">
                  <div className="flex max-md:flex-col-reverse md:items-center justify-between mb-4 max-md:gap-2">
                    <h2 className="text-xl text-white">
                      Proposed By: {" "}
                      <span className="text-[#b794f4]">
                        {project.constructed_by}
                      </span>
                    </h2>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-[#ffd700] text-[#ffd700]" />
                      ))}
                    </div>
                  </div>

                  {/* Project Description */}
                  <p className="text-gray-400 leading-relaxed mb-4">
                    {project.description?.slice(0, 500)}...
                  </p>
                  <button className="text-[#b794f4] hover:text-[#9f7aea] transition-colors">
                    Read more
                  </button>
                </div>

                {/* Team Members */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-tr from-blue-900/30 via-indigo-900/20 to-purple-900/20 bg-opacity-50 hover:bg-indigo-600/10 duration-300 rounded-3xl p-6">
                    <h3 className="text-white text-lg mb-2">
                      Constructed By
                    </h3>
                    <p className="text-gray-400">
                      {project.constructed_by}
                    </p>
                  </div>
                  <div className="bg-gradient-to-tr from-blue-900/30 via-indigo-900/20 to-purple-900/20 bg-opacity-50 hover:bg-indigo-600/10 duration-300 rounded-3xl p-6">
                    <h3 className="text-white text-lg mb-2">
                      Volunteer
                    </h3>
                    <p className="text-gray-400">
                      {project.volunteers}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Review Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#4e54ff] to-[#7c86ff] bg-clip-text text-transparent">
            Project Reviews
          </h2>

          {/* Review Form */}
          <div className='space-y-4 my-12'>
            <Input
              className='bg-gray-500/20 py-2 text-xl placeholder:text-gray-300 border-gray-500 focus:border-gray-300 text-white'
              placeholder='Give a Review'
            />
            <Button className='w-full bg-gradient-to-tr from-indigo-500 via-indigo-800 to-indigo-500 text-xl py-4'>
              SUBMIT
            </Button>
          </div>

          {/* Reviews List */}
          <div className="space-y-6">
            <span className='text-2xl text-white'>Reviews</span>
            {reviews.map((review) => (
              <Card key={review.id} className="bg-white/5 border-none p-6 rounded-3xl">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-white font-medium mb-1">{review.author}</h4>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, index) => (
                        <Star
                          key={index}
                          className={`h-4 w-4 ${index < review.rating
                            ? 'fill-[#ffd700] text-[#ffd700]'
                            : 'fill-none text-gray-400'
                            }`}
                        />
                      ))}
                    </div>
                  </div>
                  <span className="text-sm text-gray-400">
                    {/* {new Date(review.date).toLocaleDateString()} */}
                    1/15/2025
                  </span>
                </div>
                <p className="text-gray-300">{review.comment}</p>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

