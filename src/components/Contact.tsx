import { useCvModal } from '../context/CvModalContext'
import type { SocialLink } from '../content/types'
import { Container } from './layout/Container'
import { FadeUp } from './ui/FadeUp'
import styles from './Contact.module.css'

function Icon({ kind }: { kind: SocialLink['kind'] }) {
  const strokeIcon = { width: 20, height: 20, fill: 'none', stroke: 'currentColor' as const }
  switch (kind) {
    case 'email':
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...strokeIcon} strokeWidth="1.75">
          <path d="M4 6h16v12H4z" />
          <path d="M4 7l8 6 8-6" />
        </svg>
      )
    case 'github':
      return (
        <svg viewBox="0 0 24 24" aria-hidden width={20} height={20} fill="currentColor">
          <path d="M12 .5C5.65.5.5 5.65.5 12a11.79 11.79 0 0 0 8.19 11.2c.6.11.82-.26.82-.57v-2c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.08-.74.08-.74 1.21.09 1.85 1.24 1.85 1.24 1.08 1.85 2.82 1.32 3.5 1 .1-.79.42-1.32.76-1.62-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.52 11.52 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.2v3.26c0 .32.21.69.83.57A11.79 11.79 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
        </svg>
      )
    case 'linkedin':
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...strokeIcon} strokeWidth="1.75">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
          <path d="M2 9h4v12H2z" />
          <path d="M4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
        </svg>
      )
    case 'phone':
      return (
        <svg
          viewBox="0 0 24 24"
          aria-hidden
          {...strokeIcon}
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.81.3 1.6.54 2.36a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.72-1.11a2 2 0 0 1 2.12-.45c.76.24 1.55.42 2.36.54A2 2 0 0 1 22 16.92z" />
        </svg>
      )
    case 'cv':
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...strokeIcon} strokeWidth="1.75">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6M12 18v-6M9 15h6" />
        </svg>
      )
  }
}

type ContactProps = {
  id?: string
  title: string
  blurb: string
  location?: string
  links: readonly SocialLink[]
}

export function Contact({ id = 'contact', title, blurb, location, links }: ContactProps) {
  const { openCv } = useCvModal()

  return (
    <section
      className={`${styles.section} scrollSurfaceDark`}
      id={id}
      aria-labelledby="contact-heading"
    >
      <Container className={styles.inner}>
        <FadeUp>
          <h2 id="contact-heading" className={styles.title}>
            {title}
          </h2>
        </FadeUp>
        <FadeUp delay={0.06}>
          <p className={styles.blurb}>{blurb}</p>
        </FadeUp>
        {location ? (
          <FadeUp delay={0.08}>
            <p className={styles.location}>
              <span className={styles.locationLabel}>Location</span>
              {location}
            </p>
          </FadeUp>
        ) : null}

        <ul className={styles.links}>
          {links.map((link, i) => (
            <li key={link.href + link.label}>
              <FadeUp delay={0.1 + i * 0.06}>
                {link.kind === 'cv' ? (
                  <button type="button" className={styles.card} onClick={openCv}>
                    <span className={styles.icon}>
                      <Icon kind={link.kind} />
                    </span>
                    <span className={styles.label}>{link.label}</span>
                    <span className={styles.chev} aria-hidden>
                      →
                    </span>
                  </button>
                ) : (
                  <a className={styles.card} href={link.href}>
                    <span className={styles.icon}>
                      <Icon kind={link.kind} />
                    </span>
                    <span className={styles.label}>{link.label}</span>
                    <span className={styles.chev} aria-hidden>
                      →
                    </span>
                  </a>
                )}
              </FadeUp>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
