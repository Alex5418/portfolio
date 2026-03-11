import { Suspense } from 'react'
import EducationContent from './EducationContent'

export default function EducationPage({ searchParams }: { searchParams: { highlight?: string } }) {
  return (
    <Suspense>
      <EducationContent initialFilter={searchParams.highlight || 'all'} />
    </Suspense>
  )
}
