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
          <h2 className="section-title">Message from our<br />Head Teacher</h2>
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
                <span className={styles.initials}>SJ</span>
                <span className={styles.addPhoto}>Add photo here</span>
              </div>
            </div>

            <div className={styles.nameBlock}>
              <p className={styles.name}>Mrs. Jane</p>
              <p className={styles.title}>Head Teacher, Jokia Pre School</p>
            </div>
          </div>

          {/* RIGHT – Message */}
          <div className={`${styles.messageCol} reveal reveal-delay-2`}>
            <span className={styles.quoteMark}>&ldquo;</span>
            <div className={styles.messageBody}>
              <p>
                Welcome to Jokia Pre School, a place where we see children not as empty
                vessels to be filled, but as seeds full of potential, waiting to be
                nurtured, watered and given sunlight.
              </p>
              <p>
                We believe that early childhood education is about more than just ABCs and 123s; 
                it is about sparking curiosity, building confidence and learning how to be a kind friend. 
                Our dedicated team of educators works hard every day to create a "home away from home" 
                where your little one feels secure enough to take big leaps in their development. 
                We are not merely an institution; we are a second home. A place of warmth, wonder, 
                a sense of belonging.
              </p>
              <p>
                Our dedicated team of educators work tirelessly to ensure that each child at
                Jokia grows at their own pace, is celebrated for their unique gifts and
                leaves us with the confidence to face the world ahead. We partner closely
                with parents, because we know that raising a child truly takes a village 
                not an individual.
              </p>
              <p>
                I invite you to walk this journey with us, to trust us with what is most
                precious to you. Your child&apos;s first steps in education will be taken here,
                and we take that privilege very seriously.
              </p>
              <p>Together, let us build our children and let them grow, learn and play.</p>
            </div>
            <p className={styles.signature}>— Mrs. Jane Namutebi</p>
          </div>
        </div>
      </div>
    </section>
  )
}
