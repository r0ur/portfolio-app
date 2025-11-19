import Card from './Card'
import { projects } from '@/data/projects'

type Props = {
  skip?: number
  limit?: number
}

export default function Grid({ skip = 2, limit }: Props) {
  const projectList = projects.slice(skip, typeof limit === 'number' ? skip + limit : undefined)

  return (
    <section className="mx-8">
      <div
        className="columns-1 gap-10 md:columns-2 lg:columns-3 2xl:columns-4"
        style={{ columnGap: '2.5rem' }}
      >
        {projectList.map((p) => (
          <div key={p.slug} className="mb-10 break-inside-avoid">
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
