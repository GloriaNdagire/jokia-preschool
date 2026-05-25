import Footer from '@/components/Footer'
import styles from './about.module.css'

export const metadata = {
  title: 'About Us – Jokia Pre School',
  description: 'Learn about Jokia Pre School — our mission, values, and the dedicated team behind our children\'s growth.',
}

export default function AboutPage() {
  return (
    <>
      <div className={styles.heroBanner}>
        <div className="container">
          <p className="section-label" style={{ color: 'rgba(255,255,255,0.6)' }}>Our Story</p>
          <h1 className={`section-title section-title--white`}>About Us</h1>
        </div>
      </div>

      <section className={styles.content}>
        <div className="container">
          <p className="section-label">Our Mission</p>
          <h2 className="section-title">Why Jokia Exists</h2>
          <div className="accent-bar" />
          <p className={styles.body}>
            Jokia Pre School was built on the conviction that the earliest years of a child&apos;s
            life are the most formative — and the most precious. We exist to ensure that every
            child in our care receives the best possible start: nurtured, stimulated, loved,
            and prepared for all that lies ahead.
          </p>
          <p className={styles.body} style={{ marginTop: '1rem' }}>
            This page is being built. More details about our history, values, team, and
            curriculum will be added here soon. Please check back!
          </p>
        </div>
      </section>

      <Footer />
    </>
  )
}
