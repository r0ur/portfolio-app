import { experience } from '@/data/experience'

export default function Experience() {
  return (
    <section>
      <div className="flex w-fit flex-col text-white gap-16">
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl uppercase font-light">Experience</h3>
          <p className="max-w-[800px] text-3xl font-normal">
            My curiosity and adaptability have helped me thrive in dynamic environments.
          </p>
        </div>

        {experience.map((experience) => (
          <div key={experience.id} className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              {experience.current ? (
                <div className="relative hidden items-center justify-center lg:flex">
                  <div className="live-animation h-4 w-4 rounded-full bg-white"></div>
                  <div className="pulse-animation absolute h-4 w-4 rounded-full bg-white opacity-50"></div>
                </div>
              ) : (
                <div className="hidden h-4 w-4 shrink-0 rounded-full bg-tertiary lg:inline"></div>
              )}
              <h4 className="text-3xl font-medium">
                {experience.role}
                <span className="font-light"> at {experience.company}</span>
              </h4>
            </div>
            <div className="flex flex-col gap-2 lg:ml-7">
              <p className="max-w-prose font-light text-xl">{experience.description}</p>
              <p className="text-xl text-tertiary font-light">{experience.period}</p>
            </div>
          </div>
        ))}

        <a href="" target="_blank" className="w-fit">
          <p className="pl-7 hover:underline text-tertiary uppercase text-base font-normal">
            Download resume ↓
          </p>
        </a>
      </div>
    </section>
  )
}
