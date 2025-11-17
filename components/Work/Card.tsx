import Image from 'next/image'
import Link from 'next/link'

type Props = {
  href: string
  title: string
  subtitle: string
  src: string
  alt?: string
}

export default function Card({ href, title, subtitle, src, alt }: Props) {
  return (
    <Link href={href} className="block">
      <div className="relative aspect-16/10">
        <Image src={src} alt={alt ?? title} fill className="object-cover" />
      </div>
      <div className="uppercase pt-2 justify-between flex text-sm">
        <h3 className="font-base">{title}</h3>
        <h3 className="font-light text-tertiary">{subtitle}</h3>
      </div>
    </Link>
  )
}
