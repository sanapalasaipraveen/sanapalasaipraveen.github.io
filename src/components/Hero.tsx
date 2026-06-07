import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Download, Mail, Github, Linkedin, ArrowDown, Terminal } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'

const stats = [
  { value: 4, suffix: '+', label: 'Years Exp.' },
  { value: 4, suffix: '', label: 'AI Projects' },
  { value: 30, suffix: '%', label: 'Perf. Gains' },
  { value: 10, suffix: '+', label: 'APIs Built' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

function StatCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [ref, inView] = useInView({ triggerOnce: true })
  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      className="glass-card p-4 text-center"
    >
      <div className="font-display text-2xl font-bold text-sky-400">
        {inView ? <CountUp end={value} duration={2} /> : '0'}
        {suffix}
      </div>
      <div className="text-xs text-slate-500 mt-1 font-medium">{label}</div>
    </motion.div>
  )
}

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="orb orb-cyan" />
        <div className="orb orb-violet" />
        <div className="orb orb-emerald" />
        {/* Subtle scanline gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#05050a]/80" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          {/* Terminal badge */}
          <motion.div variants={itemVariants} className="flex items-center gap-2 font-mono text-sm mb-8">
            <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-4 py-2">
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400">~/sai</span>
              <span className="text-slate-600">$</span>
              <span className="text-slate-400">whoami</span>
              <span className="inline-block w-1.5 h-4 bg-sky-400 ml-1 animate-blink" />
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-6xl sm:text-7xl md:text-8xl font-extrabold leading-none mb-5 tracking-tight"
          >
            <span className="bg-gradient-to-br from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Sai{' '}
            </span>
            <span className="bg-gradient-to-r from-sky-400 via-sky-300 to-violet-400 bg-clip-text text-transparent">
              Praveen
            </span>
          </motion.h1>

          {/* Roles typewriter */}
          <motion.div
            variants={itemVariants}
            className="font-mono text-lg md:text-xl text-sky-400/90 mb-6 h-7 flex items-center"
          >
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2200,
                'AI Systems Engineer',
                2200,
                'Backend Architect',
                2200,
                'Multi-Agent AI Builder',
                2200,
              ]}
              repeat={Infinity}
              cursor
            />
          </motion.div>

          {/* Bio */}
          <motion.p
            variants={itemVariants}
            className="text-slate-400 text-base md:text-lg max-w-2xl leading-relaxed mb-10"
          >
            Building scalable backend systems and production-grade AI platforms at{' '}
            <span className="text-slate-300 font-medium">Criterion Networks</span>.
            Specialized in Python, React, and distributed multi-agent AI architectures —
            from LangGraph orchestration to Cisco ACI automation.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-xl mb-10"
          >
            {stats.map((s) => (
              <StatCard key={s.label} {...s} />
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 mb-10"
          >
            <a href="/resume.pdf" download className="btn-primary text-sm">
              <Download className="w-4 h-4" />
              Download Resume
            </a>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary text-sm"
            >
              <Mail className="w-4 h-4" />
              Get In Touch
            </button>
          </motion.div>

          {/* Socials */}
          <motion.div variants={itemVariants} className="flex items-center gap-3">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com/in/sai-praveen" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="mailto:saipraveensanapala776@gmail.com" className="social-link" aria-label="Email">
              <Mail className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-600 hover:text-slate-400 transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-5 h-5" />
      </motion.button>
    </section>
  )
}
