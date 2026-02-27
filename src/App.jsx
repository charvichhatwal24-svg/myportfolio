import { useEffect, useRef, useState } from 'react'

function FadeIn({ children }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (el) observer.observe(el)
    return () => { if (el) observer.unobserve(el) }
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
    >
      {children}
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <main className="flex-1">
        <FadeIn><Hero /></FadeIn>
        <FadeIn><About /></FadeIn>
        <FadeIn><Projects /></FadeIn>
        <FadeIn><Skills /></FadeIn>
        <FadeIn><Links /></FadeIn>
        <FadeIn><Contact /></FadeIn>
      </main>
      <FadeIn><Footer /></FadeIn>
    </div>
  )
}

function Hero() {
  return (
    <section className="px-6 py-24 text-center max-w-2xl mx-auto">
      <img
        src="/src/assets/photo.png"
        alt="Charvi Chhatwal"
        className="w-32 h-32 rounded-full object-cover shadow-md mx-auto mb-8"
      />
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

const projects = [
  {
    title: 'Project Title One',
    description: 'Short description of what this project is, what problem it solves, and what technologies or methods were used.',
    href: '#',
  },
  {
    title: 'Project Title Two',
    description: 'Short description of what this project is, what problem it solves, and what technologies or methods were used.',
    href: '#',
  },
  {
    title: 'Project Title Three',
    description: 'Short description of what this project is, what problem it solves, and what technologies or methods were used.',
    href: '#',
  },
  {
    title: 'Project Title Four',
    description: 'Short description of what this project is, what problem it solves, and what technologies or methods were used.',
    href: '#',
  },
]

function Projects() {
  return (
    <section className="px-6 py-16 max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Projects</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map(({ title, description, href }) => (
          <li key={title} className="border border-gray-200 rounded-lg p-5 flex flex-col gap-3 hover:border-gray-400 transition-colors">
            <h3 className="font-semibold text-gray-900">{title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed flex-1">{description}</p>
            <a href={href} className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
              View project →
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

const skills = [
  {
    category: 'Technical',
    items: ['SQL', 'Python', 'Excel', 'Power BI', 'Tableau', 'SAP', 'Data Analysis', 'Process Optimization'],
  },
  {
    category: 'Business',
    items: ['Demand Planning', 'Supply Chain Management', 'Operations Strategy', 'P&L Ownership', 'Team Leadership', 'Cross-functional Collaboration'],
  },
  {
    category: 'Languages',
    items: ['English', 'Hindi'],
  },
]

function Skills() {
  return (
    <section className="px-6 py-16 max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold mb-8">Skills</h2>
      <div className="flex flex-col gap-6">
        {skills.map(({ category, items }) => (
          <div key={category}>
            <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-3">{category}</h3>
            <ul className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <li
                  key={skill}
                  className="px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-700"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
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

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const subject = encodeURIComponent(`Message from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`)
    window.location.href = `mailto:cchhatwal@mba2027.hbs.edu?subject=${subject}&body=${body}`
  }

  const inputClass = 'w-full px-4 py-2 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors'

  return (
    <section className="px-6 py-16 max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Contact Me</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            id="name" name="name" type="text" required
            value={form.name} onChange={handleChange}
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            id="email" name="email" type="email" required
            value={form.email} onChange={handleChange}
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea
            id="message" name="message" required rows={5}
            value={form.message} onChange={handleChange}
            placeholder="Your message..."
            className={`${inputClass} resize-none`}
          />
        </div>
        <button
          type="submit"
          className="self-start px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors"
        >
          Send Message
        </button>
      </form>
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
