import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'framer-motion'
import {
  Suspense,
  lazy,
  useEffect,
  useRef,
  useState,
  type PointerEvent,
} from 'react'
import { useCvModal } from '../context/CvModalContext'
import { Container } from './layout/Container'
import { PortraitDepth } from './PortraitDepth'
import styles from './Hero.module.css'

const Portrait3D = lazy(() =>
  import('./Portrait3D').then((module) => ({ default: module.Portrait3D })),
)

type HeroProps = {
  id?: string
  headline: string
  subhead: string
  tagline: string
  primaryCta: { label: string; href: string }
  secondaryCta: { label: string; href?: string; action?: 'cv' }
  portraitBgSrc?: string
  portraitFgSrc?: string
  portraitModelSrc?: string
  portraitAlt: string
}

export function Hero({
  id = 'home',
  headline,
  subhead,
  tagline,
  primaryCta,
  secondaryCta,
  portraitBgSrc = '/portrait-bg.png',
  portraitFgSrc = '/portrait-fg.png',
  portraitModelSrc = '/portrait.glb',
  portraitAlt,
}: HeroProps) {
  const reduce = useReducedMotion()
  const { openCv } = useCvModal()
  const [show3d, setShow3d] = useState(false)
  const [modelReady, setModelReady] = useState(false)
  const [loadPercent, setLoadPercent] = useState(0)
  const cardRef = useRef<HTMLElement>(null)
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const [parallax, setParallax] = useState({ x: 0, y: 0 })
  const springRotateX = useSpring(rotateX, { stiffness: 280, damping: 30 })
  const springRotateY = useSpring(rotateY, { stiffness: 280, damping: 30 })

  const portraitFallback = (
    <PortraitDepth
      bgSrc={portraitBgSrc}
      fgSrc={portraitFgSrc}
      alt={portraitAlt}
      shiftX={reduce ? 0 : parallax.x}
      shiftY={reduce ? 0 : parallax.y}
    />
  )

  useEffect(() => {
    if (!show3d || reduce) {
      setLoadPercent(0)
      return
    }

    let cancelled = false
    setLoadPercent(0)
    import('./Portrait3D').then(() => {
      if (!cancelled) setLoadPercent((p) => Math.max(p, 8))
    })

    return () => {
      cancelled = true
    }
  }, [show3d, reduce])

  const portraitLoader = (
    <div
      className={styles.portraitLoader}
      aria-live="polite"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={loadPercent}
      aria-label={`Loading 3D model, ${loadPercent} percent`}
    >
      <div className={styles.portraitLoaderSpinner} aria-hidden />
      <span className={styles.portraitLoaderPercent}>{loadPercent}%</span>
      <span className={styles.portraitLoaderText}>Loading 3D…</span>
      <div className={styles.portraitLoaderTrack}>
        <div
          className={styles.portraitLoaderBar}
          style={{ width: `${loadPercent}%` }}
        />
      </div>
    </div>
  )

  function toggle3d() {
    if (show3d) {
      setShow3d(false)
      setModelReady(false)
      setLoadPercent(0)
      return
    }
    setModelReady(false)
    setLoadPercent(0)
    setShow3d(true)
  }

  function onPortraitPointerMove(e: PointerEvent<HTMLElement>) {
    if (reduce || show3d) return
    const el = cardRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    rotateY.set(px * 8)
    rotateX.set(-py * 8)
    setParallax({ x: px * 18, y: -py * 18 })
  }

  function onPortraitPointerLeave() {
    rotateX.set(0)
    rotateY.set(0)
    setParallax({ x: 0, y: 0 })
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
              {secondaryCta.action === 'cv' ? (
                <button type="button" className={styles.btnGhost} onClick={openCv}>
                  {secondaryCta.label}
                </button>
              ) : (
                <a className={styles.btnGhost} href={secondaryCta.href}>
                  {secondaryCta.label}
                </a>
              )}
            </motion.div>
          </div>

          <div className={styles.portraitShell}>
            <motion.figure
              ref={cardRef}
              className={styles.portrait}
              data-mode={show3d ? '3d' : '2d'}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              onPointerMove={onPortraitPointerMove}
              onPointerLeave={onPortraitPointerLeave}
            >
              <motion.div
                className={styles.portraitTilt}
                style={
                  reduce || show3d
                    ? undefined
                    : {
                        rotateX: springRotateX,
                        rotateY: springRotateY,
                        transformPerspective: 1000,
                      }
                }
              >
              <div className={styles.portraitInner}>
                {show3d && !reduce ? (
                  <div className={styles.portraitMedia}>
                    <Suspense fallback={null}>
                      <Portrait3D
                        url={portraitModelSrc}
                        alt={portraitAlt}
                        onProgress={setLoadPercent}
                        onReady={() => {
                          setLoadPercent(100)
                          setModelReady(true)
                        }}
                      />
                    </Suspense>
                    {!modelReady && portraitLoader}
                  </div>
                ) : (
                  portraitFallback
                )}
                {!reduce && (
                  <button
                    type="button"
                    className={styles.portraitModeBtn}
                    onClick={toggle3d}
                    aria-pressed={show3d}
                    aria-label={
                      show3d ? 'Show portrait photo' : 'Show interactive 3D portrait'
                    }
                  >
                    {show3d ? '2D' : '3D'}
                  </button>
                )}
              </div>
              </motion.div>
            </motion.figure>
          </div>
        </div>
      </Container>
    </section>
  )
}
