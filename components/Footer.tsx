export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 py-10 border-t mt-16 text-sm text-zinc-500">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p>© {new Date().getFullYear()} Armando Rojano</p>
        <div className="flex gap-4">
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
    </footer>
  )
}
