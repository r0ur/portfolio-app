import { hero } from '@/data/hero'

export default function Hero() {
  return (
    <section>
      {hero.map((text) => (
        <div key={text.title}>
          <div>
            <h1 className="text-[32px] text-right">{text.title}</h1>
          </div>
        </div>
      ))}
    </section>
  )
}
