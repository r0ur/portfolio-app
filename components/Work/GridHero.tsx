import Card from './Card'
import { projects } from '@/data/projects'

export default function GridHero() {
  return (
    <section id="work" className="mx-8">
      <h1 className="uppercase text-primary font-light mb-2 text-2xl">Work</h1>
      <div className="grid gap-8 grid-cols-2">
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
