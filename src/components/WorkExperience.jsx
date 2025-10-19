import '../styles/WorkExperience.css'

function WorkExperience({ experiences }) {
  return (
    <div className="work-experience">
      <h2 className="section-subtitle">Work Experience</h2>
      <div className="experience-list">
        {experiences.map((job, index) => (
          <div key={index} className="experience-card">
            <div className="experience-header">
              <h3 className="job-title">{job.title}</h3>
              <div className="job-company">{job.company}</div>
              <div className="job-location">{job.location}</div>
              <div className="job-duration">{job.duration}</div>
            </div>
            <p className="job-description">{job.description}</p>
            <div className="job-skills">
              {job.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="tech-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WorkExperience
