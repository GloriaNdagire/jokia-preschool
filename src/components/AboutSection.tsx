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
            When we started Jokia, we had one simple goal in mind: to create a space 
            where every single child feels safe, loved and excited to learn from day one. 
            We are proud to be right here in your neighborhood, helping our little ones 
            grow into confident, curious, and kind children, one smile at a time.
          </p>
        <p>
          We believe that at this age, children learn best when they are having fun. 
          That is why our days are packed with art, music, running around and plenty 
          of playtime. Through these activities, your child isn't just playing, they are 
          learning how to share, make friends and think creatively.
        </p>
        <p>
         At Jokia, we do more than just get your child ready for primary school. We give them the best possible start for life.
        </p>
        <p>
         We would love to welcome your family into ours. Please feel free to pass by and see what makes our school so special!
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
