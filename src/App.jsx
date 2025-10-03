import { useState } from 'react'

// Environment variables (baked at build time)
const GREETING = import.meta.env.VITE_GREETING || 'Hello from Worker App Runner!'

// Framer image URL
const FRAMER_IMAGE = {
  url: 'https://framerusercontent.com/images/BBrzgxVqhEQ79nEKs4nBY54c8Q.svg',
  alt: 'Framer Design Asset',
  fallback: false
}

function App() {
  const [imageError, setImageError] = useState(false)

  const handleImageError = () => {
    setImageError(true)
  }

  const appStyles = {
    fontFamily: 'system-ui, -apple-system, sans-serif',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '2rem',
    lineHeight: '1.6',
    color: '#333'
  }

  const headerStyles = {
    textAlign: 'center',
    marginBottom: '2rem'
  }

  const titleStyles = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    color: '#2563eb'
  }

  const greetingStyles = {
    fontSize: '2rem',
    fontWeight: '600',
    color: '#1f2937',
    textAlign: 'center',
    marginBottom: '2rem',
    padding: '1.5rem',
    backgroundColor: '#f0f9ff',
    borderRadius: '12px',
    border: '2px solid #0ea5e9'
  }

  const subtitleStyles = {
    fontSize: '1.1rem',
    color: '#666',
    marginBottom: '2rem'
  }

  const imagesSectionStyles = {
    marginBottom: '2rem',
    padding: '1.5rem',
    backgroundColor: '#f8fafc',
    borderRadius: '8px',
    border: '1px solid #e2e8f0'
  }

  const imageContainerStyles = {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: '1rem'
  }

  const imageStyles = {
    width: '200px',
    height: '200px',
    objectFit: 'contain',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    padding: '16px',
    backgroundColor: 'white'
  }

  return (
    <div style={appStyles}>
      <header style={headerStyles}>
        <h1 style={titleStyles}>Ratio1 Worker App Runner Demo</h1>
        <p style={subtitleStyles}>
          Push changes to your watched branch → auto-refresh → updated UI
        </p>
      </header>

      <div style={greetingStyles}>
        {GREETING}
      </div>

      <section style={imagesSectionStyles}>
        <h2 style={{ marginTop: 0, color: '#374151' }}>Framer Design Asset</h2>
        <p style={{ color: '#6b7280', marginBottom: '1rem' }}>
          Image loaded from Framer (with graceful fallback on load errors):
        </p>
        <div style={imageContainerStyles}>
          {!imageError && (
            <img
              src={FRAMER_IMAGE.url}
              alt={FRAMER_IMAGE.alt}
              style={imageStyles}
              onError={handleImageError}
              title={FRAMER_IMAGE.alt}
            />
          )}
        </div>
        {imageError && (
          <p style={{ color: '#dc2626', fontSize: '0.9rem', marginTop: '1rem' }}>
            Image failed to load and was hidden
          </p>
        )}
      </section>
    </div>
  )
}

export default App
