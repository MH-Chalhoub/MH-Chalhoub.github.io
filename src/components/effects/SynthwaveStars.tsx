import { useReducedMotion } from 'framer-motion'
import { useCallback, useLayoutEffect, useRef } from 'react'
import styles from './SynthwaveStars.module.css'

function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min
}

type SynthwaveStarsProps = {
  /** DOM id for debugging / anchors (matches CodePen `#stars`). */
  id?: string
}

export function SynthwaveStars({ id = 'stars' }: SynthwaveStarsProps) {
  const hostRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()

  const paint = useCallback(() => {
    const el = hostRef.current
    if (!el) return
    el.replaceChildren()
    const w = el.clientWidth
    const h = el.clientHeight
    if (w < 2 || h < 2) return

    const count = reduceMotion ? randomInt(28, 48) : randomInt(48, 96)
    for (let i = 0; i < count; i++) {
      const star = document.createElement('div')
      star.className = styles.star
      star.style.setProperty('--x', `${randomInt(0, w)}px`)
      star.style.setProperty('--y', `${randomInt(0, h)}px`)
      el.appendChild(star)
    }
  }, [reduceMotion])

  useLayoutEffect(() => {
    paint()
    const ro = new ResizeObserver(() => {
      window.requestAnimationFrame(paint)
    })
    const node = hostRef.current
    if (node) ro.observe(node)
    return () => ro.disconnect()
  }, [paint])

  return (
    <div
      ref={hostRef}
      id={id}
      className={[styles.host, reduceMotion ? styles.hostStopped : ''].filter(Boolean).join(' ')}
      aria-hidden
    />
  )
}
