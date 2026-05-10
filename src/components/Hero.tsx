import { motion, useReducedMotion } from 'framer-motion'
import { Container } from './layout/Container'
import styles from './Hero.module.css'

type HeroProps = {
  id?: string
  headline: string
  subhead: string
  tagline: string
  primaryCta: { label: string; href: string }
  secondaryCta: { label: string; href: string }
}

export function Hero({
  id = 'home',
  headline,
  subhead,
  tagline,
  primaryCta,
  secondaryCta,
}: HeroProps) {
  const reduce = useReducedMotion()

  return (
    <section className={styles.section} id={id} aria-labelledby="hero-heading">
      <div className={styles.grid} aria-hidden />
      <div className={styles.orbit} aria-hidden data-static={reduce} />

      <Container className={styles.content}>
        <motion.p
          className={styles.tagline}
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {tagline}
        </motion.p>

        <motion.h1
          id="hero-heading"
          className={styles.headline}
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
        >
          {headline}
        </motion.h1>

        <motion.p
          className={styles.subhead}
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          {subhead}
        </motion.p>

        <motion.div
          className={styles.actions}
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        >
          <a className={styles.btnPrimary} href={primaryCta.href}>
            {primaryCta.label}
          </a>
          <a className={styles.btnGhost} href={secondaryCta.href}>
            {secondaryCta.label}
          </a>
        </motion.div>
      </Container>
    </section>
  )
}
