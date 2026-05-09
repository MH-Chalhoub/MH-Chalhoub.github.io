import { Container } from './layout/Container'
import { SectionHeader } from './layout/SectionHeader'
import { FadeUp } from './ui/FadeUp'
import styles from './About.module.css'

type AboutProps = {
  id?: string
  title: string
  paragraphs: readonly string[]
  focus: readonly string[]
}

export function About({ id = 'about', title, paragraphs, focus }: AboutProps) {
  return (
    <section className={styles.section} id={id} aria-labelledby="about-heading">
      <Container>
        <SectionHeader title={title} titleId="about-heading" />

        <div className={styles.grid}>
          <div className={styles.copy}>
            {paragraphs.map((p, i) => (
              <FadeUp key={i} delay={i * 0.07}>
                <p className={styles.para}>{p}</p>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.12}>
            <aside className={styles.aside} aria-label="Focus areas">
              <h3 className={styles.asideTitle}>Current focus</h3>
              <ul className={styles.focusList}>
                {focus.map((line) => (
                  <li key={line} className={styles.focusItem}>
                    <span className={styles.dot} aria-hidden />
                    {line}
                  </li>
                ))}
              </ul>
            </aside>
          </FadeUp>
        </div>
      </Container>
    </section>
  )
}
