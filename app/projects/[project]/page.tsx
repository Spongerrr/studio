import { ProjectCardPage } from '@/pgs'
import { Metadata, ResolvingMetadata } from 'next'

type Props = {
  params: { project: string }
  searchParams: { [key: string]: string | string[] | undefined}
}

export default function ProjectCard({ params }: Props) {
  return <ProjectCardPage project={params.project} />
}