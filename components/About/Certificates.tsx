export default function Certificates() {
  return (
    <section>
      <div className="flex flex-col gap-6 lg:items-center text-white lg:gap-8 lg:py-6">
        <p className="text-3xl text-accent">Certificates</p>
        <div className="flex flex-wrap gap-10 lg:flex-nowrap lg:gap-20">
          <a
            href="https://www.coursera.org/account/accomplishments/specialization/PP36AF1CLIQL"
            target="_blank"
          >
            <div className="group flex max-w-80 flex-col gap-1">
              <img src="assets/icons/meta-fill.svg" className="size-full h-12 w-12" alt="Google" />
              <p className="text-xl font-medium group-hover:text-accent group-hover:underline mxl:text-2xl">
                Front-End Developer Professional Certificate
                <span className="font-normal">by</span> Meta
              </p>
            </div>
          </a>
          <a
            href="https://www.coursera.org/account/accomplishments/specialization/9ZF83F88L79P"
            target="_blank"
          >
            <div className="group flex max-w-80 flex-col gap-1">
              <img
                src="assets/icons/google-fill.svg"
                className="size-full h-12 w-12"
                alt="Google"
              />
              <p className="text-xl font-medium group-hover:text-accent group-hover:underline mxl:text-2xl">
                UX Design Professional Certificate
                <span className="font-normal">by</span> Google
              </p>
            </div>
          </a>
          <a
            href="https://www.credly.com/badges/c45179d7-b68f-4841-90ec-2e69fd456ff3/public_url"
            target="_blank"
          >
            <div className="group flex max-w-80 flex-col gap-1">
              <div className="h-12 w-12">
                <img
                  src="assets/images/certiprof.png"
                  className="size-full h-10 w-12"
                  alt="CertiProf"
                />
              </div>
              <p className="text-xl font-medium group-hover:text-accent group-hover:underline mxl:text-2xl">
                Design Thinking Professional Certificate
                <span className="font-normal">by</span> CertiProf
              </p>
            </div>
          </a>
          <a
            href="https://www.credly.com/badges/def86223-ec15-4b8b-9fb8-c6908ce22fc8/public_url"
            target="_blank"
          >
            <div className="group flex max-w-80 flex-col gap-1">
              <div className="h-12 w-12">
                <img
                  src="assets/images/certiprof.png"
                  className="size-full h-10 w-12"
                  alt="CertiProf"
                />
              </div>
              <p className="text-xl font-medium group-hover:text-accent group-hover:underline mxl:text-2xl">
                Scrum Foundation Professional Certification
                <span className="font-normal">by</span> CertiProf
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
