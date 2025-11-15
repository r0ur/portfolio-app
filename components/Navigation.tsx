import Image from 'next/image'
import Link from 'next/link'
import { ButtonLink } from '@/components/Button'

export default function Navigation() {
  return (
    <nav className="pt-8 mb-20 flex items-center justify-between font-sans text-base font-normal uppercase">
      <Link href="/#home">
        <Image src="/icons/catarsis.svg" width={40} height={40} alt="Catarsis" />
      </Link>
      <div className="flex items-center gap-2">
        <ButtonLink href="/#work" variant="secondary">
          Work
        </ButtonLink>
        <ButtonLink href="/#about" variant="secondary">
          About
        </ButtonLink>
      </div>
      <ButtonLink href="/#contact" variant="primary" className="hidden sm:inline-flex">
        Contact ↗
      </ButtonLink>
    </nav>
  )
}
