import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Zap, Heart } from 'lucide-react'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#system-design', label: 'System Design' },
  { href: '#contact', label: 'Contact' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/[0.06] bg-[#03030a]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-sky-400/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-sky-400/15 border border-sky-400/30 flex items-center justify-center">
                <Zap className="w-4 h-4 text-sky-400" />
              </div>
              <span className="font-display font-bold text-white text-lg tracking-tight">
                Sai Praveen<span className="text-sky-400">.</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
              Full Stack Developer & AI Systems Engineer building production-grade platforms at Criterion Networks.
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="text-slate-500 hover:text-slate-300 text-sm transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com/in/sai-praveen" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="mailto:saipraveensanapala776@gmail.com" className="social-link" aria-label="Email">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs font-mono">
            © {year} Sai Praveen. All rights reserved.
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-600 text-xs flex items-center gap-1.5"
          >
            Built with React + TypeScript + Tailwind CSS
            <Heart className="w-3 h-3 text-rose-500/60" />
          </motion.p>
        </div>
      </div>
    </footer>
  )
}
