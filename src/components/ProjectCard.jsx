import '../styles/ProjectCard.css'

function ProjectCard({ project, onSelect }) {
  const handleCardClick = () => {
    if (onSelect && project.id) onSelect(project.id)
  }

  return (
    <div
      className={`project-card ${onSelect ? 'project-card-clickable' : ''}`}
      onClick={onSelect ? handleCardClick : undefined}
      role={onSelect ? 'button' : undefined}
      tabIndex={onSelect ? 0 : undefined}
      onKeyDown={onSelect ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleCardClick() } } : undefined}
    >
      <div className={`project-image ${project.title === 'Recess' ? 'recess-image-wrap' : ''}`}>
        {project.logo ? (
          <img 
            src={project.logo} 
            alt={project.title} 
            className={`project-logo ${project.title === 'Coursify' ? 'coursify-logo' : ''} ${project.title === 'Recess' ? 'recess-logo' : ''}`} 
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
            <a
              key={index}
              href={link.url}
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
