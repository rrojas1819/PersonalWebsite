import '../styles/ProjectCard.css'

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-image">
        {project.logo ? (
          <img 
            src={project.logo} 
            alt={project.title} 
            className={`project-logo ${project.title === 'Coursify' ? 'coursify-logo' : ''}`} 
          />
        ) : (
          <div className="project-placeholder">{project.imagePlaceholder}</div>
        )}
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tech">
          {project.technologies && project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        <div className="project-links">
          {project.links && project.links.map((link, index) => (
            <a key={index} href={link.url} className="project-link">
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
