import '../styles/About.css'
import SectionTitle from './SectionTitle'

function About() {
  const skills = [
    'Java', 'Python', 'JavaScript', 'React.js', 'Spring Boot', 'Node.js', 
    'Express.js', 'AWS', 'MySQL', 'MongoDB', 'PostgreSQL', 'Git', 
    'C/C++', 'SQL', 'HTML/CSS', 'PyTorch'
  ]

  return (
    <section id="about" className="about section">
      <div className="container">
        <SectionTitle>About Me</SectionTitle>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a <strong>Computer Science</strong> student at New Jersey Institute of Technology with a passion for 
              full-stack development and AI integration. I specialize in building scalable web applications 
              using React.js, Spring Boot, and cloud technologies like AWS.
            </p>
            <p>
              As the founder of <strong>CodeReview Circle</strong>, I coordinate peer-run events for 40+ students, 
              leading code reviews, collaborative coding sessions, and workshops. I'm also an 
              AWS Certified Cloud Practitioner with experience in deploying secure, scalable applications.
            </p>
          </div>
          <div className="skills">
            <h3>Skills & Technologies</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
