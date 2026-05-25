'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import styles from './EventsSection.module.css'

const events = [
  {
    tag: 'Annual Celebration',
    title: 'Cultural Day',
    description:
      'A vibrant celebration of our rich heritage — children dress in traditional attire, perform cultural dances, taste local foods, and proudly share their roots with the school community. A day of colour, pride, and togetherness.',
    emoji: '🎭',
    imageSrc: null, // Replace with: '/images/cultural-day.jpg'
    imageAlt: 'Cultural Day at Jokia Pre School',
    accentColor: '#e8a020',
  },
  {
    tag: 'Annual Celebration',
    title: 'Sports Day',
    description:
      'A day of laughter, cheering, and friendly competition — our little athletes take to the field for races, relays, and team games that build sportsmanship, confidence, and team spirit from the earliest age.',
    emoji: '🏅',
    imageSrc: null, // Replace with: '/images/sports-day.jpg'
    imageAlt: 'Sports Day at Jokia Pre School',
    accentColor: '#2ea855',
  },
]

export default function EventsSection() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const els = ref.current?.querySelectorAll('.reveal')
    if (!els) return
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) }
      }),
      { threshold: 0.1 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section className={styles.section} ref={ref} id="events">
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <p className="section-label">School Life</p>
          <h2 className="section-title">Moments That Shape Our Children</h2>
          <div className="accent-bar" />
        </div>

        <div className={styles.grid}>
          {events.map((ev, i) => (
            <div
              key={ev.title}
              className={`${styles.card} reveal ${i === 1 ? 'reveal-delay-2' : ''}`}
            >
              {/* Photo area */}
              <div className={styles.photoWrap}>
                {ev.imageSrc ? (
                  <Image
                    src={ev.imageSrc}
                    alt={ev.imageAlt}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                ) : (
                  <div
                    className={styles.photoPlaceholder}
                    style={{ background: `linear-gradient(135deg, ${ev.accentColor}33, ${ev.accentColor}88)` }}
                  >
                    <span className={styles.emoji}>{ev.emoji}</span>
                    <span className={styles.addPhoto}>Add photo here</span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div
                className={styles.info}
                style={{ borderTopColor: ev.accentColor }}
              >
                <span className={styles.tag}>{ev.tag}</span>
                <h3 className={styles.title}>{ev.title}</h3>
                <p className={styles.desc}>{ev.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
