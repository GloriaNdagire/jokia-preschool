import Footer from '@/components/Footer'
import styles from './about.module.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us – Jokia Pre School',
  description:
    'Learn about the mission, vision and values that drive Jokia Pre School — building confident, disciplined, well-rounded children from the roots.',
}

export default function AboutPage() {
  return (
    <>
      {/* ── Hero banner ───────────────────────────── */}
      <div className={styles.heroBanner}>
        <div className="container">
          <p className={styles.eyebrow}>Our Story</p>
          <h1 className={styles.heroTitle}>About Us</h1>
          <p className={styles.heroSub}>
            Getting to know Jokia Pre School — who we are, what we believe,
            and why we do what we do.
          </p>
        </div>
      </div>

      {/* ── Mission ───────────────────────────────── */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.block}>
            <div className={styles.blockIcon}>🎯</div>
            <div className={styles.blockBody}>
              <p className="section-label">Our Mission</p>
              <h2 className="section-title">To Learn, Teach &amp; Reflect</h2>
              <div className="accent-bar" />

              <p className={styles.pullQuote}>
                "To learn and strive to teach — ensuring each child fully understands
                and grows academically and socially."
              </p>

              <p className={styles.bodyText}>
                Reflecting on each and every child at the end of the day is always
                important, to know if learning is actually happening. Every child has
                their potential. Like they always say — the sun and moon both have
                their own time to shine.
              </p>
              <p className={styles.bodyText}>
                Comparison at Jokia is always a deal-breaker. We believe that every
                child can make it in their own way, at their own time — and that is
                why we strive to put an eye on each child, individually, every single
                day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Vision ────────────────────────────────── */}
      <section className={`${styles.section} ${styles.sectionTinted}`}>
        <div className="container">
          <div className={`${styles.block} ${styles.blockReverse}`}>
            <div className={styles.blockIcon}>🌟</div>
            <div className={styles.blockBody}>
              <p className="section-label">Our Vision</p>
              <h2 className="section-title">Confident. Disciplined. Well-Rounded.</h2>
              <div className="accent-bar" />

              <p className={styles.pullQuote}>
                "To produce a confident, disciplined, all-round child — emphasising
                discipline both in and out of school premises."
              </p>

              <p className={styles.bodyText}>
                The school aims to nurture children who are confident, disciplined, and
                well-rounded in all aspects of life. We emphasise good behaviour,
                responsibility, and respect — both within and outside the school
                environment.
              </p>
              <p className={styles.bodyText}>
                This reflects our deep commitment to building strong character and
                preparing children not just for the next class, but for a successful
                and meaningful future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ────────────────────────────────── */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.valuesHeader}>
            <p className="section-label">Our Values</p>
            <h2 className="section-title">Learn. Play. Grow.</h2>
            <div className="accent-bar" />
            <p className={styles.valuesIntro}>
              Three words. One promise. Everything we do at Jokia flows from these
              three values — they are not just a tagline, they are how we teach, play,
              and grow together every day.
            </p>
          </div>

          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueEmoji}>📚</div>
              <h3 className={styles.valueTitle}>Learn</h3>
              <p className={styles.valueTagline}>To achieve full potential.</p>
              <p className={styles.valueDesc}>
                Every child at Jokia is given the space and support to learn at their
                own pace. We believe potential is not fixed — it is nurtured. Our
                educators create an environment where curiosity is celebrated and every
                question is welcomed.
              </p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueEmoji}>⚽</div>
              <h3 className={styles.valueTitle}>Play</h3>
              <p className={styles.valueTagline}>To engage with all children.</p>
              <p className={styles.valueDesc}>
                Play is not a break from learning — play IS the learning. Through
                structured and free play, children develop social skills, emotional
                intelligence, creativity, and the joy of discovery that stays with
                them for life.
              </p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueEmoji}>🌱</div>
              <h3 className={styles.valueTitle}>Grow</h3>
              <p className={styles.valueTagline}>Both academically and socially.</p>
              <p className={styles.valueDesc}>
                Growth at Jokia is holistic. We measure success not only in what a
                child can read or count, but in how they treat others, how they carry
                themselves, and how confidently they face new challenges inside and
                outside the classroom.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Closing promise ───────────────────────── */}
      <section className={styles.promiseSection}>
        <div className="container">
          <div className={styles.promise}>
            <p className={styles.promiseQuote}>
              &ldquo;The sun and moon both have their own time to shine.
              At Jokia, we make sure every child gets their moment.&rdquo;
            </p>
            <p className={styles.promiseAttrib}>— The Jokia Pre School Family</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
