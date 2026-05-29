'use client'

import { useEffect, useRef } from 'react'
import styles from './AboutSection.module.css'

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const els = ref.current?.querySelectorAll('.reveal')
    if (!els) return
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) }
      }),
      { threshold: 0.12 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section className={styles.section} ref={ref} id="about">
      <div className="container">

        {/* Left: text */}
        <div className={`${styles.textCol} reveal`}>
          <p className="section-label">Who We Are</p>
          <h2 className="section-title">A Place Where<br />Every Child Blooms</h2>
          <div className="accent-bar" />
          <div className={styles.body}>
            <p>
              Jokia Pre School was founded on a simple but powerful belief: every child
              deserves a safe, nurturing, and stimulating environment right from the very
              beginning. Nestled in the heart of our community, we have been building
              confident, curious, and kind children — one smile at a time.
            </p>
            <p>
              Our approach is rooted in play-based learning, where children develop social
              skills, creativity, and a love for discovery through structured play,
              storytelling, arts, movement, and exploration.
            </p>
            <p>
              At Jokia, we don't just prepare children for school — we prepare them for life.
            </p>
          </div>
        </div>

        {/* Right: stat cards */}
        <div className={`${styles.statsCol} reveal reveal-delay-2`}>
          <div className={styles.statCard}>
            <span className={styles.statNumber}>3</span>
            <span className={styles.statLabel}>Years of Existence</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statNumber}>10+</span>
            <span className={styles.statLabel}>Honorable Graduates</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statNumber}>5</span>
            <span className={styles.statLabel}>Dedicated Educators</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statNumber}>❤️</span>
            <span className={styles.statLabel}>Built on Love</span>
          </div>
        </div>

      </div>
    </section>
  )
}
