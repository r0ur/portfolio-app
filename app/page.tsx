import Container from '@/components/Container'
import Background from '@/components/Background'
import Hero from '@/components/Hero'
import Grid from '@/components/Work/Grid'
import About from '@/components/About/About'
import Experience from '@/components/About/Experience'
import Certificates from '@/components/About/Certificates'
import Technologies from '@/components/About/Technologies'

export default function Home() {
  return (
    <section>
      <Container>
        <Hero />
        <Grid />
      </Container>
      <Background>
        <Container>
          <About />
          <Experience />
          <Certificates />
          <Technologies />
        </Container>
      </Background>
    </section>
  )
}
