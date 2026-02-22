import '../styles/Hero.css'
import Button from './Button'

function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <section id="hero" className="hero section">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Hi, I'm Richie Rojas</h1>
          <p className="hero-subtitle">Computer Science Student & Full-Stack Developer</p>
          <p className="hero-description">
            I build full-stack applications with React, Spring Boot, AWS, Node.js, and more—focused on real-world impact and user-friendly experiences. I'm pursuing my Bachelor's at NJIT and seeking a role that fits my skillset and growth goals.
          </p>
          <div className="hero-actions">
            <Button onClick={() => scrollToSection('projects')} variant="primary">
              View My Work
            </Button>
            <Button href="/resume.pdf" variant="secondary">
              Resume
            </Button>
          </div>
          <div className="hero-social">
            <a href="https://github.com/rrojas1819" target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="GitHub">
              <svg className="hero-social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
            <a href="https://linkedin.com/in/richierr" target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="LinkedIn">
              <svg className="hero-social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="mailto:rrojas181920@gmail.com" className="hero-social-link" aria-label="Email">
              <svg className="hero-social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
          </div>
        </div>
        {/* No image for now – single column layout */}
      </div>
    </section>
  )
}

export default Hero
