import { useEffect } from 'react'
import Button from './Button'
import '../styles/ProjectDetail.css'

function getVideoEmbed(url) {
  if (!url || typeof url !== 'string') return null
  const u = url.trim()
  const ytMatch = u.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/)
  if (ytMatch) return { type: 'youtube', src: `https://www.youtube.com/embed/${ytMatch[1]}?modestbranding=1&rel=0` }
  const vimeoMatch = u.match(/vimeo\.com\/(?:video\/)?(\d+)/)
  if (vimeoMatch) return { type: 'vimeo', src: `https://player.vimeo.com/video/${vimeoMatch[1]}` }
  return { type: 'video', src: u }
}

function ProjectDetail({ project, onBack }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const videoEmbed = project.videoUrl ? getVideoEmbed(project.videoUrl) : null
  const descriptionText = project.longDescription || project.description
  const descriptionParagraphs = descriptionText ? descriptionText.split('\n').filter(Boolean) : []
  const bullets = project.bullets || []

  return (
    <section id="project-detail" className="project-detail section">
      <div className="container project-detail-container">
        <div className="project-detail-actions">
          <Button onClick={onBack} variant="secondary">Back to Projects</Button>
        </div>
        <h1 className="project-detail-title">{project.title}</h1>

        {!videoEmbed && (
          <div className="project-detail-image-wrap">
            {project.logo ? (
              <img
                src={project.logo}
                alt={project.title}
                className={`project-detail-image ${project.title === 'Coursify' ? 'coursify-logo' : ''}`}
              />
            ) : (
              <div className="project-detail-placeholder">{project.imagePlaceholder}</div>
            )}
          </div>
        )}

        {videoEmbed && (
          <>
            <div className="project-detail-video-wrap">
              {videoEmbed.type === 'video' ? (
                <video
                  className="project-detail-video"
                  src={videoEmbed.src}
                  controls
                  title={project.title}
                />
              ) : (
                <iframe
                  className="project-detail-video"
                  src={videoEmbed.src}
                  title={project.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
            {project.videoCredit && (
              <p className="project-detail-video-credit">{project.videoCredit}</p>
            )}
          </>
        )}

        {bullets.length > 0 ? (
          <ul className="project-detail-bullets">
            {bullets.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>
        ) : (
          <div className="project-detail-description">
            {descriptionParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        )}

        {project.technologies && project.technologies.length > 0 && (
          <div className="project-detail-tech">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        )}

        {project.links && project.links.length > 0 && (
          <div className="project-detail-links">
            {project.links.map((link, index) => (
              <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="project-link">
                {link.text}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default ProjectDetail
