import '../styles/Leadership.css'

function Leadership({ leadership }) {
  return (
    <div className="leadership">
      <h2 className="section-subtitle">Leadership & Involvement</h2>
      <div className="leadership-list">
        {leadership.map((role, index) => (
          <div key={index} className="leadership-card">
            <div className="leadership-header">
              <h3 className="role-title">{role.title}</h3>
              <div className="role-organization">{role.organization}</div>
              <div className="role-duration">{role.duration}</div>
            </div>
            <p className="role-description">{role.description}</p>
            <div className="role-achievements">
              <h4>Key Achievements:</h4>
              <ul>
                {role.achievements.map((achievement, achIndex) => (
                  <li key={achIndex}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Leadership
