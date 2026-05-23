import type { CSSProperties } from 'react'
import styles from './Hero.module.css'

const PORTRAIT_STARS = [
  { top: '6%', left: '12%', size: 2, delay: 0 },
  { top: '4%', left: '88%', size: 2, delay: 1.1 },
  { top: '14%', left: '8%', size: 1.5, delay: 0.5 },
  { top: '12%', left: '92%', size: 1.5, delay: 1.7 },
  { top: '22%', left: '22%', size: 1.5, delay: 2.2 },
  { top: '18%', left: '78%', size: 1.5, delay: 0.9 },
  { top: '32%', left: '6%', size: 1.5, delay: 1.4 },
  { top: '28%', left: '94%', size: 2, delay: 2.6 },
  { top: '42%', left: '15%', size: 1.5, delay: 0.7 },
  { top: '38%', left: '85%', size: 1.5, delay: 1.9 },
  { top: '55%', left: '10%', size: 2, delay: 2.4 },
  { top: '52%', left: '90%', size: 1.5, delay: 0.3 },
  { top: '68%', left: '18%', size: 1.5, delay: 1.6 },
  { top: '64%', left: '82%', size: 2, delay: 2.8 },
  { top: '78%', left: '8%', size: 1.5, delay: 0.8 },
  { top: '74%', left: '92%', size: 1.5, delay: 2.1 },
  { top: '88%', left: '25%', size: 2, delay: 1.2 },
  { top: '92%', left: '72%', size: 1.5, delay: 2.5 },
] as const

/** Rotate once, then translateX along that axis (standard meteor pattern). */
const SHOOTING_STARS = [
  { top: '6%', left: '4%', delay: 0, duration: 12, angle: 38, travel: 200 },
  { top: '22%', left: '78%', delay: 3.5, duration: 14, angle: 142, travel: 190 },
  { top: '38%', left: '2%', delay: 7, duration: 13, angle: 35, travel: 210 },
  { top: '54%', left: '88%', delay: 10.5, duration: 15, angle: 145, travel: 185 },
  { top: '70%', left: '6%', delay: 2, duration: 16, angle: 40, travel: 195 },
  { top: '86%', left: '82%', delay: 13, duration: 14, angle: 138, travel: 175 },
] as const

type PortraitStarsProps = {
  shiftX?: number
  shiftY?: number
}

export function PortraitStars({ shiftX = 0, shiftY = 0 }: PortraitStarsProps) {
  const bgShiftX = shiftX * -0.22
  const bgShiftY = shiftY * -0.22

  return (
    <div
      className={styles.portraitStars}
      aria-hidden
      style={{ transform: `translate(${bgShiftX}px, ${bgShiftY}px)` }}
    >
      {PORTRAIT_STARS.map((star, index) => (
        <span
          key={`star-${index}`}
          className={styles.portraitStar}
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
      {SHOOTING_STARS.map((star, index) => (
        <span
          key={`shoot-${index}`}
          className={styles.portraitMeteor}
          style={
            {
              top: star.top,
              left: star.left,
              '--meteor-angle': `${star.angle}deg`,
              '--meteor-travel': `${star.travel}px`,
              '--meteor-delay': `${star.delay}s`,
              '--meteor-duration': `${star.duration}s`,
            } as CSSProperties
          }
        >
          <span className={styles.portraitMeteorTrail} />
        </span>
      ))}
    </div>
  )
}

type PortraitBackdropProps = {
  bgSrc: string
  shiftX?: number
  shiftY?: number
}

export function PortraitBackdrop({
  bgSrc,
  shiftX = 0,
  shiftY = 0,
}: PortraitBackdropProps) {
  const bgShiftX = shiftX * -0.22
  const bgShiftY = shiftY * -0.22
  const bgTransform = `translate(calc(-50% + ${bgShiftX}px), calc(-50% + ${bgShiftY}px)) scale(1.1)`

  return (
    <>
      <img
        className={styles.portraitLayerBg}
        src={bgSrc}
        alt=""
        aria-hidden
        draggable={false}
        decoding="async"
        style={{ transform: bgTransform }}
      />
      <PortraitStars shiftX={shiftX} shiftY={shiftY} />
    </>
  )
}

type PortraitDepthProps = {
  bgSrc: string
  fgSrc: string
  alt: string
  shiftX: number
  shiftY: number
}

export function PortraitDepth({ bgSrc, fgSrc, alt, shiftX, shiftY }: PortraitDepthProps) {
  const fgShiftX = shiftX * 1.35
  const fgShiftY = shiftY * 1.35

  return (
    <div className={styles.portraitDepth}>
      <PortraitBackdrop bgSrc={bgSrc} shiftX={shiftX} shiftY={shiftY} />
      <img
        className={styles.portraitLayerFg}
        src={fgSrc}
        alt={alt}
        draggable={false}
        decoding="async"
        style={{
          transform: `translate(calc(-50% + ${fgShiftX}px), calc(5% + ${fgShiftY}px)) scale(1.12)`,
        }}
      />
    </div>
  )
}
