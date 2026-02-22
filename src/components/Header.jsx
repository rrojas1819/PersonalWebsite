import '../styles/Header.css'

function Header({ view, setView, setSelectedProjectId, scrollToSection }) {
  const goHome = (e, sectionId) => {
    e.preventDefault()
    setView('home')
    if (sectionId) setTimeout(() => scrollToSection(sectionId), 50)
  }

  const goToProjects = (e) => {
    e.preventDefault()
    if (setSelectedProjectId) setSelectedProjectId(null)
    setView('projects')
  }

  return (
    <header className="header">
      <nav className="nav container">
        <a href="#hero" className="nav-brand" onClick={(e) => goHome(e, 'hero')}>
          Richie Rojas
        </a>
        <ul className="nav-links">
            <li>
              <a href="#hero" className={`nav-link ${view === 'home' ? 'nav-link-active' : ''}`} onClick={(e) => goHome(e, 'hero')}>Home</a>
            </li>
            <li>
              <a href="#about" className={`nav-link ${view === 'about' ? 'nav-link-active' : ''}`} onClick={(e) => { e.preventDefault(); setView('about') }}>About</a>
            </li>
            <li>
              <a href="#activities" className="nav-link" onClick={(e) => goHome(e, 'activities')}>Experience</a>
            </li>
            <li>
              <a href="#projects" className={`nav-link ${view === 'projects' || view === 'project' ? 'nav-link-active' : ''}`} onClick={goToProjects}>Projects</a>
            </li>
            <li>
              <a href="#contact" className="nav-link" onClick={(e) => goHome(e, 'contact')}>Contact</a>
            </li>
          </ul>
      </nav>
    </header>
  )
}

export default Header
