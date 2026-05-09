import { useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { useCallback, useRef } from 'react'
import styles from './HolographicCard.module.css'

type HolographicCardProps = {
  children: ReactNode
  /** Classes for the inner content shell (e.g. padding, flex layout). */
  className?: string
}

/**
 * 3D tilt + iridescent sheen driven by pointer position (inspired by foil trading-card UIs).
 * Respects prefers-reduced-motion.
 */
export function HolographicCard({ children, className }: HolographicCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()

  const update = useCallback((clientX: number, clientY: number) => {
    const el = ref.current
    if (!el || reduceMotion) return
    const r = el.getBoundingClientRect()
    const w = Math.max(r.width, 1)
    const h = Math.max(r.height, 1)
    const rx = ((clientX - r.left) / w - 0.5) * 2
    const ry = ((clientY - r.top) / h - 0.5) * 2
    el.style.setProperty('--holo-rx', rx.toFixed(4))
    el.style.setProperty('--holo-ry', ry.toFixed(4))
  }, [reduceMotion])

  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      update(e.clientX, e.clientY)
    },
    [update],
  )

  const onPointerLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--holo-rx', '0')
    el.style.setProperty('--holo-ry', '0')
  }, [])

  return (
    <div className={styles.root}>
      <div
        ref={ref}
        className={styles.tilt}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
      >
        <div className={styles.sheen} aria-hidden />
        <div className={styles.beam} aria-hidden />
        <div className={styles.rim} aria-hidden />
        <div className={[styles.inner, className].filter(Boolean).join(' ')}>{children}</div>
      </div>
    </div>
  )
}
