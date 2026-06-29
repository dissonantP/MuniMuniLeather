import landingContent from './content/landing.json'
import './App.css'

function App() {
  return (
    <main className="landing-page">
      <section className="landing-panel" aria-label="Muni Muni Leather">
        <div className="landing-copy">
          <h1>{landingContent.title}</h1>
          <p>{landingContent.subtitle}</p>
        </div>

        <div className="landing-image-placeholder" aria-label="Product image placeholder" />

        <a className="landing-cta" href="#wares">
          {landingContent.cta}
        </a>
      </section>
    </main>
  )
}

export default App
