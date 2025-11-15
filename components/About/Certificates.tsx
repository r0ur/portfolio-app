import Image from 'next/image'
import Link from 'next/link'
import { certificates } from '@/data/certificates'
export default function Certificates() {
  return (
    <section>
      <div className="flex flex-col gap-6 text-white lg:items-center">
        <p className="text-2xl uppercase font-light">Certificates</p>
        <div className="flex flex-wrap gap-10 lg:flex-nowrap lg:gap-20">
          {certificates.map(({ id, href, issuer, title, date, logo }) => (
            <Link
              key={id}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="group flex max-w-80 flex-col gap-1"
            >
              <Image src={logo} alt={`${issuer} logo`} width={48} height={48} className="size-10" />
              <p className="text-2xl font-medium group-hover:text-accent group-hover:underline mxl:text-2xl">
                {title} <span className="font-light"> by {issuer}</span>
              </p>
              <p className="text-base font-light uppercase">{date}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
