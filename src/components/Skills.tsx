import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Skill = { name: string; level: number; tag?: string }
type Category = { id: string; label: string; color: string; bg: string; border: string; skills: Skill[] }

const categories: Category[] = [
  {
    id: 'backend',
    label: 'Backend',
    color: 'text-sky-400',
    bg: 'bg-sky-400/10',
    border: 'border-sky-400/30',
    skills: [
      { name: 'Python', level: 95, tag: 'Expert' },
      { name: 'FastAPI', level: 92, tag: 'Expert' },
      { name: 'Django', level: 90, tag: 'Expert' },
      { name: 'SQLAlchemy', level: 85 },
      { name: 'Flask', level: 82 },
      { name: 'Celery + Redis', level: 88 },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    color: 'text-violet-400',
    bg: 'bg-violet-400/10',
    border: 'border-violet-400/30',
    skills: [
      { name: 'React.js', level: 90, tag: 'Expert' },
      { name: 'TypeScript', level: 84 },
      { name: 'JavaScript (ES2020+)', level: 92 },
      { name: 'HTML / CSS', level: 90 },
      { name: 'Material UI', level: 82 },
      { name: 'WebSockets / SSE', level: 86 },
    ],
  },
  {
    id: 'ai',
    label: 'AI & Agents',
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
    border: 'border-emerald-400/30',
    skills: [
      { name: 'LangGraph', level: 85, tag: 'Advanced' },
      { name: 'LangChain', level: 82 },
      { name: 'MCP (Model Context Protocol)', level: 88, tag: 'Advanced' },
      { name: 'Temporal Workflows', level: 80 },
      { name: 'LLM Integration (OpenAI / Anthropic)', level: 88 },
      { name: 'Multi-Agent Systems', level: 84 },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud & DevOps',
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
    border: 'border-amber-400/30',
    skills: [
      { name: 'AWS (CloudWatch, Lambda, RDS, S3)', level: 82 },
      { name: 'GCP (Cloud Storage, Cloud Run)', level: 78 },
      { name: 'Docker', level: 86 },
      { name: 'CI/CD (Bitbucket Pipelines)', level: 80 },
      { name: 'Linux / Bash', level: 85 },
      { name: 'Netmiko / Paramiko', level: 82 },
    ],
  },
  {
    id: 'data',
    label: 'Databases',
    color: 'text-rose-400',
    bg: 'bg-rose-400/10',
    border: 'border-rose-400/30',
    skills: [
      { name: 'PostgreSQL', level: 88 },
      { name: 'MySQL', level: 84 },
      { name: 'Redis', level: 82 },
      { name: 'ORM Optimization', level: 90, tag: 'Strong' },
    ],
  },
]

function SkillBar({ level, color }: { level: number; color: string }) {
  return (
    <div className="skill-bar mt-2">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className={`h-full rounded-full ${color}`}
      />
    </div>
  )
}

const barColors: Record<string, string> = {
  backend: 'bg-sky-400',
  frontend: 'bg-violet-400',
  ai: 'bg-emerald-400',
  cloud: 'bg-amber-400',
  data: 'bg-rose-400',
}

export function Skills() {
  const [active, setActive] = useState('backend')
  const cat = categories.find((c) => c.id === active)!

  return (
    <section id="skills" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#05050a] via-[#08080f] to-[#05050a]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="section-tag">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            Technical Skills
          </div>
          <h2 className="section-heading">
            Tech Stack &{' '}
            <span className="gradient-text">Proficiency</span>
          </h2>
          <p className="section-subheading">
            Battle-tested across production systems — from FastAPI microservices to LangGraph multi-agent orchestration.
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-200 ${
                active === c.id
                  ? `${c.bg} ${c.border} ${c.color}`
                  : 'bg-white/[0.03] border-white/[0.07] text-slate-500 hover:text-slate-300 hover:border-white/15'
              }`}
            >
              {c.label}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {cat.skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                className="glass-card-hover p-5"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-slate-200 text-sm font-medium">{skill.name}</span>
                  <div className="flex items-center gap-2">
                    {skill.tag && (
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${cat.bg} ${cat.border} border ${cat.color}`}>
                        {skill.tag}
                      </span>
                    )}
                    <span className={`font-mono text-xs font-semibold ${cat.color}`}>{skill.level}%</span>
                  </div>
                </div>
                <SkillBar level={skill.level} color={barColors[active]} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Summary chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 glass-card p-6"
        >
          <p className="text-slate-500 text-xs font-mono uppercase tracking-widest mb-4">All Technologies</p>
          <div className="flex flex-wrap gap-2">
            {categories.flatMap((c) => c.skills).map((s) => (
              <span key={s.name} className="tech-tag">{s.name}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
