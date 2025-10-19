import '../styles/Education.css'

function Education({ education }) {
  return (
    <div className="education">
      <h2 className="section-subtitle">Education</h2>
      <div className="education-card">
        <div className="education-header">
          <h3 className="degree-title">{education.degree}</h3>
          <div className="school-name">{education.school}</div>
          <div className="school-location">{education.location}</div>
          <div className="education-duration">{education.duration}</div>
        </div>
        <div className="coursework">
          <h4>Relevant Coursework:</h4>
          <div className="coursework-tags">
            {education.coursework.map((course, courseIndex) => (
              <span key={courseIndex} className="tech-tag">{course}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
