import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'framer-motion'
import { useRef, type PointerEvent } from 'react'
import { Container } from './layout/Container'
import styles from './Hero.module.css'

type HeroProps = {
  id?: string
  headline: string
  subhead: string
  tagline: string
  primaryCta: { label: string; href: string }
  secondaryCta: { label: string; href: string }
  portraitSrc?: string
  portraitAlt: string
}

export function Hero({
  id = 'home',
  headline,
  subhead,
  tagline,
  primaryCta,
  secondaryCta,
  portraitSrc = '/portrait.png',
  portraitAlt,
}: HeroProps) {
  const reduce = useReducedMotion()
  const cardRef = useRef<HTMLElement>(null)
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const springRotateX = useSpring(rotateX, { stiffness: 280, damping: 30 })
  const springRotateY = useSpring(rotateY, { stiffness: 280, damping: 30 })

  function onPortraitPointerMove(e: PointerEvent<HTMLElement>) {
    if (reduce) return
    const el = cardRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    rotateY.set(px * 16)
    rotateX.set(-py * 16)
  }

  function onPortraitPointerLeave() {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <section className={styles.section} id={id} aria-labelledby="hero-heading">
      <div className={styles.grid} aria-hidden />
      <div className={styles.orbit} aria-hidden data-static={reduce} />

      <Container className={styles.content}>
        <div className={styles.layout}>
          <div className={styles.text}>
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
          </div>

          <div className={styles.portraitShell}>
            <motion.figure
              ref={cardRef}
              className={styles.portrait}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={
                reduce
                  ? undefined
                  : {
                      rotateX: springRotateX,
                      rotateY: springRotateY,
                      transformPerspective: 1000,
                    }
              }
              onPointerMove={onPortraitPointerMove}
              onPointerLeave={onPortraitPointerLeave}
            >
              <div className={styles.portraitInner}>
                <img
                  className={styles.portraitImg}
                  src={portraitSrc}
                  alt={portraitAlt}
                  width={640}
                  height={800}
                  decoding="async"
                  fetchPriority="high"
                />
              </div>
            </motion.figure>
          </div>
        </div>
      </Container>
    </section>
  )
}
