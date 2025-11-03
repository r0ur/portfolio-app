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
      <section id="home">
        <Container>
          <Hero />
        </Container>
      </section>

      <section id="work">
        <Container>
          <Grid />
        </Container>
      </section>

      <section id="about">
        <Background>
          <Container>
            <About />
            <hr className="text-tertiary" />
            <Experience />
            <hr className="text-tertiary" />
            <Certificates />
            <hr className="text-tertiary" />
            <Technologies />
          </Container>
        </Background>
      </section>
    </section>
  )
}
