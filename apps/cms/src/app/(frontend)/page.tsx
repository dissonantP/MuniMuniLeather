import landingContent from '../../content/landing.json'
import './page.css'

export default function Home() {
  return (
    <main className="landing-page">
      <section className="landing-panel" aria-label="Muni Muni Leather">
        <div className="landing-copy">
          <h1>{landingContent.title}</h1>
          <p>{landingContent.subtitle}</p>
        </div>

        <div className="landing-image-placeholder" aria-label="Product image placeholder" />

        <a className="landing-cta" href="/app">
          {landingContent.cta}
        </a>
      </section>
    </main>
  )
}
