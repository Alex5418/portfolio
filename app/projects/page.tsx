import { Suspense } from 'react'
import ProjectsContent from './ProjectsContent'

export default function ProjectsPage({ searchParams }: { searchParams: { highlight?: string } }) {
  return (
    <Suspense>
      <ProjectsContent highlight={searchParams.highlight} />
    </Suspense>
  )
}
