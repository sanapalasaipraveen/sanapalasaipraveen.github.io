import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Database, Cpu, Cloud, ArrowRight, Zap, Shield, GitBranch } from 'lucide-react'

type CaseStudy = {
  id: string
  title: string
  subtitle: string
  overview: string
  color: string
  border: string
  components: { layer: string; items: string[]; color: string }[]
  dataFlow: string[]
  scaling: { title: string; points: string[] }[]
  patterns: { name: string; desc: string; icon: typeof Database }[]
}

const caseStudies: CaseStudy[] = [
  {
    id: 'multi-agent',
    title: 'Multi-Agent AI Orchestration',
    subtitle: 'LangGraph + Temporal + FastAPI',
    overview:
      'A production multi-tenant AI platform where agents are defined via JSON config, orchestrated via LangGraph state machines, and executed durably via Temporal workflows. Real-time streaming via WebSockets + SSE.',
    color: 'text-emerald-400',
    border: 'border-emerald-400/20',
    components: [
      {
        layer: 'API Layer',
        items: ['FastAPI Gateway', 'WebSocket Handler', 'SSE Stream Endpoint', 'JWT Auth Middleware'],
        color: 'border-emerald-400/30 bg-emerald-400/5',
      },
      {
        layer: 'Orchestration Layer',
        items: ['LangGraph State Machine', 'Agent Router', 'Context Manager', 'Tool Dispatcher'],
        color: 'border-sky-400/30 bg-sky-400/5',
      },
      {
        layer: 'Execution Layer',
        items: ['Temporal Workflow Engine', 'Activity Workers', 'Retry + Checkpoint Logic', 'MCP Tool Executor'],
        color: 'border-violet-400/30 bg-violet-400/5',
      },
      {
        layer: 'Data Layer',
        items: ['PostgreSQL (Agent Configs)', 'Redis (Session Cache)', 'JWT Token Store', 'Audit Log'],
        color: 'border-amber-400/30 bg-amber-400/5',
      },
    ],
    dataFlow: [
      'Client sends NL query via WebSocket',
      'FastAPI validates JWT and routes to LangGraph',
      'LangGraph resolves agent, plans multi-step execution',
      'Temporal Activity dispatched with retry + checkpoint',
      'MCP tool selected and executed against external system',
      'SSE streams partial LLM output back to client in real time',
    ],
    scaling: [
      {
        title: 'Horizontal Scaling',
        points: ['Stateless FastAPI behind load balancer', 'Temporal Worker pool scales independently', 'Redis cluster for distributed session'],
      },
      {
        title: 'Fault Tolerance',
        points: ['Temporal automatic retries on transient failures', 'Checkpointing ensures no duplicate agent steps', 'JWT expiry + refresh prevents auth gaps'],
      },
    ],
    patterns: [
      { name: 'Event Streaming', desc: 'WebSocket + SSE for real-time LLM output', icon: Zap },
      { name: 'Durable Execution', desc: 'Temporal for fault-tolerant multi-step agents', icon: GitBranch },
      { name: 'Multi-Tenancy', desc: 'Workspace isolation with JWT + RBAC', icon: Shield },
      { name: 'Dynamic Discovery', desc: 'MCP for plug-in tool integration without hardcoding', icon: Cpu },
    ],
  },
  {
    id: 'aci',
    title: 'Cisco ACI Fabric Automation',
    subtitle: 'ITSM → Celery → APIC Cobra SDK',
    overview:
      'A zero-touch ACI provisioning platform. ITSM change requests trigger webhooks that validate, schedule, and execute Cisco APIC provisioning via Cobra SDK — with full audit trails and ITSM ticket auto-updates.',
    color: 'text-sky-400',
    border: 'border-sky-400/20',
    components: [
      {
        layer: 'Integration Layer',
        items: ['HALO ITSM Webhook Receiver', 'Change Request Validator', 'FastAPI Orchestrator', 'Notification Service'],
        color: 'border-sky-400/30 bg-sky-400/5',
      },
      {
        layer: 'Task Engine',
        items: ['Celery Beat Scheduler', 'ETA-Based Task Routing', 'Retry + Dead Letter Queue', 'Redis Broker'],
        color: 'border-amber-400/30 bg-amber-400/5',
      },
      {
        layer: 'Provisioning Layer',
        items: ['Cisco APIC Cobra SDK', 'Tenant / VRF / EPG Builder', 'Contract Configurator', 'Firmware Updater'],
        color: 'border-violet-400/30 bg-violet-400/5',
      },
      {
        layer: 'Audit Layer',
        items: ['YAML State Tracker', 'Payload Capture Log', 'Compliance Report Generator', 'ITSM Ticket Updater'],
        color: 'border-emerald-400/30 bg-emerald-400/5',
      },
    ],
    dataFlow: [
      'HALO ITSM creates change request with ACI payload',
      'Webhook triggers FastAPI; request is validated',
      'Celery task queued with ETA-based scheduling via Redis',
      'At scheduled time, Cobra SDK provisions APIC fabric',
      'Tenants, VRFs, EPGs, contracts, and L2/L3 configs applied',
      'YAML audit captured; ITSM ticket auto-updated with result',
    ],
    scaling: [
      {
        title: 'Reliability',
        points: ['Celery + Redis ensures at-least-once delivery', 'ETA scheduling prevents concurrent APIC writes', 'Dead letter queue captures failed tasks for review'],
      },
      {
        title: 'Auditability',
        points: ['Every APIC payload captured in YAML before send', 'Full diff stored per change request for rollback', 'Immutable audit log for compliance reporting'],
      },
    ],
    patterns: [
      { name: 'Event-Driven', desc: 'ITSM webhooks trigger async provisioning pipeline', icon: Zap },
      { name: 'Async Tasks', desc: 'Celery ETA scheduling for controlled APIC access', icon: Database },
      { name: 'Zero-Touch', desc: 'End-to-end automation without manual steps', icon: Cloud },
      { name: 'Audit-First', desc: 'YAML capture + ITSM updates at every step', icon: Shield },
    ],
  },
]

export function SystemDesign() {
  const [active, setActive] = useState('multi-agent')
  const cs = caseStudies.find((c) => c.id === active)!

  return (
    <section id="system-design" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#05050a] via-[#090914] to-[#05050a]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-400/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="section-tag">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            System Design
          </div>
          <h2 className="section-heading">
            Architecture{' '}
            <span className="gradient-text">Case Studies</span>
          </h2>
          <p className="section-subheading">
            High-level system design for production platforms — scaling strategies, data flow, and reliability patterns.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {caseStudies.map((cs) => (
            <button
              key={cs.id}
              onClick={() => setActive(cs.id)}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium border transition-all duration-200 ${
                active === cs.id
                  ? `${cs.color} bg-current/10 border-current/30`
                  : 'text-slate-500 bg-white/[0.03] border-white/[0.07] hover:text-slate-300 hover:border-white/15'
              }`}
            >
              {cs.title}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
          >
            {/* Overview */}
            <div className={`glass-card border ${cs.border} p-6 mb-6`}>
              <h3 className={`font-display font-bold text-xl ${cs.color} mb-1`}>{cs.title}</h3>
              <p className={`font-mono text-xs text-slate-500 mb-4`}>{cs.subtitle}</p>
              <p className="text-slate-400 leading-relaxed">{cs.overview}</p>
            </div>

            {/* Architecture diagram */}
            <div className="glass-card p-6 mb-6">
              <h4 className="font-display font-semibold text-white mb-6 flex items-center gap-2">
                <Cpu className={`w-4 h-4 ${cs.color}`} />
                Architecture Layers
              </h4>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {cs.components.map((comp, i) => (
                  <motion.div
                    key={comp.layer}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.07 }}
                    className={`border ${comp.color} rounded-xl p-4`}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      {i < cs.components.length - 1 && (
                        <span className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10">
                          <ArrowRight className="w-4 h-4 text-slate-600" />
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider mb-3">
                      {comp.layer}
                    </p>
                    <ul className="space-y-1.5">
                      {comp.items.map((item) => (
                        <li key={item} className="text-xs text-slate-400 flex items-center gap-1.5">
                          <div className={`w-1 h-1 rounded-full flex-shrink-0 ${cs.color.replace('text-', 'bg-')}`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              {/* Arrow flow */}
              <div className="hidden lg:flex items-center justify-center gap-2 mt-4 px-4">
                {cs.components.map((comp, i) => (
                  <div key={comp.layer} className="flex items-center gap-2">
                    <div className="text-xs font-mono text-slate-600 text-center">{comp.layer}</div>
                    {i < cs.components.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-slate-700 flex-shrink-0" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Data Flow */}
              <div className="glass-card p-6">
                <h4 className="font-display font-semibold text-white mb-4 flex items-center gap-2">
                  <Zap className={`w-4 h-4 ${cs.color}`} />
                  Request Data Flow
                </h4>
                <ol className="space-y-3">
                  {cs.dataFlow.map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
                      <span className={`flex-shrink-0 w-5 h-5 rounded-full text-xs font-bold flex items-center justify-center ${cs.color} bg-current/10 border border-current/20`}>
                        {i + 1}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Scaling + Patterns */}
              <div className="space-y-6">
                {cs.scaling.map((s) => (
                  <div key={s.title} className="glass-card p-5">
                    <h4 className="font-display font-semibold text-white text-sm mb-3">{s.title}</h4>
                    <ul className="space-y-2">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-xs text-slate-400 leading-relaxed">
                          <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1 ${cs.color.replace('text-', 'bg-')}`} />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                <div className="glass-card p-5">
                  <h4 className="font-display font-semibold text-white text-sm mb-4">Design Patterns</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {cs.patterns.map(({ name, desc, icon: Icon }) => (
                      <div key={name} className={`p-3 rounded-lg border ${cs.border} bg-white/[0.02]`}>
                        <Icon className={`w-3.5 h-3.5 ${cs.color} mb-1.5`} />
                        <div className={`text-xs font-semibold ${cs.color} mb-0.5`}>{name}</div>
                        <div className="text-[11px] text-slate-500 leading-tight">{desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
