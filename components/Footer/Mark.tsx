import Image from 'next/image'

export default function FooterMark() {
  return (
    <div
      className="pointer-events-none absolute inset-0 select-none"
      aria-hidden="true"
      data-footer-mark
    >
      <Image
        src="/icons/catarsis-footer.svg"
        alt="Catarsis logotype"
        fill
        priority
        sizes="100vw"
        className="object-cover object-bottom opacity-90 scale-[1.15] translate-y-[12%]"
      />
    </div>
  )
}
