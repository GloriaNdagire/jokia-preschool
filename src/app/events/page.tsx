import Footer from '@/components/Footer'
import styles from './events.module.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Upcoming Events – Jokia Pre School',
  description:
    'Stay updated on upcoming events, activities, and the term schedule at Jokia Pre School.',
}

/*
  ──────────────────────────────────────────────────────
  HOW TO UPDATE THIS PAGE EACH TERM:

  1. Change CURRENT_TERM to the new term name
  2. Change TERM_DATES to the new term dates
  3. Edit the events array below — add, remove, or change events
  4. Save the file → push to GitHub → Vercel auto-deploys in ~60 seconds
     Your live website will reflect the changes immediately ✅
  ──────────────────────────────────────────────────────
*/

const CURRENT_TERM = 'Term 2, 2026'
const TERM_DATES   = 'May 2026 – August 2026'

type EventItem = {
  date: string
  title: string
  description: string
  category: 'academic' | 'social' | 'sports' | 'cultural' | 'admin'
}

const events: EventItem[] = [
  {
    date: 'Mon 25 May',
    title: 'Term 2 Begins',
    description: 'First day of Term 2. Children report to school by 7:00 AM in full uniform.',
    category: 'admin',
  },
  {
    date: 'Fri 16 May',
    title: 'Parent-Teacher Meeting',
    description: 'End-of-Term-1 results shared with parents. One-on-one sessions with class teachers from 2:00 PM.',
    category: 'academic',
  },
  {
    date: 'Wed 4 Jun',
    title: 'World Environment Day Activity',
    description: 'Children participate in a tree-planting and nature awareness activity around the school grounds.',
    category: 'social',
  },
  {
    date: 'Fri 20 Jun',
    title: 'Mid-Term Break Begins',
    description: 'School closes for the mid-term holiday. Children resume on Monday 30 June.',
    category: 'admin',
  },
  {
    date: 'Mon 30 Jun',
    title: 'School Resumes After Mid-Term',
    description: 'Children report back to school after the break. Full uniform required.',
    category: 'admin',
  },
  {
    date: 'Fri 18 Jul',
    title: 'Cultural Day 🎭',
    description: 'Our biggest celebration of the term! Children come dressed in traditional attire, perform cultural dances, and share food from their cultures. Parents warmly invited.',
    category: 'cultural',
  },
  {
    date: 'Fri 1 Aug',
    title: 'Sports Day 🏅',
    description: 'A fun-filled day of races, team games, and relays. Come cheer on our little athletes! Starts at 9:00 AM on the school grounds.',
    category: 'sports',
  },
  {
    date: 'Fri 15 Aug',
    title: 'End-of-Term 2 Exams',
    description: 'Assessments for all classes. Children should come well-rested and prepared.',
    category: 'academic',
  },
  {
    date: 'Fri 22 Aug',
    title: 'Term 2 Closing Day',
    description: 'Last day of Term 2. Report cards issued. School closes at 12:00 PM. Term 3 begins in September.',
    category: 'admin',
  },
]

const categoryLabels: Record<EventItem['category'], string> = {
  academic: 'Academic',
  social:   'Social',
  sports:   'Sports',
  cultural: 'Cultural',
  admin:    'Admin / Dates',
}

const categoryColors: Record<EventItem['category'], string> = {
  academic: '#0F4C81',
  social:   '#059669',
  sports:   '#d97706',
  cultural: '#7c3aed',
  admin:    '#6B7280',
}

export default function EventsPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────── */}
      <div className={styles.heroBanner}>
        <div className="container">
          <p className={styles.eyebrow}>What&apos;s Coming</p>
          <h1 className={styles.heroTitle}>Upcoming Events</h1>
          <p className={styles.heroSub}>
            Staying connected with your child&apos;s school journey — all the important
            dates and events for {CURRENT_TERM}.
          </p>
        </div>
      </div>

      {/* ── Term info strip ───────────────────────── */}
      <div className={styles.termStrip}>
        <div className="container">
          <div className={styles.termInfo}>
            <div className={styles.termBadge}>📅 {CURRENT_TERM}</div>
            <p className={styles.termDates}>{TERM_DATES}</p>
          </div>
        </div>
      </div>

      {/* ── Events list ───────────────────────────── */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.timeline}>
            {events.map((ev, i) => (
              <div key={i} className={styles.timelineItem}>

                {/* Date column */}
                <div className={styles.dateCol}>
                  <p className={styles.date}>{ev.date}</p>
                </div>

                {/* Connector dot */}
                <div className={styles.connector}>
                  <div
                    className={styles.dot}
                    style={{ background: categoryColors[ev.category] }}
                  />
                  {i < events.length - 1 && <div className={styles.line} />}
                </div>

                {/* Event card */}
                <div className={styles.eventCard}>
                  <span
                    className={styles.categoryTag}
                    style={{
                      color: categoryColors[ev.category],
                      background: `${categoryColors[ev.category]}18`,
                    }}
                  >
                    {categoryLabels[ev.category]}
                  </span>
                  <h3 className={styles.eventTitle}>{ev.title}</h3>
                  <p className={styles.eventDesc}>{ev.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Note to parents ───────────────────────── */}
      <section className={styles.noteSection}>
        <div className="container">
          <div className={styles.note}>
            <span className={styles.noteIcon}>📢</span>
            <p className={styles.noteText}>
              Dates may be subject to change. Follow us on WhatsApp, Instagram, or
              Facebook for real-time updates, or contact us directly.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
