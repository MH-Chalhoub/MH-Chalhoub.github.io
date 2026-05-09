import { Container } from './layout/Container'
import styles from './Footer.module.css'

type FooterProps = {
  name: string
  year: number
  quote?: string
  quoteAttribution?: string
}

export function Footer({ name, year, quote, quoteAttribution }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        {quote ? (
          <blockquote className={styles.quote}>
            <p>“{quote}”</p>
            {quoteAttribution ? <cite>— {quoteAttribution}</cite> : null}
          </blockquote>
        ) : null}
        <p className={styles.text}>
          © {year} {name}. Built with React, TypeScript, and Vite.
        </p>
      </Container>
    </footer>
  )
}
