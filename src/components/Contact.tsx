import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { GitHubIcon } from './GitHubIcon'
import emailjs from '@emailjs/browser'

// ── EmailJS config — replace the 3 values below with yours from emailjs.com ──
const EMAILJS_SERVICE_ID  = 'service_sqgcdla'   // e.g. 'service_abc1234'
const EMAILJS_TEMPLATE_ID = '3gxdg8a'  // e.g. 'template_xyz5678'
const EMAILJS_PUBLIC_KEY  = 'L2U0BaAnmW7snKVTU'   // e.g. 'AbCdEfGhIjKlMnOp'
// ───────────────────────────────────────────────────────────────────

type FormState = { from_name: string; from_email: string; subject: string; message: string }
type Status = 'idle' | 'sending' | 'sent' | 'error'

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [form, setForm] = useState<FormState>({
    from_name: '',
    from_email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current!,
        { publicKey: EMAILJS_PUBLIC_KEY }
      )
      setStatus('sent')
      setForm({ from_name: '', from_email: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch (err: unknown) {
      console.error('EmailJS error:', err)
      setStatus('error')
      setErrorMsg('Failed to send. Please email me directly at saipraveensanapala776@gmail.com')
      setTimeout(() => setStatus('idle'), 6000)
    }
  }

  const inputClass =
    'w-full bg-white/[0.03] border border-white/[0.08] rounded-lg px-4 py-3 text-slate-200 text-sm placeholder-slate-600 focus:outline-none focus:border-sky-400/50 focus:bg-white/[0.05] transition-all duration-200 font-sans'

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#05050a] via-[#090912] to-[#05050a]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-400/20 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <div className="section-tag mx-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            Contact
          </div>
          <h2 className="section-heading">
            Let's{' '}
            <span className="gradient-text">Build Together</span>
          </h2>
          <p className="section-subheading mx-auto text-center">
            Open to SDE-2 / Senior Engineer / AI Engineer roles and conversations about
            distributed systems, AI orchestration, or Cisco ACI automation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass-card p-6 space-y-5">
              <h3 className="font-display font-bold text-white text-lg">Get In Touch</h3>
              {[
                { icon: Mail, label: 'Email', value: 'saipraveensanapala776@gmail.com', href: 'mailto:saipraveensanapala776@gmail.com' },
                { icon: Phone, label: 'Phone', value: '+91 9177563805', href: 'tel:+919177563805' },
                { icon: MapPin, label: 'Location', value: 'Bengaluru, Karnataka, India', href: undefined },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-sky-400/10 border border-sky-400/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-sky-400" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">{label}</div>
                    {href ? (
                      <a href={href} className="text-slate-300 text-sm hover:text-sky-400 transition-colors break-all">
                        {value}
                      </a>
                    ) : (
                      <span className="text-slate-300 text-sm">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="glass-card p-6">
              <h3 className="font-display font-semibold text-white text-sm mb-4">Connect</h3>
              <div className="flex gap-3">
                <a
                  href="https://github.com/saipraveensanapala776"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg border border-white/10 text-slate-400 hover:text-white hover:border-white/25 hover:bg-white/5 transition-all duration-200 text-sm"
                >
                  <GitHubIcon className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/sai-praveen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg border border-sky-400/30 text-sky-400 hover:bg-sky-400/10 hover:border-sky-400/50 transition-all duration-200 text-sm"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="glass-card p-6 border border-emerald-400/15 bg-emerald-400/5">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 text-sm font-medium">Available for Opportunities</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Actively exploring SDE-2, Senior SWE, and AI Engineering roles. Response within 24 hours.
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="glass-card p-8">
              <h3 className="font-display font-bold text-white text-lg mb-6">Send a Message</h3>

              {status === 'sent' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <CheckCircle className="w-14 h-14 text-emerald-400 mb-4" />
                  <h4 className="font-display font-bold text-white text-xl mb-2">Message Sent!</h4>
                  <p className="text-slate-400 text-sm">
                    Thanks for reaching out — I'll reply to{' '}
                    <span className="text-sky-400">{form.from_email || 'you'}</span> within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-slate-500 font-medium mb-1.5">
                        Your Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="from_name"
                        value={form.from_name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-500 font-medium mb-1.5">
                        Your Email <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="from_email"
                        value={form.from_email}
                        onChange={handleChange}
                        required
                        placeholder="you@company.com"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-500 font-medium mb-1.5">
                      Subject <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      placeholder="Job opportunity / Collaboration / Say hi"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-500 font-medium mb-1.5">
                      Message <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell me about the role, project, or opportunity..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-start gap-2.5 p-3 rounded-lg bg-rose-400/10 border border-rose-400/20"
                    >
                      <AlertCircle className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                      <p className="text-rose-300 text-sm">{errorMsg}</p>
                    </motion.div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={status === 'sending'}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-primary justify-center py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-slate-900/30 border-t-slate-900 rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
