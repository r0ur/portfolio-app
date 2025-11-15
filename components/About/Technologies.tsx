import Image from 'next/image'

import { technologyCategories } from '@/data/technologies'

export default function Technologies() {
  return (
    <section>
      <div className="flex flex-col gap-8 text-white lg:flex-row">
        <div className="flex flex-col gap-2 lg:w-1/3 lg:text-right">
          <p className="text-2xl uppercase font-light">Technologies</p>
          <p className="text-3xl font-medium">
            Tools I&apos;ve used, always eager to learn new tech.
          </p>
        </div>

        <div className="flex flex-1 flex-col gap-10 text-base">
          {technologyCategories.map((category) => (
            <div key={category.id} className="flex flex-col gap-2">
              <p className="text-base font-light uppercase ">{category.title}</p>
              <ul className="flex flex-wrap items-center gap-x-8 gap-y-6">
                {category.items.map((item) => (
                  <li key={item.id} className="flex items-center gap-2">
                    <Image
                      src={item.icon}
                      alt={`${item.name} logo`}
                      width={28}
                      height={28}
                      className="size-6"
                    />
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
