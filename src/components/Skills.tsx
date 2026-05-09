import type { SkillCategory } from '../content/types'
import { Container } from './layout/Container'
import { SectionHeader } from './layout/SectionHeader'
import { FadeUp } from './ui/FadeUp'
import styles from './Skills.module.css'

type SkillsProps = {
  id?: string
  title: string
  description?: string
  categories: readonly SkillCategory[]
}

export function Skills({
  id = 'skills',
  title,
  description = 'Stack I use to take spatial problems from notebook to production.',
  categories,
}: SkillsProps) {
  return (
    <section className={styles.section} id={id} aria-labelledby="skills-heading">
      <Container>
        <SectionHeader
          eyebrow="Capabilities"
          title={title}
          description={description}
          titleId="skills-heading"
        />

        <ul className={styles.grid}>
          {categories.map((cat, i) => (
            <li key={cat.title} className={styles.card}>
              <FadeUp delay={i * 0.08}>
                <h3 className={styles.cardTitle}>{cat.title}</h3>
                <p className={styles.cardDesc}>{cat.description}</p>
                <ul className={styles.chips}>
                  {cat.items.map((item) => (
                    <li key={item} className={styles.chip}>
                      {item}
                    </li>
                  ))}
                </ul>
              </FadeUp>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
