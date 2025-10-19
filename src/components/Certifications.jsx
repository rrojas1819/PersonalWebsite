import '../styles/Certifications.css'

function Certifications({ certifications }) {
  return (
    <div className="certifications">
      <h2 className="section-subtitle">Certifications</h2>
      <div className="certification-list">
        {certifications.map((cert, index) => (
          <div key={index} className="certification-card">
            <div className="cert-header">
              <h3 className="cert-title">{cert.title}</h3>
              <div className="cert-organization">{cert.organization}</div>
              <div className="cert-year">{cert.year}</div>
            </div>
            {cert.credentialUrl && (
              <div className="cert-actions">
                <a 
                  href={cert.credentialUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="cert-button"
                >
                  View Credential
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Certifications
