import { motion } from 'framer-motion'
import { MapPin, Calendar, GraduationCap, Briefcase, Brain, Layers, Cpu } from 'lucide-react'

const strengths = [
  { icon: Brain, label: 'AI Systems Design', color: 'text-violet-400', bg: 'bg-violet-400/10 border-violet-400/20' },
  { icon: Layers, label: 'Distributed Architecture', color: 'text-sky-400', bg: 'bg-sky-400/10 border-sky-400/20' },
  { icon: Cpu, label: 'Multi-Agent Orchestration', color: 'text-emerald-400', bg: 'bg-emerald-400/10 border-emerald-400/20' },
  { icon: Briefcase, label: 'Full Stack Engineering', color: 'text-amber-400', bg: 'bg-amber-400/10 border-amber-400/20' },
]

const highlights = [
  'Architected production multi-agent AI platform serving enterprise clients',
  'Automated Cisco ACI fabric provisioning via ITSM integration — zero-touch deployment',
  'Reduced API response times by ~30% through advanced ORM optimization',
  'Built MCP-powered AI platform enabling natural language network management',
  'Implemented resumable chunked uploads for 50GB+ qcow2 files on GCP',
]

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#05050a] via-[#080810] to-[#05050a]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="section-tag">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            About Me
          </div>
          <h2 className="section-heading">
            The Engineer Behind<br />
            <span className="gradient-text">the Platform</span>
          </h2>
          <p className="section-subheading">
            4+ years of production experience building AI-powered infrastructure at scale.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left: Bio + Meta */}
          <div className="lg:col-span-3 space-y-6">
            <motion.div
              custom={0}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <p className="text-slate-300 leading-relaxed text-base mb-6">
                I'm a Full Stack Developer and AI Systems Engineer at{' '}
                <span className="text-sky-400 font-medium">Criterion Networks</span>, where I've spent
                the past 4 years building production-grade platforms at the intersection of backend
                engineering and artificial intelligence.
              </p>
              <p className="text-slate-400 leading-relaxed text-base mb-6">
                My work spans multi-agent AI orchestration with LangGraph and Temporal, Cisco ACI fabric
                automation, MCP-powered network management, and cloud-native infrastructure on AWS and GCP.
                I thrive in complex systems where distributed computing meets intelligent automation.
              </p>
              <p className="text-slate-400 leading-relaxed text-base">
                I graduated with a B.Tech from NIT Tadepalligudem and have been building meaningful
                production systems ever since — from zero-touch ACI deployments to LLM-driven
                multi-tenant agent platforms.
              </p>
            </motion.div>

            {/* Meta info */}
            <motion.div
              custom={1}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-card p-6 grid sm:grid-cols-2 gap-5"
            >
              {[
                { icon: MapPin, label: 'Location', value: 'Bengaluru, Karnataka' },
                { icon: Briefcase, label: 'Current Role', value: 'Full Stack Developer' },
                { icon: Calendar, label: 'Experience', value: '4+ Years (June 2022–Present)' },
                { icon: GraduationCap, label: 'Education', value: 'B.Tech, NIT Tadepalligudem' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-400/10 border border-sky-400/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-3.5 h-3.5 text-sky-400" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">{label}</div>
                    <div className="text-slate-200 text-sm font-medium mt-0.5">{value}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Strengths + Highlights */}
          <div className="lg:col-span-2 space-y-6">
            {/* Core Strengths */}
            <motion.div
              custom={2}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-card p-6"
            >
              <h3 className="font-display font-bold text-white text-lg mb-5">Core Strengths</h3>
              <div className="grid grid-cols-2 gap-3">
                {strengths.map(({ icon: Icon, label, color, bg }) => (
                  <div key={label} className={`flex items-center gap-2.5 border ${bg} rounded-lg p-3`}>
                    <Icon className={`w-4 h-4 ${color} flex-shrink-0`} />
                    <span className="text-slate-300 text-xs font-medium leading-tight">{label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Career Highlights */}
            <motion.div
              custom={3}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-card p-6"
            >
              <h3 className="font-display font-bold text-white text-lg mb-5">Career Highlights</h3>
              <ul className="space-y-3">
                {highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-400 leading-relaxed">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-400 flex-shrink-0 mt-1.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
