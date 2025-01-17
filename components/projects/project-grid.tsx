import { db } from "@/lib/db/db"
import ProjectCard from "./ProjectCard"
import { projectsTable } from "@/lib/db/schema"

interface Project {
  id: number
  title: string
  image: string
  rating: number
  reviews: number
}

export default async function ProjectGrid() {
  const projects = await db
    .select()
    .from(projectsTable)

  console.log(projects)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {projects.map((project) => (
        <ProjectCard project={project} key={project.name} />
      ))}
    </div>
  )
}

