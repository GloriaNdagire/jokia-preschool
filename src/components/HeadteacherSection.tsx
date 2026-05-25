'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import styles from './HeadteacherSection.module.css'

export default function HeadteacherSection() {
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
    <section className={styles.section} ref={ref} id="headteacher">
      <div className="container">

        {/* Header */}
        <div className={`${styles.header} reveal`}>
          <p className="section-label">Leadership</p>
          <h2 className="section-title">Message from the<br />Head Teacher</h2>
          <div className="accent-bar" />
        </div>

        <div className={styles.grid}>

          {/* LEFT – Photo + name */}
          <div className={`${styles.photoCol} reveal`}>
            <div className={styles.photoFrame}>
              {/*
                TO USE A REAL PHOTO:
                Replace the placeholder div below with:
                <Image
                  src="/images/headteacher.jpg"
                  alt="Mrs. Grace Namutebi – Head Teacher"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              */}
              <div className={styles.photoPlaceholder}>
                <span className={styles.initials}>GN</span>
                <span className={styles.addPhoto}>Add photo here</span>
              </div>
            </div>

            <div className={styles.nameBlock}>
              <p className={styles.name}>Mrs. Grace Namutebi</p>
              <p className={styles.title}>Head Teacher, Jokia Pre School</p>
            </div>
          </div>

          {/* RIGHT – Message */}
          <div className={`${styles.messageCol} reveal reveal-delay-2`}>
            <span className={styles.quoteMark}>&ldquo;</span>
            <div className={styles.messageBody}>
              <p>
                Welcome to Jokia Pre School — a place where we see children not as empty
                vessels to be filled, but as seeds full of potential, waiting to be
                nurtured, watered, and given sunlight.
              </p>
              <p>
                Every morning when I watch our little ones arrive — with their bright eyes,
                their laughter, and their endless questions — I am reminded of why this
                school exists. We are not merely an institution; we are a second home. A
                place of warmth, wonder, and belonging.
              </p>
              <p>
                Our dedicated team of educators work tirelessly to ensure that each child at
                Jokia grows at their own pace, is celebrated for their unique gifts, and
                leaves us with the confidence to face the world ahead. We partner closely
                with parents, because we know that raising a child truly takes a village.
              </p>
              <p>
                I invite you to walk this journey with us — to trust us with what is most
                precious to you. Your child&apos;s first steps in education will be taken here,
                and we take that privilege very seriously.
              </p>
              <p>Together, let us build our children from the roots.</p>
            </div>
            <p className={styles.signature}>— Mrs. Grace Namutebi</p>
          </div>
        </div>
      </div>
    </section>
  )
}
