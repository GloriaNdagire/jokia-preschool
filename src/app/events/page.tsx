import Footer from '@/components/Footer'
import styles from './events.module.css'

export const metadata = {
  title: 'Upcoming Events – Jokia Pre School',
  description: 'Stay updated on upcoming events, celebrations, and activities at Jokia Pre School.',
}

export default function EventsPage() {
  return (
    <>
      <div className={styles.heroBanner}>
        <div className="container">
          <p className="section-label" style={{ color: 'rgba(255,255,255,0.6)' }}>What&apos;s Coming</p>
          <h1 className="section-title section-title--white">Upcoming Events</h1>
        </div>
      </div>

      <section className={styles.content}>
        <div className="container">
          <p className="section-label">Events Calendar</p>
          <h2 className="section-title">Events & Activities</h2>
          <div className="accent-bar" />
          <p className={styles.body}>
            This page will list all upcoming school events — Cultural Day, Sports Day,
            Parent meetings, Open Days, and more. Check back soon for updates!
          </p>
        </div>
      </section>

      <Footer />
    </>
  )
}
