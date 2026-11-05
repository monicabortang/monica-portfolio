import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowUpRight, Github, Linkedin, Mail, MapPin, Download, Menu, X,
  Code2, Smartphone, Database, Layers, ExternalLink, Sparkles,
  GraduationCap, Award, BriefcaseBusiness, ChevronDown, Sun, Moon, ArrowUp, Send
} from 'lucide-react'

const projects = [
  {
    title: 'Task Scheduler',
    category: 'Fullstack Web App',
    description: 'A task scheduling application designed to help users organize activities through an interactive interface.',
    stack: ['Vue.js', 'Laravel', 'JavaScript'],
    link: 'https://github.com/monicabortang/task-scheduler-fullstack',
    number: '01',
    visual: 'calendar',
    image: '/images/task-scheduler.webp',
  },
  {
    title: 'Weather Tracker',
    category: 'React Web App',
    description: 'A weather application that retrieves and displays dynamic weather information through an external API.',
    stack: ['React.js', 'Axios', 'Bootstrap'],
    link: 'https://github.com/monicabortang/weather-tracker-react',
    number: '02',
    visual: 'weather',
    image: '/images/weather-tracker.webp',
  },
  {
    title: 'Corporate Landing Page',
    category: 'Frontend Development',
    description: 'A responsive corporate landing page with a focus on clean layout, usability, and frontend performance.',
    stack: ['HTML5', 'Tailwind CSS', 'JavaScript'],
    link: 'https://github.com/monicabortang/corporate-landing-page',
    number: '03',
    visual: 'landing',
    image: '/images/corporate-landing.webp',
  },
  {
    title: 'Marketplace UI Prototype',
    category: 'UI Development',
    description: 'A multi-page marketplace interface prototype with product categories and responsive page layouts.',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    link: 'https://github.com/monicabortang/marketplace-ui-prototype',
    number: '04',
    visual: 'market',
    image: '/images/marketplace-ui.webp',
  },
  {
    title: 'Book Lending Application',
    category: 'Mobile & Database Project',
    description: 'An academic application project focused on book, member, and lending-record management with separate frontend and backend components.',
    stack: ['Application Development', 'Database'],
    link: 'https://github.com/GabeSimanjuntak/aplikasi_peminjaman_buku',
    number: '05',
    visual: 'books',
    image: '/images/book-lending.webp',
  },
  {
    title: 'HIMATIF Official Website',
    category: 'Final Project 1 · 2025',
    description: 'A student association website concept for centralizing organizational news, events, and academic information.',
    stack: ['Web Development', 'Team Project'],
    link: 'https://github.com/Hyikyy/PA1_07/tree/master',
    number: '06',
    visual: 'campus',
    image: '/images/himatif-website.webp',
  },
  {
    title: 'Agam Inong Ordering System',
    category: 'Final Project 2 · 2026',
    description: 'A mobile-based restaurant ordering and delivery application developed to simplify menu browsing, food ordering, table reservations, and delivery services.',
    stack: ['Flutter', 'Laravel', 'PostgreSQL', 'REST API'],
    link: '',
    number: '07',
    visual: 'food',
    image: '/images/agam-inong.webp',
  },
]

const skills = [
  { title: 'Frontend Development', icon: Code2, items: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Vue.js', 'Bootstrap', 'Tailwind CSS'] },
  { title: 'Backend & Database', icon: Database, items: ['PHP', 'Laravel', 'Python', 'SQL', 'MySQL', 'PostgreSQL', 'REST API'] },
  { title: 'Mobile & Tools', icon: Smartphone, items: ['Flutter', 'Dart', 'Git', 'GitHub', 'Figma', 'VS Code'] },
  { title: 'Other Skills', icon: Layers, items: ['Responsive Design', 'API Integration', 'UI Implementation', 'Software Testing', 'Agile & Scrum'] },
]

const certifications = [
  ['Generative AI Engineer', 'Coding Camp 2026 powered by DBS Foundation', '2026', '/images/generative-ai-engineer.png'],
  ['AWS AI Academy: Foundation Level', 'Amazon Web Services', '2026', '/images/aws-ai-academy.png'],
  ['Prompt Engineering for Software Developers', 'Dicoding', '2026', '/images/prompt-engineering.png'],
  ['Agentic AI Certified Foundations Associate', 'Oracle University', 'Sep 2026', '/images/cert-oracle-agentic.png'],
  ['Oracle AI Database Certified Foundations Associate', 'Oracle University', 'Sep 2026', '/images/cert-oracle-database.png'],
  ['Building Gen AI Apps with Microsoft Azure', 'Dicoding', '2025', '/images/microsoft-azure.png'],
  ['Cloud & Generative AI Fundamentals', 'Dicoding', '2025', '/images/generative-ai-engineer.png'],
  ['DEL ARTIFICIAL INTELLIGENCE HACHATHON 2026', 'Hackathon', '2026', '/images/hackathon.webp'],
  ['Asisten Matrikulasi dan Gasing', 'IT DEL', '2026', '/images/asmat.webp'],
  ['Best Organization-PMB Promotion 2026', 'IT DEL', '2026', '/images/mpm.webp'],

]

const roles = ['Frontend Development', 'Fullstack Web Apps', 'Mobile with Flutter', 'Generative AI']

function Typed({ words }) {
  const [i, setI] = useState(0)
  const [n, setN] = useState(0)
  const [del, setDel] = useState(false)
  useEffect(() => {
    const w = words[i]
    const t = setTimeout(() => {
      if (!del && n < w.length) setN(n + 1)
      else if (!del) setDel(true)
      else if (n > 0) setN(n - 1)
      else { setDel(false); setI((i + 1) % words.length) }
    }, !del && n === w.length ? 1400 : del ? 35 : 75)
    return () => clearTimeout(t)
  }, [n, del, i, words])
  return <span className="typed">{words[i].slice(0, n)}<i /></span>
}

function Pager({ page, total, onChange }) {
  if (total < 2) return null
  return <div className="pager">
    <button disabled={page === 1} onClick={() => onChange(page - 1)}>« Prev</button>
    {Array.from({ length: total }, (_, k) => <button key={k} className={page === k + 1 ? 'active' : ''} onClick={() => onChange(k + 1)}>{k + 1}</button>)}
    <button disabled={page === total} onClick={() => onChange(page + 1)}>Next »</button>
  </div>
}

function SectionHeading({ eyebrow, title, description }) {
  return <div className="section-heading">
    <span className="eyebrow">{eyebrow}</span>
    <h2>{title}</h2>
    {description && <p>{description}</p>}
  </div>
}


function ParticleBg() {
  const ref = useRef(null)
  useEffect(() => {
    const c = ref.current, x = c.getContext('2d'), pts = [], m = { x: -999, y: -999 }
    let w, h, raf
    const size = () => { w = c.width = c.offsetWidth; h = c.height = c.offsetHeight }
    size()
    for (let i = 0; i < 55; i++) pts.push({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - .5) * .45, vy: (Math.random() - .5) * .45 })
    const mv = e => { const r = c.getBoundingClientRect(); m.x = e.clientX - r.left; m.y = e.clientY - r.top }
    window.addEventListener('mousemove', mv); window.addEventListener('resize', size)
    const line = (a, b, d, max) => { x.strokeStyle = `rgba(63,143,214,${(1 - d / max) * .35})`; x.beginPath(); x.moveTo(a.x, a.y); x.lineTo(b.x, b.y); x.stroke() }
    const draw = () => {
      x.clearRect(0, 0, w, h)
      pts.forEach((p, i) => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1
        x.beginPath(); x.arc(p.x, p.y, 2.2, 0, 7); x.fillStyle = 'rgba(63,143,214,.6)'; x.fill()
        for (let j = i + 1; j < pts.length; j++) { const d = Math.hypot(p.x - pts[j].x, p.y - pts[j].y); if (d < 125) line(p, pts[j], d, 125) }
        const dm = Math.hypot(p.x - m.x, p.y - m.y); if (dm < 170) line(p, m, dm, 170)
      })
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(raf); window.removeEventListener('mousemove', mv); window.removeEventListener('resize', size) }
  }, [])
  return <canvas ref={ref} className="particle-bg" aria-hidden="true" />
}

const dev = n => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${n}/${n}-original.svg`
const techRows = [
  [['HTML5', 'html5'], ['CSS3', 'css3'], ['JavaScript', 'javascript'], ['TypeScript', 'typescript'], ['React', 'react'], ['Vue.js', 'vuejs'], ['Bootstrap', 'bootstrap'], ['Tailwind', 'tailwindcss']],
  [['PHP', 'php'], ['Laravel', 'laravel'], ['Python', 'python'], ['MySQL', 'mysql'], ['PostgreSQL', 'postgresql'], ['Flutter', 'flutter'], ['Git', 'git'], ['Figma', 'figma']],
]

function Marquee({ items, reverse }) {
  return <div className="marquee-mask"><div className={reverse ? 'marquee rev' : 'marquee'}>
    {[...items, ...items, ...items, ...items].map(([name, ico], i) => <div className="tech" key={name + i} title={name}><img src={dev(ico)} alt={name} loading="lazy" /><span>{name}</span></div>)}
  </div></div>
}

function GithubActivity() {
  const years = [2026, 2025, 2024]
  const [year, setYear] = useState(2026)
  const [data, setData] = useState(null)
  const [err, setErr] = useState(false)
  useEffect(() => {
    setData(null); setErr(false)
    fetch(`https://github-contributions-api.jogruber.de/v4/monicabortang?y=${year}`).then(r => r.json()).then(setData).catch(() => setErr(true))
  }, [year])
  const days = data?.contributions || []
  const pad = days.length ? new Date(days[0].date).getDay() : 0
  return <section className="activity section-wrap section-pad" id="activity">
    <SectionHeading eyebrow="OPEN SOURCE HABITS" title="GitHub activity" description="A live look at how consistently I code." />
    <div className="year-tabs">{years.map(y => <button key={y} className={y === year ? 'active' : ''} onClick={() => setYear(y)}>{y}</button>)}</div>
    <div className="heat-card">
      {err ? <p className="heat-msg">Activity could not be loaded right now.</p> : !data ? <p className="heat-msg">Loading contributions…</p> :
        <div className="heat-scroll"><div className="heat-grid">
          {Array.from({ length: pad }, (_, k) => <i key={'p' + k} className="lv lv-empty" />)}
          {days.map(d => <i key={d.date} className={`lv lv${d.level}`} title={`${d.count} contributions · ${d.date}`} />)}
        </div></div>}
      {data && <div className="heat-total"><b>{data.total?.[year] ?? 0}</b> contributions in {year}</div>}
    </div>
  </section>
}

const tilt = e => {
  const el = e.currentTarget.querySelector('.tilt')
  if (!el) return
  const r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5
  el.style.transition = 'transform .12s ease-out'
  el.style.transform = `perspective(900px) rotateY(${x * 9}deg) rotateX(${-y * 9}deg) scale(1.025)`
}
const untilt = e => {
  const el = e.currentTarget.querySelector('.tilt')
  if (el) { el.style.transition = 'transform .5s ease'; el.style.transform = '' }
}

function ProjectVisual({ type, number, image, title }) {
  const labels = {
    calendar: ['MON', 'TUE', 'WED', 'THU', 'FRI'],
    weather: ['☀', '☁', '☂', '☀', '☁'],
    landing: ['ABOUT', 'SERVICES', 'WORK', 'CONTACT'],
    market: ['SHOP', 'STYLE', 'HOME', 'TECH'],
    books: ['BOOKS', 'MEMBERS', 'LOANS'],
    campus: ['CAMPUS', 'NEWS', 'EVENTS'],
    food: ['MENU', 'ORDER', 'DELIVERY'],
  }

  // Tampilkan screenshot asli jika gambar tersedia
  if (image) {
    const isMobilePreview = ['books', 'food'].includes(type)

    return (
      <div
        className={`project-visual project-image-wrap tilt ${
          isMobilePreview ? 'mobile-project-preview' : ''
        }`}
      >
        <img
          src={image}
          alt={`${title} project preview`}
          className="project-image"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />

        <div className="image-overlay">
          <span>PROJECT / {number}</span>
        </div>
      </div>
    )
  }

  // Gunakan visual alternatif jika gambar tidak tersedia
  return (
    <div className={`project-visual visual-${type}`}>
      <div className="visual-top">
        <span className="visual-dot" />
        <span className="visual-dot" />
        <span className="visual-dot" />
        <span className="visual-label">
          PROJECT / {number}
        </span>
      </div>

      <div className="visual-window">
        <div className="visual-sidebar">
          <i />
          <i />
          <i />
          <i />
        </div>

        <div className="visual-content">
          <div className="visual-heading-line" />
          <div className="visual-sub-line" />

          <div className="visual-blocks">
            {(labels[type] || []).map((item, i) => (
              <div className="visual-tile" key={item}>
                <span>{item}</span>
                <b>{String(i + 1).padStart(2, '0')}</b>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [filter, setFilter] = useState('All')
  const [theme, setTheme] = useState('light')
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const [projPage, setProjPage] = useState(1)
  const [lightbox, setLightbox] = useState(null)
  useEffect(() => {
    const k = e => e.key === 'Escape' && setLightbox(null)
    window.addEventListener('keydown', k)
    return () => window.removeEventListener('keydown', k)
  }, [])
  const [certPage, setCertPage] = useState(1)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const sendForm = (e) => {
    e.preventDefault()
    const body = `${form.message}\n\n— ${form.name} (${form.email})`
    window.location.href = `mailto:sitanggangmonica55@gmail.com?subject=${encodeURIComponent('Portfolio message from ' + form.name)}&body=${encodeURIComponent(body)}`
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0
      setScrollProgress(progress)
      setShowBackToTop(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])
  const filters = ['All', 'Web App', 'Frontend', 'Academic']
  const visibleProjects = projects.filter(p => {
    if (filter === 'All') return true
    if (filter === 'Web App') return ['Task Scheduler', 'Weather Tracker'].includes(p.title)
    if (filter === 'Frontend') return ['Corporate Landing Page', 'Marketplace UI Prototype'].includes(p.title)
    return ['Book Lending Application', 'HIMATIF Official Website', 'Agam Inong Ordering System'].includes(p.title)
  })

  const PROJ_PER = 6, CERT_PER = 6
  const projTotal = Math.ceil(visibleProjects.length / PROJ_PER)
  const pagedProjects = visibleProjects.slice((projPage - 1) * PROJ_PER, projPage * PROJ_PER)
  const certTotal = Math.ceil(certifications.length / CERT_PER)
  const pagedCerts = certifications.slice((certPage - 1) * CERT_PER, certPage * CERT_PER)

  const closeMenu = () => setMenuOpen(false)
  return <div className={`portfolio-app theme-${theme}`}>
    <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
    <header className="navbar">
      <a className="brand" href="#home" onClick={closeMenu}>monica<span>.</span></a>
      <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
        {['About', 'Skills', 'Projects', 'Journey', 'Contact'].map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
        <a className="nav-cta" href="/Monica_Sitanggang_CV.pdf" target="_blank" rel="noreferrer">View CV <ArrowUpRight size={15} /></a>
      </nav>
      <button
        className="theme-toggle"
        type="button"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        aria-label={theme === 'light' ? 'Aktifkan dark mode' : 'Aktifkan light mode'}
        title={theme === 'light' ? 'Dark mode' : 'Light mode'}
      >
        {theme === 'light' ? <Moon size={17} /> : <Sun size={17} />}
      </button>
    </header>

    <main>
      <section className="hero section-wrap" id="home">
        <ParticleBg />
        <div className="hero-copy">
          <motion.div className="availability" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5 }}>
            <span className="availability-dot" /> OPEN TO INTERNSHIP OPPORTUNITIES
          </motion.div>
          <motion.p className="hero-intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .1 }}>HELLO, I'M MONICA SITANGGANG</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .15, duration: .6 }}>
            I build digital<br /><span>experiences</span> that<br />feel intuitive.
          </motion.h1>
          <p className="hero-into">I am into <Typed words={roles} /></p>
          <motion.p className="hero-description" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .3 }}>
            Information Technology student at Institut Teknologi Del, passionate about frontend development, web applications, and creating thoughtful user experiences.
          </motion.p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
            <a className="button button-ghost" href="mailto:sitanggangmonica55@gmail.com">Let's talk <Mail size={16} /></a>
          </div>
          <div className="hero-socials">
            <a href="https://github.com/monicabortang" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
            <a href="mailto:sitanggangmonica55@gmail.com" aria-label="Email"><Mail size={18} /></a>
            <span className="social-divider" /> <span>Pematang Siantar, Indonesia</span>
          </div>
        </div>
        <motion.div className="hero-art" initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .7, delay: .2 }}>
          <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
          <div className="portrait-frame">
            <img src="/images/monica-profile.png" alt="Monica Sitanggang portrait" onError={e => { e.currentTarget.style.display = 'none' }} />
            <div className="portrait-fallback"><span>MS</span><small>MONICA SITANGGANG</small></div>
          </div>
          <div className="floating-card card-code"><Code2 size={18} /><span>Frontend<br /><b>Developer</b></span></div>
          <div className="floating-card card-gpa"><Sparkles size={17} /><span><b>3.66 / 4.00</b><small>Current GPA</small></span></div>
          <div className="art-caption">DESIGN · DEVELOP · LEARN</div>
        </motion.div>
        <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE</a>
      </section>

      <section className="about section-wrap section-pad" id="about">
        <SectionHeading eyebrow="A LITTLE INTRODUCTION" title="Curious mind. Practical builder." description="I enjoy turning ideas into useful, accessible, and well-structured digital products." />
        <div className="about-grid">
          <div className="about-main">
            <p className="about-lead">I’m an Information Technology student who loves exploring how technology can solve everyday problems.</p>
            <p>Through academic and collaborative projects, I have worked on responsive interfaces, API integration, database design, and software testing. I also enjoy collaborating with a team, organizing tasks, and learning new tools along the way.</p>
            <p>My current focus is growing as a frontend developer while strengthening my understanding of fullstack and mobile application development.</p>
            <dl className="about-info">
              <div><dt>Email</dt><dd>sitanggangmonica55@gmail.com</dd></div>
              <div><dt>Location</dt><dd>Pematang Siantar, North Sumatra</dd></div>
              <div><dt>Study</dt><dd>D3 Information Technology, IT Del</dd></div>
              <div><dt>Focus</dt><dd>Frontend · Fullstack · Mobile</dd></div>
            </dl>
            <a className="text-link" href="/Monica_Sitanggang_CV.pdf" target="_blank" rel="noreferrer">Read my CV <ArrowUpRight size={16} /></a>
          </div>
          <div className="about-stats">
            <div className="stat-card"><strong>3.66</strong><span>GPA / 4.00</span></div>
            <div className="stat-card"><strong>07</strong><span>Featured projects</span></div>
            <div className="stat-card stat-wide"><strong>2024 — Present</strong><span>Institut Teknologi Del · D3 Information Technology</span></div>
          </div>
        </div>
      </section>

      <section className="skills section-wrap section-pad" id="skills">
        <SectionHeading
          eyebrow="MY TOOLKIT"
          title="Skills & technologies"
          description="The tools and technologies I use to transform ideas into functional digital experiences."
        />

        <div className="skills-grid">
          {skills.map((group, i) => {
            const Icon = group.icon

            return (
              <motion.article
                className="skill-card"
                key={group.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="skill-card-top">
                  <div className="skill-icon">
                    <Icon size={23} />
                  </div>

                  <span className="skill-index">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3>{group.title}</h3>

                <p className="skill-description">
                  {[
                    'Building responsive and accessible interfaces.',
                    'Creating APIs and managing structured data.',
                    'Developing mobile applications and workflows.',
                    'Improving product quality and collaboration.',
                  ][i]}
                </p>

                <div className="skill-tags">
                  {group.items.map(item => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </motion.article>
            )
          })}
        </div>

        <div className="tech-stack">
          <div className="tech-stack-heading">
            <div>
              <span className="eyebrow">TECH STACK</span>
              <h3>Tools I work with</h3>
            </div>

            <span className="tech-stack-count">
              {String(techRows.flat().length).padStart(2, '0')} technologies
            </span>
          </div>

          <div className="tech-stack-grid">
            {techRows.flat().map(([name, ico]) => (
              <div className="tech-stack-item" key={name}>
                <img
                  src={dev(ico)}
                  alt=""
                  loading="lazy"
                />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    

      <section className="projects section-wrap section-pad" id="projects">
        <SectionHeading eyebrow="SELECTED WORK" title="Things I’ve been building." description="A selection of academic and personal projects that reflect my learning journey." />
        <div className="project-toolbar">
          <span>{String(visibleProjects.length).padStart(2, '0')} PROJECTS</span>
          <div className="filter-list">{filters.map(f => <button key={f} className={filter === f ? 'filter active' : 'filter'} onClick={() => { setFilter(f); setProjPage(1) }}>{f}</button>)}</div>
        </div>
        <div className="projects-grid">
          {pagedProjects.map((project, i) => <motion.article className="project-card" onMouseMove={tilt} onMouseLeave={untilt} key={project.title} layout initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .04 }}>
            <ProjectVisual
              type={project.visual}
              number={project.number}
              image={project.image}
              title={project.title}
            />
            <div className="project-info">
              <div className="project-meta"><span>{project.category}</span><span>{project.number}</span></div>
              <h3>{project.title}</h3><p>{project.description}</p>
              <div className="project-stack">{project.stack.map(s => <span key={s}>{s}</span>)}</div>
              <div className="project-actions">
                {project.link ? (
                  <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
                    Explore repository <ExternalLink size={15} />
                  </a>
                ) : (
                  <span className="project-pending">Repository link to be added</span>
                )}
                <button
                  className="project-preview-btn"
                  type="button"
                  onClick={() => setSelectedProject(project)}
                >
                  Quick view <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          </motion.article>)}
        </div>
        <Pager page={projPage} total={projTotal} onChange={(n) => { setProjPage(n); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }} />
        <div className="github-more"><span>More code & experiments</span><a href="https://github.com/monicabortang" target="_blank" rel="noreferrer">Visit my GitHub <ArrowUpRight size={16} /></a></div>
      </section>

      <section className="journey section-wrap section-pad" id="journey">
        <SectionHeading eyebrow="MY BACKGROUND" title="Learning, growing, contributing." description="The experiences and milestones shaping my development journey." />
        <div className="journey-grid">
          <div className="journey-column">
            <div className="journey-label"><GraduationCap size={18} /> EDUCATION</div>
            <div className="timeline-item"><span className="timeline-date">SEP 2024 — PRESENT</span><h3>Institut Teknologi Del</h3><p>Diploma in Information Technology (D3 Teknologi Informasi)</p><span className="timeline-note">GPA: 3.66 / 4.00</span></div>
          </div>
          <div className="journey-column">
            <div className="journey-label"><BriefcaseBusiness size={18} /> LEADERSHIP & EXPERIENCE</div>
            <div className="timeline-item"><span className="timeline-date">2026</span><h3>Student Representative Council (MPM)</h3><p>Active member participating in student representation and campus discussions.</p></div>
            <div className="timeline-item"><span className="timeline-date">2026</span><h3>Matriculation & GASING Assistant</h3><p>Supported new students through academic guidance and mentoring.</p></div>
            <div className="timeline-item"><span className="timeline-date">2025 — 2026</span><h3>Academic Project Team Lead</h3><p>Coordinated project planning, task distribution, and team workflows in software projects.</p></div>
          </div>
        </div>
      </section>

      <section className="certifications section-wrap section-pad" id="certifications">
        <SectionHeading eyebrow="CONTINUOUS LEARNING" title="Certifications & development" description="Learning beyond the classroom and staying curious about emerging technologies." />
        <div className="cert-grid">{pagedCerts.map((c, i) => <motion.article className="cert-card" onMouseMove={tilt} onMouseLeave={untilt} key={c[0]} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .06 }}>
          <div className="cert-card-heading">
            <span className="cert-mark"><Award size={17} /></span>
            <span className="cert-issuer">{c[1]}</span>
            <span className="cert-year">{c[2]}</span>
          </div>
          <div className={`cert-img tilt ${c[3] ? 'has-certificate' : 'certificate-placeholder'}`} onClick={() => c[3] && setLightbox({ src: c[3], alt: c[0] })}>
            {c[3] ? <><img src={c[3]} alt={`${c[0]} certificate`} loading="lazy" /><span className="zoom-hint">View certificate</span></> :
              <div className="cert-placeholder-inner"><span className="placeholder-kicker">LEARNING MILESTONE</span><Award size={34} /><b>{c[1].split(' ').slice(0, 2).join(' ')}</b><small>{c[2]} · TRAINING & DEVELOPMENT</small></div>}
          </div>
          <h3>{c[0]}</h3><p>Professional learning &amp; skills development</p>
        </motion.article>)}</div>
        <Pager page={certPage} total={certTotal} onChange={setCertPage} />
      </section>

      <section className="contact section-wrap" id="contact">
        <div className="contact-inner">
          <span className="eyebrow">HAVE A PROJECT OR OPPORTUNITY?</span>
          <h2>Let’s create something<br /><span>meaningful together.</span></h2>
          <p>I’m open to internship opportunities, collaborative projects, and conversations about technology.</p>
          <a className="button button-light" href="mailto:sitanggangmonica55@gmail.com">Get in touch <ArrowUpRight size={17} /></a>
          <form className="contact-form" onSubmit={sendForm}>
            <input required placeholder="Your name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
            <input required type="email" placeholder="Your email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
            <textarea required rows="4" placeholder="Your message" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
            <button className="button button-light" type="submit">Send message <Send size={16} /></button>
          </form>
          <div className="contact-details">
            <a href="mailto:sitanggangmonica55@gmail.com"><Mail size={16} /> sitanggangmonica55@gmail.com</a>
            <a href="https://github.com/monicabortang" target="_blank" rel="noreferrer"><Github size={16} /> github.com/monicabortang</a>
            <span><MapPin size={16} /> Pematang Siantar, North Sumatra</span>
          </div>
        </div>
      </section>
    </main>

    <footer className="footer-rich section-wrap">
      <div><a className="brand" href="#home">monica<span>.</span></a><p>Thank you for visiting my portfolio. Let’s connect and build something useful together.</p></div>
      <div><h4>Quick links</h4>{['home', 'about', 'skills', 'projects', 'journey', 'contact'].map(l => <a key={l} href={`#${l}`}>{l}</a>)}</div>
      <div><h4>Contact</h4><a href="mailto:sitanggangmonica55@gmail.com">sitanggangmonica55@gmail.com</a><a href="https://github.com/monicabortang" target="_blank" rel="noreferrer">github.com/monicabortang</a><span>Pematang Siantar, North Sumatra</span></div>
      <small>© 2026 Monica Sitanggang. All rights reserved.</small>
    </footer>

    {selectedProject && (
      <div className="project-modal-backdrop" role="presentation" onClick={() => setSelectedProject(null)}>
        <motion.div
          className="project-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          initial={{ opacity: 0, y: 22, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12 }}
          onClick={(event) => event.stopPropagation()}
        >
          <button
            className="modal-close"
            type="button"
            aria-label="Close project details"
            onClick={() => setSelectedProject(null)}
          >
            <X size={19} />
          </button>
          <div className="modal-project-image">
            <ProjectVisual
              type={selectedProject.visual}
              number={selectedProject.number}
              image={selectedProject.image}
              title={selectedProject.title}
            />
          </div>
          <div className="modal-project-content">
            <span className="eyebrow">PROJECT / {selectedProject.number} · {selectedProject.category}</span>
            <h2 id="project-modal-title">{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
            <div className="project-stack">
              {selectedProject.stack.map((item) => <span key={item}>{item}</span>)}
            </div>
            {selectedProject.link && (
              <a className="button button-primary modal-repository" href={selectedProject.link} target="_blank" rel="noreferrer">
                View repository <ExternalLink size={15} />
              </a>
            )}
          </div>
        </motion.div>
      </div>
    )}

    {lightbox && <div className="lightbox" role="presentation" onClick={() => setLightbox(null)}>
      <button className="lightbox-close" type="button" aria-label="Close" onClick={() => setLightbox(null)}><X size={20} /></button>
      <motion.img initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} src={lightbox.src} alt={lightbox.alt} onClick={e => e.stopPropagation()} />
      <p>{lightbox.alt}</p>
    </div>}

    <a className="float-mail" href="mailto:sitanggangmonica55@gmail.com" aria-label="Email Monica"><Mail size={22} /></a>

    {showBackToTop && (
      <button
        className="back-to-top"
        type="button"
        aria-label="Kembali ke atas"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ArrowUp size={18} />
      </button>
    )}
  </div>
}

export default App
