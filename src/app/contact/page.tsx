'use client'

import { useState } from 'react'
import Footer from '@/components/Footer'
import styles from './contact.module.css'

/*
  ──────────────────────────────────────────────────────
  HOW TO MAKE THE CONTACT FORM SEND REAL EMAILS (FREE):

  1. Go to https://formspree.io and sign up (free)
  2. Click "New Form" → name it "Jokia Website Contact"
  3. Copy the form endpoint — it looks like:
        https://formspree.io/f/xxxxxxxabc
  4. Replace the FORMSPREE_URL below with your real URL
  5. Done! Every message goes straight to your email inbox ✅

  You don't need to write any backend code.
  Formspree handles everything for free (up to 50 messages/month).
  ──────────────────────────────────────────────────────
*/
const FORMSPREE_URL = 'https://formspree.io/f/mojbyaqk'
//                                              

type FormState = 'idle' | 'sending' | 'success' | 'error'

export default function ContactPage() {
  const [state, setState] = useState<FormState>('idle')
  const [form, setForm] = useState({
    name: '', email: '', phone: '', subject: '', message: '',
  })

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setState('sending')

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setState('success')
        setForm({ name: '', email: '', phone: '', subject: '', message: '' })
      } else {
        setState('error')
      }
    } catch {
      setState('error')
    }
  }

  return (
    <>
      {/* ── Hero ──────────────────────────────────── */}
      <div className={styles.heroBanner}>
        <div className="container">
          <p className={styles.eyebrow}>Reach Out</p>
          <h1 className={styles.heroTitle}>Contact Us</h1>
          <p className={styles.heroSub}>
            We&apos;d love to hear from you. Whether you have a question, want to
            book a visit, or just want to say hello — we&apos;re here.
          </p>
        </div>
      </div>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.grid}>

            {/* ── Left: info ──────────────────────── */}
            <div className={styles.infoCol}>
              <p className="section-label">Find Us</p>
              <h2 className="section-title">We&apos;re just a message away</h2>
              <div className="accent-bar" />

              <div className={styles.infoList}>
                <a href="https://wa.me/256700000000" target="_blank" rel="noopener noreferrer" className={styles.infoItem}>
                  <div className={`${styles.infoIcon} ${styles.green}`}>📍</div>
                  <div>
                    <p className={styles.infoLabel}>Location</p>
                    <p className={styles.infoValue}>Along KabakaNjagala Road,Kampala</p>
                  </div>
                </a>

                <a href="https://wa.me/256700000000" target="_blank" rel="noopener noreferrer" className={styles.infoItem}>
                  <div className={`${styles.infoIcon} ${styles.green}`}>💬</div>
                  <div>
                    <p className={styles.infoLabel}>WhatsApp</p>
                    <p className={styles.infoValue}>+256 753 919 284</p>
                    <p className={styles.infoNote}>Tap to chat with us directly</p>
                  </div>
                </a>

                <a href="mailto:info@jokiapreschool.ac.ug" className={styles.infoItem}>
                  <div className={`${styles.infoIcon} ${styles.blue}`}>✉️</div>
                  <div>
                    <p className={styles.infoLabel}>Email</p>
                    <p className={styles.infoValue}>info@jokiapreschool.ac.ug</p>
                  </div>
                </a>

                <div className={styles.infoItem}>
                  <div className={`${styles.infoIcon} ${styles.orange}`}>🕐</div>
                  <div>
                    <p className={styles.infoLabel}>School Hours</p>
                    <p className={styles.infoValue}>Mon – Fri: 7:00am – 5:00pm</p>
                    <p className={styles.infoNote}>Saturday by appointment only</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Right: form ─────────────────────── */}
            <div className={styles.formWrap}>
              {state === 'success' ? (
                <div className={styles.successBox}>
                  <div className={styles.successIcon}>✅</div>
                  <h3 className={styles.successTitle}>Message Sent!</h3>
                  <p className={styles.successText}>
                    Thank you for reaching out. We&apos;ll get back to you as soon
                    as possible — usually within one school day.
                  </p>
                  <button
                    className={styles.resetBtn}
                    onClick={() => setState('idle')}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit} noValidate>
                  <h3 className={styles.formTitle}>Send us a message</h3>
                  <p className={styles.formSub}>
                    Fill in the form below and we&apos;ll reply to your email.
                  </p>

                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="name">Full Name *</label>
                    <input
                      id="name" name="name" type="text"
                      className={styles.input}
                      placeholder="Your full name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className={styles.row}>
                    <div className={styles.field}>
                      <label className={styles.label} htmlFor="email">Email Address *</label>
                      <input
                        id="email" name="email" type="email"
                        className={styles.input}
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label} htmlFor="phone">Phone / WhatsApp</label>
                      <input
                        id="phone" name="phone" type="tel"
                        className={styles.input}
                        placeholder="+256 7xx xxx xxx"
                        value={form.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="subject">Subject *</label>
                    <select
                      id="subject" name="subject"
                      className={styles.input}
                      value={form.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a subject...</option>
                      <option value="Admission Enquiry">Admission Enquiry</option>
                      <option value="School Fees">School Fees</option>
                      <option value="Events">Events</option>
                      <option value="General Question">General Question</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="message">Message *</label>
                    <textarea
                      id="message" name="message"
                      className={styles.textarea}
                      placeholder="Tell us how we can help you..."
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {state === 'error' && (
                    <p className={styles.errorMsg}>
                      Something went wrong. Please try again or WhatsApp us directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    className={styles.submitBtn}
                    disabled={state === 'sending'}
                  >
                    {state === 'sending' ? 'Sending...' : 'Send Message →'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
