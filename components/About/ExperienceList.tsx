export default function ExperienceList() {
  return (
    <section className="text-white">
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl uppercase">Experience</h3>
          <p className="max-w-[800px] text-[32px] font-regular">
            My curiosity and adaptability have helped me thrive in dynamic environments.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <div className="relative hidden items-center justify-center lg:flex">
              <div className="live-animation h-4 w-4 rounded-full bg-white"></div>
              <div className="pulse-animation absolute h-4 w-4 rounded-full bg-white opacity-50"></div>
            </div>
            <h4 className="text-[32px] font-medium">
              UX Designer
              <span className="font-normal"> at El Puerto de Liverpool</span>
            </h4>
          </div>
          <div className="flex flex-col gap-2  lg:ml-7">
            <p className="max-w-[800px] text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="font-mono text-base">Since February 2025</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <div className="hidden h-4 w-4 shrink-0 rounded-full bg-tertiary lg:inline"></div>
            <h4 className="text-[32px] font-medium">
              UX Designer
              <span className="font-normal"> at Catarsis</span>
            </h4>
          </div>
          <div className="flex flex-col gap-2 lg:ml-7">
            <p className="max-w-prose md:text-lg lg:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="font-mono text-base">Since July 2023</p>
          </div>
        </div>
        <a href="" target="_blank" className="w-fit  lg:ml-7 font-regular text-base">
          <h4 className="hover:underline uppercase">download resume ↓</h4>
        </a>
      </div>
    </section>
  )
}
