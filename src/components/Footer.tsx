import Link from 'next/link'
import styles from './Footer.module.css'
import Image from 'next/image'

const navLinks = [
  { href: '/',        label: 'Home' },
  { href: '/about',   label: 'About Us' },
  { href: '/events',  label: 'Upcoming Events' },
  { href: '/contact', label: 'Contact Us' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>

        <div className={styles.grid}>

          {/* Brand */}
          <div className={styles.brandCol}>
            <div className={styles.logoRow}>
              
              <Image
  src="/images/logo.png"
  alt="Jokia Pre School"
  width={38}
  height={38}
  style={{ borderRadius: '50%', objectFit: 'cover' }}
/>
              
              <p className={styles.brandName}>Jokia Pre School</p>
            </div>
            <p className={styles.tagline}>
              Play – and enjoy learning with friends.<br></br>
              Learn – both outdoor and indoor enhancing the beauty of practicality.<br></br>
              Grow – in knowledge and in an all round school training.<br></br><br></br>
 
              A place which strives to give a basis of opportunity, support and love in nuturing each child, 
              in the aim to reach their maximum potential.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className={styles.colTitle}>Quick Links</p>
            <ul className={styles.linkList}>
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className={styles.footerLink}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className={styles.colTitle}>Get in Touch</p>

            <a
              href="https://wa.me/256753919284"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactItem}
            >
              <div className={`${styles.contactIcon} ${styles.whatsapp}`}>
                <WhatsAppIcon />
              </div>
              <span>+256 753 919 284</span>
            </a>

            <a
              href="https://www.instagram.com/jokiapreschool/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactItem}
            >
              <div className={`${styles.contactIcon} ${styles.instagram}`}>
                <InstagramIcon />
              </div>
              <span>@jokiapreschool</span>
            </a>

            <a
              href="https://facebook.com/jokiapreschool"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactItem}
            >
              <div className={`${styles.contactIcon} ${styles.facebook}`}>
                <FacebookIcon />
              </div>
              <span>Jokia Pre School</span>
            </a>

            <a
              href="mailto:info@jokiapreschool.ac.ug"
              className={styles.contactItem}
            >
              <div className={`${styles.contactIcon} ${styles.email}`}>
                <EmailIcon />
              </div>
              <span>info@jokiapreschool.ac.ug</span>
            </a>
          </div>
        </div>

        <hr className={styles.divider} />

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {year} Jokia Pre School. All rights reserved.
          </p>
          <div className={styles.socials}>
            <a href="https://wa.me/256753919284" target="_blank" rel="noopener noreferrer" className={styles.socialBtn} aria-label="WhatsApp">
              <WhatsAppIcon />
            </a>
            <a href="https://www.instagram.com/jokiapreschool/" target="_blank" rel="noopener noreferrer" className={styles.socialBtn} aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="https://facebook.com/jokiapreschool" target="_blank" rel="noopener noreferrer" className={styles.socialBtn} aria-label="Facebook">
              <FacebookIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ── Inline SVG icons ───────────────────────── */
function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.555 4.107 1.524 5.832L0 24l6.335-1.509A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.034-1.384l-.361-.214-3.748.893.907-3.648-.236-.375A9.817 9.817 0 012.182 12c0-5.42 4.398-9.818 9.818-9.818 5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z"/>
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>
  )
}
