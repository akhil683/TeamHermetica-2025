import { StaticImageData } from "next/image"
import img from "../public/projects/bio.jpeg"

export interface ProjectType {
  title: string,
  description: string,
  image: StaticImageData,
  href: string,
  color: string,
}

export const ProjectsData: ProjectType[] = [
  {
    title: "BioLume Aqua Scape",
    description: "Explore our curretn innovation",
    image: img,
    href: "/biolume-aqua-scape",
    color: "bg-sky-500"
  },
  {
    title: "Bio Brick",
    description: "Explore our curretn innovation",
    image: img,
    href: "/biolume-aqua-scape",
    color: "bg-sky-500"
  },
  {
    title: "BioLume Aqua Scape",
    description: "Explore our curretn innovation",
    image: img,
    href: "/biolume-aqua-scape",
    color: "bg-sky-500"
  },
  {
    title: "BioLume Aqua Scape",
    description: "Explore our curretn innovation",
    image: img,
    href: "/biolume-aqua-scape",
    color: "bg-sky-500"
  },
  {
    title: "BioLume Aqua Scape",
    description: "Explore our curretn innovation",
    image: img,
    href: "/biolume-aqua-scape",
    color: "bg-sky-500"
  },
]
