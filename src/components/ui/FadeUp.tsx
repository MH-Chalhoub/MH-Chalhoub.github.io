import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

type FadeUpProps = {
  children: ReactNode
  className?: string
  delay?: number
  /** Vertical offset in px when motion is enabled */
  y?: number
}

const ease = [0.22, 1, 0.36, 1] as const

export function FadeUp({ children, className, delay = 0, y = 20 }: FadeUpProps) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-64px 0px' }}
      transition={{ duration: 0.55, delay, ease }}
    >
      {children}
    </motion.div>
  )
}
