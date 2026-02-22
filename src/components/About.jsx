import { useEffect } from 'react'
import '../styles/About.css'
import SectionTitle from './SectionTitle'

function About() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const skillsByCategory = {
    Languages: ['Java', 'Kotlin', 'Python', 'C', 'C++', 'JavaScript', 'HTML', 'CSS', 'SQL'],
    'Libraries & Frameworks': ['React.js', 'Node.js', 'Express.js', 'Spring Boot', 'Pandas', 'Maven', 'Gradle', 'JSoup', 'Selenium', 'JUnit'],
    'Technologies & Tools': ['AWS', 'Vim', 'RESTful APIs', 'PostgreSQL', 'MySQL', 'Git', 'GitHub', 'Bash/Shell Scripting', 'Figma', 'Postman', 'Android Studio', 'Docker', 'Supabase'],
  }
  const categoryOrder = ['Languages', 'Libraries & Frameworks', 'Technologies & Tools']

  return (
    <section id="about" className="about section">
      <div className="container">
        <SectionTitle subtitle="Get to know more about my background and skills">
          About Me
        </SectionTitle>
        <div className="about-content">
          <div className="about-text">
            <h3 className="about-subheading">Who I Am</h3>
            <p>
              I'm a <strong>Computer Science</strong> student at New Jersey Institute of Technology with a passion for
              full-stack development and AI integration. I specialize in building scalable web applications
              using React.js, Node.js, and cloud technologies like AWS.
            </p>
            <p>
              As the founder of <strong>CodeReview Circle</strong>, I coordinate peer-run events for 10+ students,
              leading code reviews, collaborative coding sessions, and workshops. I'm also an
              AWS Certified Cloud Practitioner with experience in deploying secure, scalable applications.
            </p>
            <h3 className="about-subheading">Education</h3>
            <div className="about-education-card">
              <p className="about-degree"><strong>Bachelor of Science, Computer Science</strong></p>
              <p className="about-school">New Jersey Institute of Technology</p>
              <p className="about-meta">
                <span>Sept 2022 – May 2026</span>
                <span className="about-location">Newark, New Jersey, USA</span>
              </p>
            </div>
          </div>
          <div className="skills">
            <h3 className="skills-main-title">Skills</h3>
            {categoryOrder.map((cat) => (
              <div key={cat} className="skills-category">
                <h4 className="skills-category-title">{cat}</h4>
                <div className="skills-grid">
                  {(skillsByCategory[cat] || []).map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
