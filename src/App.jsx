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

// Shared layout primitives
function Section({ children }) {
  return (
    <section className="px-6 py-16 max-w-2xl mx-auto border-t border-stone-100">
      {children}
    </section>
  )
}

function SectionHeading({ children }) {
  return (
    <h2 className="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-6">
      {children}
    </h2>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col">
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
    <section className="px-6 pt-24 pb-16 text-center max-w-2xl mx-auto">
      <img
        src="/src/assets/photo.png"
        alt="Charvi Chhatwal"
        className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover object-top mx-auto mb-7 ring-4 ring-white shadow-md"
      />
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-stone-900 mb-3">
        Charvi Chhatwal
      </h1>
      <p className="text-base sm:text-lg text-stone-500 leading-relaxed max-w-md mx-auto">
        MBA Candidate at Harvard Business School
        <span className="mx-2 text-stone-300">·</span>
        Operations &amp; Supply Chain Leader
      </p>
    </section>
  )
}

function About() {
  return (
    <Section>
      <SectionHeading>About Me</SectionHeading>
      <p className="text-stone-600 leading-relaxed text-[15px]">
        I'm an MBA candidate at Harvard Business School with a background in operations,
        supply chain, and demand planning. Previously at Procter &amp; Gamble, I led demand
        planning for Beauty and Health &amp; Wellness categories, managing 10 direct reports
        and driving millions in cost savings and incremental revenue. I hold a degree in
        Industrial and Operations Engineering from the University of Michigan, where I
        graduated Summa Cum Laude as a Stamps Scholar. I'm passionate about using data
        and technology to optimize operations and drive business impact.
      </p>
    </Section>
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
    <Section>
      <SectionHeading>Projects</SectionHeading>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {projects.map(({ title, description, href }) => (
          <li key={title} className="bg-white rounded-xl border border-stone-100 shadow-sm p-5 flex flex-col gap-2 hover:shadow-md transition-shadow duration-200">
            <h3 className="font-semibold text-stone-900 text-sm">{title}</h3>
            <p className="text-sm text-stone-500 leading-relaxed flex-1">{description}</p>
            <a href={href} className="text-xs font-medium text-stone-400 hover:text-stone-700 transition-colors mt-1">
              View project →
            </a>
          </li>
        ))}
      </ul>
    </Section>
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
    <Section>
      <SectionHeading>Skills</SectionHeading>
      <div className="flex flex-col gap-5">
        {skills.map(({ category, items }) => (
          <div key={category}>
            <p className="text-xs font-medium text-stone-400 uppercase tracking-widest mb-2.5">{category}</p>
            <ul className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <li key={skill} className="px-3 py-1 rounded-full bg-white border border-stone-200 text-xs font-medium text-stone-600">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}

function Links() {
  const links = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/charvi-chhatwal-53652b169/' },
    { label: 'GitHub',   href: 'https://github.com/charvichhatwal24-svg' },
    { label: 'Email',    href: 'mailto:cchhatwal@mba2027.hbs.edu' },
  ]

  return (
    <Section>
      <SectionHeading>Links</SectionHeading>
      <ul className="flex flex-col sm:flex-row gap-3">
        {links.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              className="inline-flex items-center gap-1 px-5 py-2.5 rounded-lg bg-white border border-stone-200 text-stone-700 text-sm font-medium shadow-sm hover:border-stone-400 hover:text-stone-900 transition-colors"
            >
              {label} →
            </a>
          </li>
        ))}
      </ul>
    </Section>
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

  const inputClass = 'w-full px-4 py-2.5 bg-white border border-stone-200 rounded-lg text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:ring-offset-1 transition-shadow'

  return (
    <Section>
      <SectionHeading>Contact Me</SectionHeading>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-xs font-medium text-stone-500 mb-1.5 uppercase tracking-wide">Name</label>
            <input
              id="name" name="name" type="text" required
              value={form.name} onChange={handleChange}
              placeholder="Your name"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-xs font-medium text-stone-500 mb-1.5 uppercase tracking-wide">Email</label>
            <input
              id="email" name="email" type="email" required
              value={form.email} onChange={handleChange}
              placeholder="you@example.com"
              className={inputClass}
            />
          </div>
        </div>
        <div>
          <label htmlFor="message" className="block text-xs font-medium text-stone-500 mb-1.5 uppercase tracking-wide">Message</label>
          <textarea
            id="message" name="message" required rows={5}
            value={form.message} onChange={handleChange}
            placeholder="Your message..."
            className={`${inputClass} resize-none`}
          />
        </div>
        <div>
          <button
            type="submit"
            className="px-6 py-2.5 bg-stone-900 text-white text-sm font-medium rounded-lg hover:bg-stone-700 transition-colors"
          >
            Send Message
          </button>
        </div>
      </form>
    </Section>
  )
}

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="px-6 py-8 text-center text-xs text-stone-400 border-t border-stone-100">
      &copy; {year} Charvi Chhatwal
    </footer>
  )
}
