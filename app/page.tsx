import Container from '@/components/Container'
import Background from '@/components/Background'
import Hero from '@/components/Hero'
import WorkGrid from '@/components/Work/WorkGrid'
import AboutSection from '@/components/About/AboutSection'
import ExperienceList from '@/components/About/ExperienceList'

export default function Home() {
  return (
    <main>
      <Container>
        <Hero />
      </Container>

      <section id="work">
        <Container>
          <WorkGrid />
        </Container>
      </section>

      <section id="about">
        <Background>
          <Container>
            <AboutSection />
            <ExperienceList />
          </Container>
        </Background>
      </section>
    </main>
  )
}
