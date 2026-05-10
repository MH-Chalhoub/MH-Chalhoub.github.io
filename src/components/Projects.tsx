import type { Project } from '../content/types'
import { Container } from './layout/Container'
import { SectionHeader } from './layout/SectionHeader'
import { FadeUp } from './ui/FadeUp'
import styles from './Projects.module.css'

type ProjectsProps = {
  id?: string
  title: string
  description?: string
  projects: readonly Project[]
}

export function Projects({
  id = 'projects',
  title,
  description = 'Representative work — swap in repos, papers, or map demos as you publish them.',
  projects,
}: ProjectsProps) {
  return (
    <section className={styles.section} id={id} aria-labelledby="projects-heading">
      <Container>
        <SectionHeader
          eyebrow="Portfolio"
          title={title}
          description={description}
          titleId="projects-heading"
        />

        <ul className={styles.grid}>
          {projects.map((project, i) => (
            <li key={project.title} className={styles.item}>
              <FadeUp delay={i * 0.09}>
                <article className={styles.card}>
                  <div className={styles.cardTop}>
                    <h3 className={styles.cardTitle}>{project.title}</h3>
                    <span className={styles.badge} aria-hidden>
                      GeoAI
                    </span>
                  </div>
                  <p className={styles.summary}>{project.summary}</p>
                  <ul className={styles.tags}>
                    {project.tags.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  {project.href ? (
                    <a className={styles.link} href={project.href}>
                      View details
                      <span aria-hidden> →</span>
                    </a>
                  ) : (
                    <p className={styles.placeholder}>Details coming soon</p>
                  )}
                </article>
              </FadeUp>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
