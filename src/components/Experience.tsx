import { motion } from 'framer-motion'
import { Building2, CalendarDays, TrendingUp, ChevronRight } from 'lucide-react'

const projects = [
  {
    title: 'Agentic AI Orchestration Platform',
    type: 'Multi-Agent AI System',
    color: 'text-emerald-400',
    border: 'border-emerald-400/20',
    bg: 'bg-emerald-400/5',
    icon: '🤖',
    period: '2023–2024',
    highlights: [
      'Built production FastAPI platform for dynamic domain-specific AI agent creation via JSON config',
      'Designed fault-tolerant multi-agent workflow engine using Temporal with retries and checkpointing',
      'Implemented LangGraph orchestration for multi-step execution plans and intelligent agent routing',
      'Real-time AI chat via WebSockets + SSE streaming LLM responses with reduced latency',
      'Multi-tenant JWT architecture with RBAC and workspace-level isolation',
      'Integrated MCP for dynamic tool discovery — agents interact with external systems without hardcoding',
    ],
    metrics: [
      { label: 'Agent Types Supported', value: 'Dynamic' },
      { label: 'Workflow Engine', value: 'Temporal' },
      { label: 'Orchestration', value: 'LangGraph' },
    ],
    tags: ['FastAPI', 'LangGraph', 'Temporal', 'WebSockets', 'SSE', 'JWT', 'MCP', 'PostgreSQL'],
  },
  {
    title: 'Cisco ACI Fabric Automation Platform',
    type: 'ITSM-Integrated Orchestrator',
    color: 'text-sky-400',
    border: 'border-sky-400/20',
    bg: 'bg-sky-400/5',
    icon: '🔧',
    period: '2023',
    highlights: [
      'Production FastAPI platform provisioning Cisco ACI fabric via HALO ITSM change request execution',
      'End-to-end workflow: ITSM webhook → validation → Celery ETA scheduling → APIC provisioning',
      'Cisco APIC Cobra SDK integration for tenants, VRFs, EPGs, contracts, L2/L3, firmware upgrades',
      'YAML-based audit and compliance system with full payload capture for infrastructure traceability',
      'Secure auth (API keys + JWT) with email + ITSM notification integration',
    ],
    metrics: [
      { label: 'Task Engine', value: 'Celery+Redis' },
      { label: 'ITSM', value: 'HALO' },
      { label: 'Deployment', value: 'Zero-Touch' },
    ],
    tags: ['FastAPI', 'Celery', 'Redis', 'Cisco APIC', 'Cobra SDK', 'JWT', 'YAML', 'Python'],
  },
  {
    title: 'AI-Powered Network Automation (MCP)',
    type: 'LLM + SSH Network Platform',
    color: 'text-violet-400',
    border: 'border-violet-400/20',
    bg: 'bg-violet-400/5',
    icon: '🌐',
    period: '2023',
    highlights: [
      'Python MCP server with Netmiko/Paramiko for Cisco IOS/NX-OS device management via SSH',
      'LLM-powered client translating natural language into executable network operations',
      'Dynamic YAML inventory parsing for real-time device discovery and hostname resolution',
      'Conversational context memory enabling session-aware, accurate AI interactions',
    ],
    metrics: [
      { label: 'Protocol', value: 'MCP + SSH' },
      { label: 'Vendors', value: 'Cisco IOS/NX-OS' },
      { label: 'Interface', value: 'Natural Language' },
    ],
    tags: ['Python', 'MCP', 'Netmiko', 'Paramiko', 'LLM', 'YAML', 'SSH'],
  },
  {
    title: 'Automated Network Device Onboarding',
    type: 'Cloud-Native File Platform',
    color: 'text-amber-400',
    border: 'border-amber-400/20',
    bg: 'bg-amber-400/5',
    icon: '☁️',
    period: '2022',
    highlights: [
      'End-to-end automated onboarding replacing manual network device addition workflow',
      'React (MUI) + Django backend for qcow2 file upload/configuration on Google Cloud (up to 50GB)',
      'Resumable chunked uploads via GCP Storage APIs for reliable large file transfers',
      'Cloud storage automation and device property configuration — reduced manual effort significantly',
    ],
    metrics: [
      { label: 'Max File Size', value: '50GB' },
      { label: 'Upload Strategy', value: 'Resumable Chunks' },
      { label: 'Cloud', value: 'GCP Storage' },
    ],
    tags: ['React', 'MUI', 'Django', 'GCP', 'Cloud Storage', 'Python'],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-28 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="section-tag">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            Professional Experience
          </div>
          <h2 className="section-heading">
            4 Years of{' '}
            <span className="gradient-text">Impact</span>
          </h2>
          <p className="section-subheading">
            Building production-grade systems at Criterion Networks — from AI orchestration to infrastructure automation.
          </p>
        </motion.div>

        {/* Company header card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-6 mb-10 flex flex-wrap items-center justify-between gap-4"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-sky-400/10 border border-sky-400/20 flex items-center justify-center">
              <Building2 className="w-6 h-6 text-sky-400" />
            </div>
            <div>
              <h3 className="font-display font-bold text-white text-xl">Criterion Networks</h3>
              <p className="text-slate-400 text-sm">Full Stack Developer · Bengaluru, KA</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <CalendarDays className="w-4 h-4" />
            <span className="font-mono">June 2022 – Present</span>
            <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 font-medium">
              Active
            </span>
          </div>
        </motion.div>

        {/* Projects timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-sky-400/40 via-violet-400/20 to-transparent hidden md:block" />

          <div className="space-y-8">
            {projects.map((proj, i) => (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="md:pl-16 relative"
              >
                {/* Timeline dot */}
                <div className={`absolute left-4 top-6 w-4 h-4 rounded-full border-2 ${proj.border} ${proj.bg} hidden md:flex items-center justify-center -translate-x-1/2`}>
                  <div className={`w-1.5 h-1.5 rounded-full ${proj.color.replace('text-', 'bg-')}`} />
                </div>

                <div className={`glass-card-hover border-l-2 ${proj.border} p-6`}>
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{proj.icon}</span>
                      <div>
                        <h3 className={`font-display font-bold text-lg ${proj.color}`}>{proj.title}</h3>
                        <span className="text-slate-500 text-xs font-mono">{proj.type}</span>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-slate-500 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                      {proj.period}
                    </span>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-5">
                    {proj.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-slate-400 leading-relaxed">
                        <ChevronRight className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${proj.color}`} />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-4 mb-5 py-4 border-y border-white/[0.06]">
                    {proj.metrics.map((m) => (
                      <div key={m.label} className="flex items-center gap-2">
                        <TrendingUp className={`w-3.5 h-3.5 ${proj.color}`} />
                        <span className="text-slate-500 text-xs">{m.label}:</span>
                        <span className={`text-xs font-mono font-semibold ${proj.color}`}>{m.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {proj.tags.map((t) => (
                      <span key={t} className="tech-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key contributions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 glass-card p-6"
        >
          <h3 className="font-display font-bold text-white text-lg mb-5 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-sky-400" />
            Key Contributions & Impact
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { metric: '~30%', desc: 'API response time improvement via ORM optimization' },
              { metric: '~25%', desc: 'Debugging time reduction with AWS CloudWatch monitoring' },
              { metric: '50GB+', desc: 'Reliable large file uploads with GCP resumable chunking' },
              { metric: '10+', desc: 'Backend APIs optimized for performance and payload efficiency' },
              { metric: 'Zero', desc: 'Touch ACI deployments via ITSM-driven automation' },
              { metric: '4', desc: 'Production-grade systems built and deployed end-to-end' },
            ].map((item) => (
              <div key={item.metric} className="flex items-start gap-3 p-4 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                <span className="font-display font-bold text-sky-400 text-xl flex-shrink-0">{item.metric}</span>
                <span className="text-slate-400 text-sm leading-relaxed">{item.desc}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
