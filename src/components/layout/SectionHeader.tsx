import { FadeUp } from '../ui/FadeUp'
import styles from './SectionHeader.module.css'

type SectionHeaderProps = {
  eyebrow?: string
  title: string
  description?: string
  titleId?: string
}

export function SectionHeader({ eyebrow, title, description, titleId }: SectionHeaderProps) {
  return (
    <header className={styles.header}>
      {eyebrow ? (
        <FadeUp>
          <p className={styles.eyebrow}>{eyebrow}</p>
        </FadeUp>
      ) : null}
      <FadeUp delay={eyebrow ? 0.05 : 0}>
        <h2 id={titleId} className={styles.title}>
          {title}
        </h2>
      </FadeUp>
      {description ? (
        <FadeUp delay={eyebrow ? 0.1 : 0.05}>
          <p className={styles.description}>{description}</p>
        </FadeUp>
      ) : null}
    </header>
  )
}
