import Card from './Card'
import { projects } from '@/data/projects'

type Props = {
  limit?: number
}

export default function GridHero({ limit = 2 }: Props) {
  const projectList = projects.slice(0, limit)

  return (
    <section id="work" className="mx-8">
      <h1 className="uppercase text-primary font-light mb-2 text-2xl">Work</h1>
      <div className="columns-1 gap-8 2xl:columns-2" style={{ columnGap: '2rem' }}>
        {projectList.map((p) => (
          <div key={p.slug} className="mb-8 break-inside-avoid">
            <Card
              href={`/work/${p.slug}`}
              title={p.title}
              subtitle={p.subtitle}
              src={p.cover}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
