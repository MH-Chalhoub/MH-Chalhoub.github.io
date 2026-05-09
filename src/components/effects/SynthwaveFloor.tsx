import { useReducedMotion } from 'framer-motion'
import { SynthwaveAudio } from './SynthwaveAudio'
import { SynthwaveStars } from './SynthwaveStars'
import styles from './SynthwaveFloor.module.css'

/**
 * Scene inspired by the CodePen “synthwave 80s” structure: `.scene` → `.top` / `.bottom`,
 * infinite grid (`background-position-y`), procedural `#stars`, optional licensed audio.
 * Full DeLorean / palm markup lives in linked pens — not bundled here (see comments in CSS).
 */
export function SynthwaveFloor() {
  const reduceMotion = useReducedMotion()

  return (
    <div className={[styles.scene, reduceMotion ? styles.reduced : ''].filter(Boolean).join(' ')}>
      <div className={styles.decor} aria-hidden>
        <div className={styles.sky} />
        <SynthwaveStars />
        <div className={styles.column}>
          <div className={styles.top}>
            <div className={styles.startails}>
              <div className={styles.startailR} />
              <div className={styles.startailL} />
              <div className={styles.startailM} />
            </div>
            <div className={styles.topLines} />
            <div className={styles.sunWrap}>
              <div className={styles.sun} />
            </div>
          </div>

          <div className={styles.bottom}>
            <div className={styles.bottomGrid} />
            <div className={styles.bottomOverlay} />
          </div>
        </div>

        <div className={styles.noise} />
        <div className={styles.vignette} />
      </div>

      <SynthwaveAudio />
    </div>
  )
}
