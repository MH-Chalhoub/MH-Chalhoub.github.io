import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Stats } from './components/Stats'
import { site } from './content/site'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#home">
        Skip to content
      </a>
      <Header brand={site.name} role={site.role} items={site.nav} />
      <main>
        <Hero
          headline={site.hero.headline}
          subhead={site.hero.subhead}
          tagline={site.tagline}
          primaryCta={site.hero.primaryCta}
          secondaryCta={site.hero.secondaryCta}
        />
        <Stats items={site.stats} />
        <About
          title={site.about.title}
          paragraphs={site.about.paragraphs}
          focus={site.about.focus}
        />
        <Skills title="Skills & tools" categories={site.skills} />
        <Projects title="Selected projects" projects={site.projects} />
        <Contact
          title={site.contact.title}
          blurb={site.contact.blurb}
          location={site.contact.location}
          links={site.contact.links}
        />
      </main>
      <Footer
        name={site.name}
        year={2026}
        quote={site.footer.quote}
        quoteAttribution={site.footer.quoteAttribution}
      />
    </>
  )
}
