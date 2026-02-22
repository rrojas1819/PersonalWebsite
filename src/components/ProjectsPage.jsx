import { useEffect } from 'react'
import ProjectCard from './ProjectCard'
import SectionTitle from './SectionTitle'
import Button from './Button'
import '../styles/Projects.css'
import { projectsData } from '../data/projectsData'

function ProjectsPage({ onBack, onSelectProject }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <section id="projects-page" className="projects section projects-page">
      <div className="container">
        <SectionTitle subtitle="All projects">Projects</SectionTitle>
        <div className="projects-grid">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} onSelect={onSelectProject} />
          ))}
        </div>
        <div className="projects-view-all">
          <Button onClick={onBack} variant="secondary">Back to Home</Button>
        </div>
      </div>
    </section>
  )
}

export default ProjectsPage
