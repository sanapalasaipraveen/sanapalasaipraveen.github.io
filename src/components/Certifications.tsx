import { motion } from 'framer-motion'
import { Award, Clock, BookOpen } from 'lucide-react'

const certifications = [
  {
    name: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    status: 'In Progress',
    icon: '☁️',
    color: 'text-amber-400',
    border: 'border-amber-400/20',
    bg: 'bg-amber-400/5',
  },
  {
    name: 'Cisco CCNA',
    issuer: 'Cisco Systems',
    status: 'Planned',
    icon: '🔧',
    color: 'text-sky-400',
    border: 'border-sky-400/20',
    bg: 'bg-sky-400/5',
  },
  {
    name: 'Temporal Certified Developer',
    issuer: 'Temporal Technologies',
    status: 'Planned',
    icon: '⚡',
    color: 'text-violet-400',
    border: 'border-violet-400/20',
    bg: 'bg-violet-400/5',
  },
  {
    name: 'LangChain Academy Certificate',
    issuer: 'LangChain',
    status: 'Completed',
    icon: '🤖',
    color: 'text-emerald-400',
    border: 'border-emerald-400/20',
    bg: 'bg-emerald-400/5',
  },
]

const statusIcon: Record<string, typeof Clock> = {
  'In Progress': Clock,
  Planned: BookOpen,
  Completed: Award,
}

const statusColor: Record<string, string> = {
  'In Progress': 'text-amber-400 bg-amber-400/10 border-amber-400/20',
  Planned: 'text-slate-400 bg-white/5 border-white/10',
  Completed: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
}

export function Certifications() {
  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="section-tag">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            Certifications
          </div>
          <h2 className="section-heading">
            Continuous{' '}
            <span className="gradient-text">Learning</span>
          </h2>
          <p className="section-subheading">
            Staying current with the evolving landscape of AI systems, cloud infrastructure, and network engineering.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certifications.map((cert, i) => {
            const StatusIcon = statusIcon[cert.status]
            return (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                whileHover={{ y: -4 }}
                className={`glass-card border ${cert.border} ${cert.bg} p-6 flex flex-col items-start transition-all duration-300 hover:shadow-lg`}
              >
                <div className="text-3xl mb-4">{cert.icon}</div>
                <h3 className={`font-display font-bold text-sm ${cert.color} mb-1 leading-tight`}>
                  {cert.name}
                </h3>
                <p className="text-slate-500 text-xs mb-4">{cert.issuer}</p>
                <div className={`flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border ${statusColor[cert.status]} mt-auto`}>
                  <StatusIcon className="w-3 h-3" />
                  {cert.status}
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center text-slate-600 text-sm"
        >
          Continuously building towards certifications that validate production expertise in AI, cloud, and networking.
        </motion.p>
      </div>
    </section>
  )
}
