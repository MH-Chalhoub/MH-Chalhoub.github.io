import { useState } from 'react'
import type { NavItem } from '../content/types'
import { Container } from './layout/Container'
import styles from './Header.module.css'

type HeaderProps = {
  brand: string
  role: string
  items: readonly NavItem[]
}

export function Header({ brand, role, items }: HeaderProps) {
  const [open, setOpen] = useState(false)

  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <a className={styles.brand} href="#home" onClick={() => setOpen(false)}>
          <span className={styles.brandMark} aria-hidden />
          <span className={styles.brandText}>
            <span className={styles.brandName}>{brand}</span>
            <span className={styles.brandRole}>{role}</span>
          </span>
        </a>

        <button
          type="button"
          className={styles.menuBtn}
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className={styles.menuIcon} data-open={open} />
        </button>

        <nav id="site-nav" className={styles.nav} data-open={open}>
          <ul className={styles.list}>
            {items.map((item) => (
              <li key={item.id}>
                <a className={styles.link} href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  )
}
