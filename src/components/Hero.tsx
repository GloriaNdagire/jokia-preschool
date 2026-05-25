'use client'

import { useEffect, useState } from 'react'
import styles from './Hero.module.css'

const slides = [
  {
    headline: 'Welcome to',
    emphasis: 'Jokia Pre School',
    sub: null,
    bg: 'slide1',
  },
  {
    headline: null,
    emphasis: null,
    sub: 'Play, Learn & Grow',
    bg: 'slide2',
  },
  {
    headline: 'Building a child',
    emphasis: 'from the roots',
    sub: null,
    bg: 'slide3',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(c => (c + 1) % slides.length)
    }, 4800)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className={styles.hero} aria-label="Welcome slideshow">

      {/* Background slides */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`${styles.slide} ${styles[s.bg]} ${i === current ? styles.active : ''}`}
          aria-hidden="true"
        />
      ))}

      {/* Layered overlay */}
      <div className={styles.overlay} />
      <div className={styles.overlayGrid} />

      {/* Content */}
      <div className={styles.content}>
        <p className={styles.eyebrow}>Established with love &amp; purpose</p>

        <div className={styles.textStage}>
          {slides.map((s, i) => (
            <div
              key={i}
              className={`${styles.textItem} ${i === current ? styles.textActive : ''}`}
            >
              {s.headline && (
                <h1 className={styles.headline}>
                  {s.headline}
                  {s.emphasis && (
                    <><br /><em className={styles.emphasis}>{s.emphasis}</em></>
                  )}
                </h1>
              )}
              {!s.headline && s.sub && (
                <p className={styles.subline}>{s.sub}</p>
              )}
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className={styles.dots} role="tablist">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-selected={i === current}
              role="tab"
            />
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className={styles.scrollHint} aria-hidden="true">
        <div className={styles.scrollLine} />
        <span>Scroll</span>
      </div>
    </section>
  )
}
