'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Navbar.module.css'

const links = [
  { href: '/',        label: 'Home' },
  { href: '/about',   label: 'About Us' },
  { href: '/events',  label: 'Upcoming Events' },
  { href: '/contact', label: 'Contact Us' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled]  = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu when route changes
  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>

        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <div className={styles.logoIcon}>JP</div>
          <div className={styles.logoText}>
            Jokia Pre School
            <span>Play · Learn · Grow</span>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className={styles.links}>
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`${styles.link} ${pathname === href ? styles.active : ''}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger button */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      {/*
        Mobile drawer — the outer div animates max-height (overflow:hidden).
        The inner div holds the actual links so nothing peeks out when closed.
      */}
      <div className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ''}`}>
        <div className={styles.drawerInner}>
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`${styles.drawerLink} ${pathname === href ? styles.active : ''}`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
