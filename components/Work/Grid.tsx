import WorkCard from './Card'
import { projects } from '@/data/projects'

export default function Grid() {
  return (
    <div>
      <h1 className="uppercase text-primary text-2xl">work</h1>
      <div className="grid gap-6 grid-cols-2 ">
        {projects.map((p) => (
          <WorkCard
            key={p.slug}
            href={`/work/${p.slug}`}
            title={p.title}
            subtitle={p.subtitle}
            src={p.cover}
          />
        ))}
      </div>
    </div>
  )
}
