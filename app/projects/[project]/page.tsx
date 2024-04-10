import { IProject } from '@/models'
import { ProjectCardPage } from '@/pgs'

export async function generateStaticParams() {
  const projects = await fetch('https://653e9f129e8bd3be29df9226.mockapi.io/items').then((res) => res.json())

  return projects.map((item: IProject) => ({
    project: item.path
  }))
}

interface Props {
  params: {
    project: string
  }
}

export default function ProjectCard({ params }: Props) {
  return <ProjectCardPage project={params.project} />
}