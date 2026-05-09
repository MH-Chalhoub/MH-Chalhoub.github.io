import { useCallback, useRef, useState } from 'react'
import styles from './SynthwaveAudio.module.css'

/**
 * Optional ambient loop from the original CodePen demo.
 * License: https://assets.codepen.io/907471/synthesizer-synthwave-80s-110045-license.txt
 */
const TRACK =
  'https://assets.codepen.io/907471/synthwave-80s-110045.mp3'

export function SynthwaveAudio() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)

  const toggle = useCallback(() => {
    const a = audioRef.current
    if (!a) return
    if (playing) {
      a.pause()
      setPlaying(false)
      return
    }
    void a
      .play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false))
  }, [playing])

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.code === 'Space' || e.code === 'Enter') {
        e.preventDefault()
        toggle()
      }
    },
    [toggle],
  )

  return (
    <>
      <audio ref={audioRef} className={styles.audio} loop preload="none">
        <source src={TRACK} type="audio/mpeg" />
      </audio>
      <button
        type="button"
        className={`${styles.volume} ${playing ? styles.isPlaying : ''}`}
        onPointerDown={(e) => {
          e.preventDefault()
          toggle()
        }}
        onKeyDown={onKeyDown}
        aria-label={playing ? 'Mute synthwave track' : 'Play synthwave track'}
        aria-pressed={playing}
      >
        <svg
          className={styles.playIcon}
          xmlns="http://www.w3.org/2000/svg"
          width={21.25}
          height={17.5}
          viewBox="0 0 21.25 17.5"
          aria-hidden
        >
          <path
            fill="currentColor"
            d="M1.25-11.25v7.5h5l5.625 5H13.75v-17.5H11.875l-5.625 5Zm16 6.75a3.745 3.745 0 0 0 1.5-3 3.745 3.745 0 0 0-1.5-3L16.125-9a1.87 1.87 0 0 1 .75 1.5 1.87 1.87 0 0 1-.75 1.5Zm2.25 3a7.491 7.491 0 0 0 3-6 7.491 7.491 0 0 0-3-6L18.375-12a5.615 5.615 0 0 1 2.25 4.5A5.615 5.615 0 0 1 18.375-3L19.5-1.5Z"
            transform="translate(-1.25 16.25)"
          />
        </svg>
        <svg
          className={styles.mutedIcon}
          xmlns="http://www.w3.org/2000/svg"
          width={24.996}
          height={19.992}
          viewBox="0 0 24.996 19.992"
          aria-hidden
        >
          <path
            fill="currentColor"
            d="M1.891-16.922 1.148-17.5 0-16.016l.742.574L23.105 1.922l.742.574L25 1.016 24.254.441 21.238-1.9A7.48 7.48 0 0 0 23.75-7.5a7.491 7.491 0 0 0-3-6L19.625-12a5.615 5.615 0 0 1 2.25 4.5 5.611 5.611 0 0 1-2.152 4.426L15-6.742V-16.25H13.125l-4.836 4.3-6.4-4.969ZM2.5-11.25v7.5h5l5.625 5H15V-1.934L3.172-11.25H2.5Zm16 6.75a3.745 3.745 0 0 0 1.5-3 3.745 3.745 0 0 0-1.5-3L17.375-9a1.87 1.87 0 0 1 .75 1.5 1.87 1.87 0 0 1-.75 1.5Z"
            transform="translate(0 17.496)"
          />
        </svg>
      </button>
    </>
  )
}
