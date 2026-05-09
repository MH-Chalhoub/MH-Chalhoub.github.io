import type { Stat } from '../content/types'
import { Container } from './layout/Container'
import { FadeUp } from './ui/FadeUp'
import styles from './Stats.module.css'

type StatsProps = {
  items: readonly Stat[]
}

export function Stats({ items }: StatsProps) {
  return (
    <section className={styles.section} aria-label="Highlights">
      <Container>
        <ul className={styles.list}>
          {items.map((item, i) => (
            <li key={item.label} className={styles.item}>
              <FadeUp delay={i * 0.06}>
                <p className={styles.value}>{item.value}</p>
                <p className={styles.label}>{item.label}</p>
              </FadeUp>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
