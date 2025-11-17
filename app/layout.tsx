import './globals.css'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import FooterSection from '@/components/FooterSection'
import { Inter, Roboto_Mono, Lora } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
})

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
})

export const metadata: Metadata = {
  title: 'Armando Rojano | Product Designer',
  description: 'Product Designer',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable} ${lora.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <FooterSection />
      </body>
    </html>
  )
}
