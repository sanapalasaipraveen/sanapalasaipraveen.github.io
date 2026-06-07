import { motion } from 'framer-motion'
import { Github, ExternalLink, Star } from 'lucide-react'

type Project = {
  title: string
  subtitle: string
  description: string
  featured: boolean
  tags: string[]
  github?: string
  demo?: string
  color: string
  border: string
  glow: string
  badge?: string
}

const projects: Project[] = [
  {
    title: 'Agentic AI Orchestration Platform',
    subtitle: 'Multi-Agent AI System',
    description:
      'Production-grade FastAPI platform enabling dynamic AI agent creation via JSON config. LangGraph orchestration engine with Temporal for fault-tolerant multi-step execution. Multi-tenant JWT auth, WebSocket streaming, and MCP tool integration.',
    featured: true,
    badge: 'Production',
    tags: ['FastAPI', 'LangGraph', 'Temporal', 'WebSockets', 'SSE', 'JWT', 'MCP', 'PostgreSQL', 'Python'],
    color: 'text-emerald-400',
    border: 'border-emerald-400/25',
    glow: 'hover:shadow-emerald-400/10',
  },
  {
    title: 'Cisco ACI Fabric Automation',
    subtitle: 'ITSM-Integrated Orchestrator',
    description:
      'Zero-touch ACI fabric provisioning platform. ITSM webhook → validation → Celery ETA scheduling → APIC Cobra SDK provisioning. Full audit trail with YAML state tracking and automated ticket updates.',
    featured: true,
    badge: 'Production',
    tags: ['FastAPI', 'Celery', 'Redis', 'Cisco APIC', 'Cobra SDK', 'HALO ITSM', 'Python'],
    color: 'text-sky-400',
    border: 'border-sky-400/25',
    glow: 'hover:shadow-sky-400/10',
  },
  {
    title: 'AI Network Automation (MCP)',
    subtitle: 'LLM-Powered Network CLI',
    description:
      'MCP server integrating Netmiko/Paramiko for Cisco IOS/NX-OS management via SSH. LLM client translates natural language into network operations with YAML-based device discovery and conversational memory.',
    featured: false,
    tags: ['Python', 'MCP', 'Netmiko', 'Paramiko', 'LLM', 'Cisco IOS', 'NX-OS'],
    color: 'text-violet-400',
    border: 'border-violet-400/25',
    glow: 'hover:shadow-violet-400/10',
  },
  {
    title: 'Network Device Onboarding',
    subtitle: 'Cloud-Native File Platform',
    description:
      'Automated device onboarding replacing manual processes. React MUI frontend + Django backend for 50GB+ qcow2 uploads with GCP resumable chunked uploads, cloud storage automation, and device property configuration.',
    featured: false,
    tags: ['React', 'Django', 'GCP', 'Cloud Storage', 'MUI', 'Python'],
    color: 'text-amber-400',
    border: 'border-amber-400/25',
    glow: 'hover:shadow-amber-400/10',
  },
  {
    title: 'ProShop E-Commerce Platform',
    subtitle: 'Personal Project · Full Stack',
    description:
      'Full-stack e-commerce platform with product search, carousel, reviews, cart, and admin dashboard. Django REST Framework API with JWT auth and Redux-managed React frontend.',
    featured: false,
    github: 'https://github.com',
    tags: ['Django', 'DRF', 'React', 'Redux', 'JWT', 'Python', 'PostgreSQL'],
    color: 'text-rose-400',
    border: 'border-rose-400/25',
    glow: 'hover:shadow-rose-400/10',
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="section-tag">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            Featured Projects
          </div>
          <h2 className="section-heading">
            Systems I've{' '}
            <span className="gradient-text">Built & Shipped</span>
          </h2>
          <p className="section-subheading">
            Production-grade platforms — from multi-agent AI orchestration to zero-touch network automation.
          </p>
        </motion.div>

        {/* Featured projects (large cards) */}
        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {projects
            .filter((p) => p.featured)
            .map((proj, i) => (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className={`glass-card border ${proj.border} ${proj.glow} hover:shadow-xl transition-all duration-300 p-6 flex flex-col`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    {proj.badge && (
                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${proj.color} bg-current/10 border border-current/20 mb-2 inline-block`}>
                        {proj.badge}
                      </span>
                    )}
                    <h3 className={`font-display font-bold text-lg ${proj.color}`}>{proj.title}</h3>
                    <p className="text-slate-500 text-xs font-mono mt-0.5">{proj.subtitle}</p>
                  </div>
                  <div className="flex gap-2">
                    {proj.github && (
                      <a href={proj.github} target="_blank" rel="noopener noreferrer" className="social-link w-8 h-8">
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {proj.demo && (
                      <a href={proj.demo} target="_blank" rel="noopener noreferrer" className="social-link w-8 h-8">
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-5">{proj.description}</p>

                <div className="flex flex-wrap gap-1.5">
                  {proj.tags.map((t) => (
                    <span key={t} className="tech-tag text-[11px]">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
        </div>

        {/* Regular projects (smaller cards) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects
            .filter((p) => !p.featured)
            .map((proj, i) => (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -3 }}
                className={`glass-card border ${proj.border} ${proj.glow} hover:shadow-xl transition-all duration-300 p-5 flex flex-col`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <Star className={`w-4 h-4 ${proj.color} mb-2`} />
                    <h3 className={`font-display font-semibold ${proj.color} text-base`}>{proj.title}</h3>
                    <p className="text-slate-500 text-xs font-mono">{proj.subtitle}</p>
                  </div>
                  <div className="flex gap-1.5">
                    {proj.github && (
                      <a href={proj.github} target="_blank" rel="noopener noreferrer" className="social-link w-7 h-7">
                        <Github className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">{proj.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {proj.tags.slice(0, 5).map((t) => (
                    <span key={t} className="tech-tag text-[10px]">{t}</span>
                  ))}
                  {proj.tags.length > 5 && (
                    <span className="tech-tag text-[10px]">+{proj.tags.length - 5}</span>
                  )}
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  )
}
