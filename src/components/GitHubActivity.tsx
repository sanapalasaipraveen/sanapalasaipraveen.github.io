import { motion } from 'framer-motion'
import { Github, GitCommit, GitPullRequest, Star, Code2 } from 'lucide-react'

function generateHeatmap() {
  const weeks = 52
  const days = 7
  const cells: { count: number; week: number; day: number }[] = []

  for (let w = 0; w < weeks; w++) {
    for (let d = 0; d < days; d++) {
      const isWeekend = d === 0 || d === 6
      const rand = Math.random()
      let count = 0
      if (rand > 0.55) count = Math.floor(Math.random() * 3) + 1
      if (rand > 0.75 && !isWeekend) count = Math.floor(Math.random() * 5) + 3
      if (rand > 0.92 && !isWeekend) count = Math.floor(Math.random() * 8) + 6
      cells.push({ count, week: w, day: d })
    }
  }
  return cells
}

const heatmap = generateHeatmap()

function cellColor(count: number): string {
  if (count === 0) return 'bg-white/[0.04]'
  if (count <= 2) return 'bg-sky-400/20'
  if (count <= 5) return 'bg-sky-400/45'
  if (count <= 8) return 'bg-sky-400/70'
  return 'bg-sky-400'
}

const stats = [
  { icon: GitCommit, label: 'Contributions', value: '1,200+', color: 'text-sky-400' },
  { icon: GitPullRequest, label: 'Pull Requests', value: '140+', color: 'text-violet-400' },
  { icon: Star, label: 'Repositories', value: '20+', color: 'text-amber-400' },
  { icon: Code2, label: 'Languages', value: '8+', color: 'text-emerald-400' },
]

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const days = ['', 'Mon', '', 'Wed', '', 'Fri', '']

export function GitHubActivity() {
  const totalContributions = heatmap.reduce((sum, c) => sum + c.count, 0)

  return (
    <section id="github" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#05050a] via-[#080810] to-[#05050a]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="section-tag">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            GitHub Activity
          </div>
          <h2 className="section-heading">
            Code{' '}
            <span className="gradient-text">Consistency</span>
          </h2>
          <p className="section-subheading">
            Shipping production code daily — backend systems, AI integrations, and infrastructure automation.
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          {stats.map(({ icon: Icon, label, value, color }) => (
            <div key={label} className="glass-card-hover p-5 text-center">
              <Icon className={`w-5 h-5 ${color} mx-auto mb-2`} />
              <div className={`font-display font-bold text-xl ${color}`}>{value}</div>
              <div className="text-xs text-slate-500 mt-0.5">{label}</div>
            </div>
          ))}
        </motion.div>

        {/* Heatmap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Github className="w-4 h-4 text-slate-400" />
              <span className="text-sm text-slate-400 font-medium">
                {totalContributions.toLocaleString()} contributions in the last year
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-600">Less</span>
              {[0, 1, 3, 6, 9].map((count) => (
                <div key={count} className={`w-3 h-3 rounded-sm ${cellColor(count)}`} />
              ))}
              <span className="text-xs text-slate-600">More</span>
            </div>
          </div>

          {/* Month labels */}
          <div className="flex mb-1 pl-8">
            {months.map((m, i) => (
              <div
                key={m}
                className="text-[10px] text-slate-600 font-mono"
                style={{ width: `${(100 / 12)}%` }}
              >
                {i % 2 === 0 ? m : ''}
              </div>
            ))}
          </div>

          {/* Grid */}
          <div className="flex gap-0.5">
            {/* Day labels */}
            <div className="flex flex-col gap-0.5 mr-1 justify-start pt-0">
              {days.map((d, i) => (
                <div key={i} className="text-[10px] text-slate-600 font-mono h-3 flex items-center">
                  {d}
                </div>
              ))}
            </div>

            {/* Columns (weeks) */}
            <div className="flex gap-0.5 overflow-x-auto flex-1">
              {Array.from({ length: 52 }, (_, w) => (
                <div key={w} className="flex flex-col gap-0.5 flex-shrink-0">
                  {Array.from({ length: 7 }, (_, d) => {
                    const cell = heatmap.find((c) => c.week === w && c.day === d)
                    return (
                      <div
                        key={d}
                        title={cell ? `${cell.count} contributions` : ''}
                        className={`w-3 h-3 rounded-sm ${cellColor(cell?.count ?? 0)} transition-opacity hover:opacity-80 cursor-default`}
                      />
                    )
                  })}
                </div>
              ))}
            </div>
          </div>

          <p className="text-xs text-slate-600 mt-4 font-mono">
            * Activity visualization is representative. Connect GitHub API for live data.
          </p>
        </motion.div>

        {/* Language breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 glass-card p-6"
        >
          <h3 className="font-display font-semibold text-white text-sm mb-4">Top Languages</h3>
          <div className="space-y-3">
            {[
              { lang: 'Python', pct: 55, color: 'bg-sky-400' },
              { lang: 'TypeScript / JavaScript', pct: 25, color: 'bg-violet-400' },
              { lang: 'HTML / CSS', pct: 10, color: 'bg-amber-400' },
              { lang: 'SQL / YAML', pct: 10, color: 'bg-emerald-400' },
            ].map(({ lang, pct, color }) => (
              <div key={lang}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-400">{lang}</span>
                  <span className="text-slate-500 font-mono">{pct}%</span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className={`h-full ${color} rounded-full`}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
