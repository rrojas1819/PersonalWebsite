import '../styles/TechnicalSkills.css'
import SectionTitle from './SectionTitle'
import { useState } from 'react'

function TechnicalSkills() {
  const [activeTab, setActiveTab] = useState('Libraries & Frameworks')

  const categories = [
    'Libraries & Frameworks',
    'Languages',
    'Technologies & Tools',
  ]

  const skillsByCategory = {
    Languages: ['Java', 'Kotlin', 'Python', 'C', 'C++', 'JavaScript', 'HTML', 'CSS', 'SQL'],
    'Libraries & Frameworks': ['React.js', 'Node.js', 'Express.js', 'Spring Boot', 'Pandas', 'Maven', 'Gradle', 'JSoup', 'Selenium', 'JUnit'],
    'Technologies & Tools': ['AWS', 'Vim', 'RESTful APIs', 'PostgreSQL', 'MySQL', 'Git', 'GitHub', 'Bash/Shell Scripting', 'Figma', 'Postman', 'Android Studio', 'Docker', 'Supabase'],
  }

  const skills = skillsByCategory[activeTab] || skillsByCategory['Libraries & Frameworks']

  return (
    <section id="skills" className="technical-skills section">
      <div className="container">
        <SectionTitle subtitle="My expertise across various technologies and tools">
          Technical Skills
        </SectionTitle>
        <div className="skills-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`skills-tab ${activeTab === cat ? 'skills-tab-active' : ''}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="skills-wrap">
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-pill">
                <span className="skill-pill-name">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechnicalSkills
