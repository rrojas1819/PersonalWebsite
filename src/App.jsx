import './styles/App.css'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import ProjectsPage from './components/ProjectsPage'
import ProjectDetail from './components/ProjectDetail'
import TechnicalSkills from './components/TechnicalSkills'
import Activities from './components/Activities'
// import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import { projectsData } from './data/projectsData'

function App() {
  const [view, setView] = useState('home')
  const [selectedProjectId, setSelectedProjectId] = useState(null)

  const goToProject = (id) => {
    setSelectedProjectId(id)
    setView('project')
  }

  const goBackFromProject = () => {
    setSelectedProjectId(null)
    setView('projects')
  }

  useEffect(() => {
    if (view === 'project' && selectedProjectId && !projectsData.find((p) => p.id === selectedProjectId)) {
      setView('projects')
      setSelectedProjectId(null)
    }
  }, [view, selectedProjectId])

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const selectedProject = selectedProjectId
    ? projectsData.find((p) => p.id === selectedProjectId)
    : null

  return (
    <div className="app">
      <Header view={view} setView={setView} setSelectedProjectId={setSelectedProjectId} scrollToSection={scrollToSection} />
      <main className="main">
        {view === 'home' && (
          <>
            <Hero />
            <Projects onViewAllProjects={() => setView('projects')} onSelectProject={goToProject} />
            <TechnicalSkills />
            <Activities />
            {/* <Achievements /> */}
            <Contact />
          </>
        )}
        {view === 'about' && <About />}
        {view === 'projects' && (
          <ProjectsPage onBack={() => setView('home')} onSelectProject={goToProject} />
        )}
        {view === 'project' && selectedProject && (
          <ProjectDetail project={selectedProject} onBack={goBackFromProject} />
        )}
      </main>
      <Footer setView={setView} scrollToSection={scrollToSection} />
      <ScrollToTop />
    </div>
  )
}

export default App
