import '../styles/Hero.css'
import Button from './Button'

function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section id="hero" className="hero section">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Richie Rojas</h1>
          <p className="hero-subtitle">Computer Science Student & Full-Stack Developer</p>
          <p className="hero-description">
            I love building innovative web applications that have some real-world impact and are user-friendly. 
            Currently pursuing my Bachelor's in Computer Science at NJIT with expertise in 
            React.js, Spring Boot, AWS, and machine learning technologies.
          </p>
          <div className="hero-actions">
            <Button onClick={() => scrollToSection('projects')} variant="primary">View My Work</Button>
            <Button onClick={() => scrollToSection('contact')} variant="secondary">Get In Touch</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
