import Card from './Card'
import { projects } from '@/data/projects'

export default function Grid() {
  return (
    <section id="work" className="mx-8">
      <div className="grid gap-52 grid-cols-4">
        {projects.map((p) => (
          <Card
            key={p.slug}
            href={`/work/${p.slug}`}
            title={p.title}
            subtitle={p.subtitle}
            src={p.cover}
          />
        ))}
      </div>
    </section>
  )
}
