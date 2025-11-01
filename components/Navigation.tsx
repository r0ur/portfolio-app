import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
  return (
    <nav className="flex gap-8 text-base items-center justify-between uppercase font-normal font-sans py-8">
      <Image src="/icons/catarsis.svg" width={32} height={32} alt="Catarsis" />
      <div className="flex gap-8 space-between">
        <Link href="/#work">Work</Link>
        <Link href="/#about">About</Link>
      </div>
      <Link className="text-primary" href="/#contact">
        Contact
      </Link>
    </nav>
  )
}
