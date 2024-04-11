import { ProjectCardPage } from '@/pgs'
interface Props {
  params: {
    project: string
  }
}

export default function ProjectCard({ params }: Props) {
  return <ProjectCardPage project={params.project} />
}