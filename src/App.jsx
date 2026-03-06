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

function SectionHeading({ children }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span className="w-6 h-px bg-sky-500" />
      <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
        {children}
      </h2>
    </div>
  )
}

function Nav({ active, setActive }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm border-b border-slate-100">
      <div className="max-w-2xl mx-auto px-6 h-14 flex items-center justify-between">
        <button onClick={() => setActive(null)} className="text-sm font-bold text-slate-900 hover:text-sky-500 transition-colors">
          CC
        </button>
        <div className="flex items-center gap-6">
          {[['Projects', 'projects'], ['Skills', 'skills'], ['Contact', 'contact']].map(([label, id]) => (
            <button
              key={id}
              onClick={() => setActive(id)}
              className={`text-sm font-medium transition-colors ${active === id ? 'text-sky-500' : 'text-slate-500 hover:text-slate-900'}`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

function NextButton({ label, target, setActive }) {
  return (
    <div className="mt-16 flex justify-center">
      <button
        onClick={() => { setActive(target); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
        className="group flex flex-col items-center gap-2 text-slate-400 hover:text-slate-700 transition-colors"
      >
        <span className="text-xs font-semibold uppercase tracking-widest">{label}</span>
        <span className="text-xl group-hover:translate-y-1 transition-transform">↓</span>
      </button>
    </div>
  )
}

export default function App() {
  const [active, setActive] = useState(null)

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <Nav active={active} setActive={setActive} />
      <main className="flex-1 pt-14">
        {active === null && <FadeIn><Landing setActive={setActive} /></FadeIn>}
        {active === 'projects' && <FadeIn><Projects setActive={setActive} /></FadeIn>}
        {active === 'skills' && <FadeIn><Skills setActive={setActive} /></FadeIn>}
        {active === 'contact' && <FadeIn><Contact setActive={setActive} /></FadeIn>}
      </main>
    </div>
  )
}

function Landing({ setActive }) {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-14 max-w-2xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center sm:items-end gap-8 mb-10">
        <div className="shrink-0">
          <img
            src="/photo.png"
            alt="Charvi Chhatwal"
            className="w-32 h-32 sm:w-36 sm:h-36 rounded-full object-cover object-top shadow-md"
          />
        </div>
        <div className="text-center sm:text-left">
          <p className="text-xs font-semibold text-sky-500 uppercase tracking-widest mb-2">Portfolio</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-3">
            Charvi Chhatwal
          </h1>
          <p className="text-base text-slate-500 leading-relaxed">
            MBA Candidate at Harvard Business School
            <span className="mx-2 text-slate-300">·</span>
            Consumer Products Leader
          </p>
          <div className="mt-4 flex flex-wrap justify-center sm:justify-start gap-2">
            {['P&G', 'Tesla', 'Whirlpool'].map((tag) => (
              <span key={tag} className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-slate-900 text-white">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 pt-10">
        <SectionHeading>About Me</SectionHeading>
        <div className="flex flex-col gap-4 text-slate-600 leading-relaxed text-[15px]">
          <p>
            I'm an MBA candidate at Harvard Business School with a track record of launching and
            scaling physical consumer products — from early-stage development to retail shelves.
            I've led go-to-market launches at P&amp;G and Whirlpool, including the Zera Food
            Composter and DermaPlanePro, managing international supply chains, critical path
            schedules, and retail execution to drive millions in sales.
          </p>
          <p>
            My background spans operations, business development, and commercial strategy — with
            hands-on experience working through complex, unstructured problems in fast-moving
            environments. At Tesla, I led vendor negotiations and managed key supplier relationships,
            combining analytical rigor with strong communication to drive outcomes under pressure.
          </p>
          <p>
            I'm passionate about growing and bringing scale to products that improve people's everyday lives.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="https://www.linkedin.com/in/charvi-chhatwal-53652b169/" className="px-4 py-2 rounded-lg bg-slate-900 text-white text-sm font-medium hover:bg-slate-700 transition-colors shadow-sm">LinkedIn →</a>
        </div>
      </div>
      <NextButton label="View Projects" target="projects" setActive={setActive} />
    </section>
  )
}

const projects = [
  {
    title: 'Native x Dunkin\' — Retail Launch & Media Strategy',
    description: 'Analyzed consumption and sales data across retail locations to inform media spend recommendations for the Native x Dunkin\' product launch at Target. Drove promotional strategy that optimized spend allocation and accelerated sell-through at shelf, delivering strong limited-series sales performance.',
    href: 'https://www.tiktok.com/@niylanicoleee/video/7455487826205920542',
    logo: '/Native.png',
  },
  {
    title: 'DermaPlanePro — New Product Launch',
    description: 'Led a cross-functional team to bring P&G\'s first-ever dermaplaning device to market, managing an international supply chain from sourcing to shelf. Owned the end-to-end critical path schedule, coordinating across global teams to hit launch deadlines and achieve strong first-year sales results.',
    href: 'https://www.bizjournals.com/cincinnati/news/2023/03/30/pg-venus-dermaplaning-line.html',
    logo: '/Derma.png',
  },
  {
    title: 'Zera Food Composter — Design Optimization & Product Launch Readiness',
    description: 'Resolved a critical transmission failure risk during early-stage development of Whirlpool\'s Zera Food Composter, ensuring the product was commercially viable and launch-ready. Delivered a solution that enabled successful adoption across thousands of households.',
    href: 'https://wlabsinnovations.com/pages/zera',
    logo: '/Zera.png',
  },
  {
    title: 'Joy Razor — Walmart Exclusive Launch',
    description: 'Reversed a two-year brand decline by leading the end-to-end launch of Joy, a premium razor exclusive to Walmart, delivering a 3% sales uplift and significant incremental revenue. Managed shelf placement, order fulfillment, and SKU conversion across one of the world\'s largest retail environments.',
    href: 'https://www.walmart.com/ip/Joy-Neon-Pink-Razor-for-Women-Shave-Kit-with-1-handle-2-Razor-Blade-Refills-5-bladed/18145707051?classType=REGULAR&athbdg=L1200',
    logo: '/Joy.png',
  },
]

function Projects({ setActive }) {
  return (
    <section className="px-6 py-20 max-w-2xl mx-auto">
      <SectionHeading>Projects</SectionHeading>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map(({ title, description, href, logo }) => (
          <li key={title} className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 flex flex-col gap-2 hover:border-sky-400 hover:shadow-md transition-all duration-200">
            {logo && <img src={logo} alt={title} className="h-32 w-auto object-contain mb-1" />}
            <h3 className="font-semibold text-slate-900 text-sm">{title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed flex-1">{description}</p>
            <a href={href} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-sky-500 hover:text-sky-700 transition-colors mt-1">
              View project →
            </a>
          </li>
        ))}
      </ul>
      <NextButton label="View Skills" target="skills" setActive={setActive} />
    </section>
  )
}

const skills = [
  {
    category: 'Core Skills',
    items: ['Go-to-Market Strategy', 'Consumer Product Launch', 'Supply Chain Management', 'Retail Execution & Inventory Management', 'Business Development & Vendor Negotiations', 'Data Analysis & Insights', 'Demand Planning'],
  },
  {
    category: 'Analytics & Tools',
    items: ['Excel', 'Tableau', 'Power BI'],
  },
  {
    category: 'Ways of Working',
    items: ['Cross-functional Leadership', 'Operating in Unstructured Environments'],
  },
]

function Skills({ setActive }) {
  return (
    <section className="px-6 py-20 max-w-2xl mx-auto">
      <SectionHeading>Core Skills</SectionHeading>
      <div className="flex flex-col gap-6">
        {skills.map(({ category, items }) => (
          <div key={category}>
            <p className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-3">{category}</p>
            <ul className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <li key={skill} className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-medium text-slate-700 shadow-sm hover:border-sky-400 hover:text-sky-700 transition-colors">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <NextButton label="Contact Me" target="contact" setActive={setActive} />
    </section>
  )
}

function Contact({ setActive }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // 'sending' | 'success' | 'error'

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/xjgabqbp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass = 'w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-1 transition-shadow'

  return (
    <section className="px-6 py-20 max-w-2xl mx-auto">
      <SectionHeading>Contact Me</SectionHeading>
      {status === 'success' ? (
        <div className="bg-white border border-slate-200 rounded-xl p-8 text-center shadow-sm">
          <p className="text-slate-900 font-semibold mb-1">Message sent!</p>
          <p className="text-slate-500 text-sm">Thanks for reaching out — I'll get back to you soon.</p>
          <button
            onClick={() => setStatus(null)}
            className="mt-6 px-4 py-2 text-sm font-medium text-sky-500 hover:text-sky-700 transition-colors"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">Name</label>
              <input
                id="name" name="name" type="text" required
                value={form.name} onChange={handleChange}
                placeholder="Your name"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">Email</label>
              <input
                id="email" name="email" type="email" required
                value={form.email} onChange={handleChange}
                placeholder="you@example.com"
                className={inputClass}
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">Message</label>
            <textarea
              id="message" name="message" required rows={5}
              value={form.message} onChange={handleChange}
              placeholder="Your message..."
              className={`${inputClass} resize-none`}
            />
          </div>
          {status === 'error' && (
            <p className="text-sm text-red-500">Something went wrong — please try again or email me directly.</p>
          )}
          <div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="px-6 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-700 transition-colors shadow-sm disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>
          </div>
        </form>
      )}
      <NextButton label="Back to Home" target={null} setActive={setActive} />
    </section>
  )
}

