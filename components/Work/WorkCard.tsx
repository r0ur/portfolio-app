import Image from 'next/image'
import Link from 'next/link'

type Props = {
  href: string
  title: string
  subtitle: string
  src: string
  alt?: string
}

export default function WorkCard({ href, title, subtitle, src, alt }: Props) {
  return (
    <Link href={href} className="block">
      <div className="relative aspect-16/10">
        <Image src={src} alt={alt ?? title} fill className="object-cover" />
      </div>
      <div className="uppercase items-center pt-2 justify-between flex text-sm font-medium">
        <h3>{title}</h3>
        <h3 className="text-tertiary">{subtitle}</h3>
      </div>
    </Link>
  )
}
