export default function Footer() {
  return (
    <footer className="w-full h-dvh snap-start snap-always min-h-screen bg-primary flex flex-col items-center justify-center text-white">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-semibold">Let’s work together</h2>
        <p className="text-lg">Get in touch or follow me on social media</p>
        <div className="flex gap-6 justify-center">
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://x.com/" target="_blank" rel="noreferrer">
            X
          </a>
          <a href="https://www.behance.net/" target="_blank" rel="noreferrer">
            Behance
          </a>
        </div>
      </div>
      <p className="mt-10 text-sm text-white/60">© {new Date().getFullYear()} Armando Rojano</p>
    </footer>
  )
}
