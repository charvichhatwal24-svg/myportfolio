export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <main className="flex-1">
        <Hero />
        <About />
        <Links />
      </main>
      <Footer />
    </div>
  )
}

function Hero() {
  return (
    <section className="px-6 py-24 text-center max-w-2xl mx-auto">
      <h1 className="text-5xl font-bold tracking-tight mb-4">Charvi Chhatwal</h1>
      <p className="text-xl text-gray-500">MBA Candidate at Harvard Business School | Operations &amp; Supply Chain Leader</p>
    </section>
  )
}

function About() {
  return (
    <section className="px-6 py-16 max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">About Me</h2>
      <p className="text-gray-600 leading-relaxed">
        I'm an MBA candidate at Harvard Business School with a background in operations,
        supply chain, and demand planning. Previously at Procter &amp; Gamble, I led demand
        planning for Beauty and Health &amp; Wellness categories, managing 10 direct reports
        and driving millions in cost savings and incremental revenue. I hold a degree in
        Industrial and Operations Engineering from the University of Michigan, where I
        graduated Summa Cum Laude as a Stamps Scholar. I'm passionate about using data
        and technology to optimize operations and drive business impact.
      </p>
    </section>
  )
}

function Links() {
  const links = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/charvi-chhatwal-53652b169/' },
    { label: 'GitHub',   href: 'https://github.com/charvichhatwal24-svg' },
    { label: 'Email',    href: 'mailto:cchhatwal@mba2027.hbs.edu' },
  ]

  return (
    <section className="px-6 py-16 max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Links</h2>
      <ul className="flex flex-col sm:flex-row gap-4">
        {links.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              className="inline-block px-6 py-3 rounded-lg border border-gray-200 text-gray-700 hover:border-gray-400 hover:text-gray-900 transition-colors"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="px-6 py-8 text-center text-sm text-gray-400 border-t border-gray-100">
      &copy; {year} Charvi Chhatwal. All rights reserved.
    </footer>
  )
}
