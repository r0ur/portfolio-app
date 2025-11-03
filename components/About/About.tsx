import { about } from '@/data/about'

export default function About() {
  return (
    <section>
      {about.map((description) => (
        <div key={description.title} className="text-right gap-2 flex-col flex text-white">
          <h1 className="uppercase font-light text-2xl">About</h1>
          <p className="text-3xl font-normal">{description.title}</p>
          <p className="text-3xl font-normal">{description.subtitle}</p>
        </div>
      ))}
    </section>
  )
}
