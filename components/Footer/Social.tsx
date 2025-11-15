'use client'

import Container from '@/components/Container'

const socialLinks = [
  { label: 'Email', href: 'mailto:hola@catarsis.mx' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { label: 'Sixelf', href: 'https://sixelf.com/' },
  { label: 'GitHub', href: 'https://github.com/' },
]

export default function FooterSocial() {
  const year = new Date().getFullYear()

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="relative z-10 px-4 py-12 sm:py-16 lg:py-20" data-footer-social>
      <Container className="flex min-h-screen flex-col justify-end gap-10 text-white">
        <div className="flex flex-col gap-6 text-xs uppercase tracking-[0.2em] lg:flex-row lg:items-center lg:justify-between">
          <p className="text-sm font-light">
            © <span className="tabular-nums">{year}</span>
          </p>
          <nav
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm"
            aria-label="Social media links"
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                className="transition hover:text-accent hover:underline underline-offset-4"
              >
                {link.label} ↗
              </a>
            ))}
          </nav>
          <button
            type="button"
            onClick={handleScrollTop}
            className="text-sm uppercase transition hover:text-accent hover:underline underline-offset-4"
          >
            Scroll to top ↑
          </button>
        </div>
      </Container>
    </div>
  )
}
