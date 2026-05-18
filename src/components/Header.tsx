import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import type { NavItem } from '../content/types'
import { Container } from './layout/Container'
import styles from './Header.module.css'

type HeaderProps = {
  brand: string
  role: string
  items: readonly NavItem[]
}

const easeOut = [0.22, 1, 0.36, 1] as const

export function Header({ brand, role, items }: HeaderProps) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const reduce = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navListVariants = {
    hidden: {},
    visible: {
      transition: reduce
        ? { duration: 0 }
        : { staggerChildren: 0.06, delayChildren: 0.12 },
    },
  }

  const navItemVariants = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: -6 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 0.32, ease: easeOut },
    },
  }

  return (
    <motion.header
      className={styles.header}
      data-scrolled={scrolled}
      initial={reduce ? false : { y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: easeOut }}
    >
      <Container className={styles.inner}>
        <motion.a
          className={styles.brand}
          href="#home"
          onClick={() => setOpen(false)}
          initial={reduce ? false : { opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, ease: easeOut }}
        >
          <motion.span
            className={styles.brandMark}
            aria-hidden
            initial={reduce ? false : { scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: reduce ? 0 : 0.06, ease: easeOut }}
          />
          <span className={styles.brandText}>
            <span className={styles.brandName}>{brand}</span>
            <span className={styles.brandRole}>{role}</span>
          </span>
        </motion.a>

        <motion.button
          type="button"
          className={styles.menuBtn}
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
          initial={reduce ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35, delay: reduce ? 0 : 0.14, ease: easeOut }}
          whileTap={reduce ? undefined : { scale: 0.96 }}
        >
          <span className="sr-only">Menu</span>
          <span className={styles.menuIcon} data-open={open} />
        </motion.button>

        <nav id="site-nav" className={styles.nav} data-open={open}>
          <div className={styles.navPanel}>
            <motion.ul
              className={styles.list}
              variants={navListVariants}
              initial="hidden"
              animate="visible"
            >
              {items.map((item) => (
                <motion.li key={item.id} variants={navItemVariants}>
                  <motion.a
                    className={styles.link}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    whileHover={reduce ? undefined : { y: -1 }}
                    whileTap={reduce ? undefined : { scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  >
                    {item.label}
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </nav>
      </Container>
    </motion.header>
  )
}
