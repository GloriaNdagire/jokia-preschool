'use client'

import { useState } from 'react'
import Footer from '@/components/Footer'
import styles from './contact.module.css'

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // TODO: Connect to an email service like Resend, EmailJS, or Formspree
    // For now, just show confirmation
    setSent(true)
  }

  return (
    <>
      <div className={styles.heroBanner}>
        <div className="container">
          <p className="section-label" style={{ color: 'rgba(255,255,255,0.6)' }}>Reach Out</p>
          <h1 className="section-title section-title--white">Contact Us</h1>
        </div>
      </div>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.grid}>

            {/* Left – info */}
            <div className={styles.infoCol}>
              <p className="section-label">Find Us</p>
              <h2 className="section-title">We&apos;d love to<br />hear from you</h2>
              <div className="accent-bar" />

              <div className={styles.infoItems}>
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>📍</div>
                  <div>
                    <p className={styles.infoLabel}>Location</p>
                    <p className={styles.infoValue}>Kampala, Uganda</p>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>📞</div>
                  <div>
                    <p className={styles.infoLabel}>Phone / WhatsApp</p>
                    <p className={styles.infoValue}>+256 700 000 000</p>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>✉️</div>
                  <div>
                    <p className={styles.infoLabel}>Email</p>
                    <p className={styles.infoValue}>info@jokiapreschool.ac.ug</p>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>🕐</div>
                  <div>
                    <p className={styles.infoLabel}>School Hours</p>
                    <p className={styles.infoValue}>Mon – Fri: 7:30am – 4:00pm</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right – form */}
            <div className={styles.formCol}>
              {sent ? (
                <div className={styles.successBox}>
                  <span className={styles.successIcon}>✅</span>
                  <h3 className={styles.successTitle}>Message Received!</h3>
                  <p className={styles.successText}>
                    Thank you for reaching out. We&apos;ll get back to you as soon as possible.
                  </p>
                  <button className={styles.resetBtn} onClick={() => { setSent(false); setForm({ name: '', email: '', phone: '', message: '' }) }}>
                    Send another message
                  </button>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit}>
                  <h3 className={styles.formTitle}>Send us a message</h3>

                  <div className={styles.fieldGroup}>
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
                    <div className={styles.fieldGroup}>
                      <label className={styles.label} htmlFor="email">Email *</label>
                      <input
                        id="email" name="email" type="email"
                        className={styles.input}
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className={styles.fieldGroup}>
                      <label className={styles.label} htmlFor="phone">Phone</label>
                      <input
                        id="phone" name="phone" type="tel"
                        className={styles.input}
                        placeholder="+256 7xx xxx xxx"
                        value={form.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className={styles.fieldGroup}>
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

                  <button type="submit" className={styles.submitBtn}>
                    Send Message →
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
