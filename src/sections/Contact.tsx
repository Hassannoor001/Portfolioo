import { useState } from 'react';
import { FadeIn } from '../components/ui/FadeIn';

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = encodeURIComponent(`Hi Hassan, this is ${form.name}.\n\nSubject: ${form.subject || 'Inquiry'}\n\n${form.message}`);
    window.open(`https://wa.me/254743723375?text=${text}`, '_blank', 'noopener,noreferrer');
    setSubmitted(true)
  }

  const inputClass =
    'w-full bg-white/[0.03] border border-white/8 rounded px-4 py-3 text-white/80 text-sm placeholder:text-white/25 focus:outline-none focus:border-[#4e7eff]/50 focus:bg-white/[0.05] transition-colors'

  return (
    <section id="contact" className="py-28 border-t border-white/5" aria-labelledby="contact-heading">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <FadeIn>
            <p className="font-mono text-xs text-[#4e7eff] tracking-widest uppercase mb-4">
              07 — Contact
            </p>
            <h2
              id="contact-heading"
              className="font-serif text-4xl sm:text-5xl text-white leading-tight mb-6"
            >
              Have a problem that<br />
              <span className="italic text-[#4e7eff]">software can solve?</span>
            </h2>
            <p className="text-white/50 leading-relaxed mb-8">
              Whether you need enterprise software built, an existing system extended, or a
              technical partner for a product idea — I am interested in practical work that
              makes a real difference.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-white/30 w-16">Phone</span>
                <a href="https://wa.me/254743723375" target="_blank" rel="noopener noreferrer" className="text-[#4e7eff] hover:underline text-sm flex items-center gap-1.5">
                  +254 743723375 (WhatsApp)
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="opacity-70">
                    <path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-white/30 w-16">Email</span>
                <a href="mailto:hn8505341@gmail.com" className="text-white/60 hover:text-white transition-colors text-sm">
                  hn8505341@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-white/30 w-16">GitHub</span>
                <a href="https://github.com/Hassannoor001" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors text-sm">
                  github.com/Hassannoor001
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={120}>
            {submitted ? (
              <div className="flex flex-col items-start justify-center h-64 p-8 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.03]">
                <div className="w-10 h-10 rounded-full bg-emerald-500/15 flex items-center justify-center mb-4">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <path d="M3 9l4 4 8-8" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-white font-medium text-lg mb-2">Message sent</h3>
                <p className="text-white/50 text-sm">Thank you for reaching out. I will be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-white/30 uppercase tracking-widest mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      className={inputClass}
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-white/30 uppercase tracking-widest mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className={inputClass}
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-xs font-mono text-white/30 uppercase tracking-widest mb-2">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      className={inputClass}
                      placeholder="What is this about?"
                      value={form.subject}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-mono text-white/30 uppercase tracking-widest mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className={inputClass + ' resize-none'}
                      placeholder="Describe your project or question..."
                      value={form.message}
                      onChange={handleChange}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 rounded bg-[#4e7eff] text-white text-sm font-medium hover:bg-[#6690ff] transition-colors focus-visible:ring-2 focus-visible:ring-[#4e7eff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c0c0f] flex items-center justify-center gap-2"
                  >
                    Send via WhatsApp
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
