import heroImg from './assets/leather-hero.jpg'
import './App.css'

function App() {
  return (
    <main className="page">
      <header className="site-header" aria-label="Site header">
        <a className="brand" href="#top">
          Muni Muni Leather
        </a>
        <a className="shop-link" href="mailto:hello@munimunileather.com">
          Contact
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Small batch leather goods</p>
          <h1>Muni Muni Leather</h1>
          <p className="intro">
            Minimal wallets, straps, and everyday pieces made with durable
            full-grain leather.
          </p>
          <a className="primary-link" href="mailto:hello@munimunileather.com">
            Ask about availability
          </a>
        </div>
        <img
          className="hero-image"
          src={heroImg}
          alt="Handcrafted brown leather wallet and strap on a clean tabletop"
        />
      </section>

      <section className="details" aria-label="Store highlights">
        <div>
          <h2>Made simply</h2>
          <p>Clean forms, quiet hardware, and leather that wears in over time.</p>
        </div>
        <div>
          <h2>Built to use</h2>
          <p>Every piece starts with practical carry, strong stitching, and a restrained finish.</p>
        </div>
      </section>

      <footer className="footer">
        <span>Muni Muni Leather</span>
        <a href="mailto:hello@munimunileather.com">hello@munimunileather.com</a>
      </footer>
    </main>
  )
}

export default App
