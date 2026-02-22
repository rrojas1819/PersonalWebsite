import '../styles/Achievements.css'
import SectionTitle from './SectionTitle'

// TODO: Add achievements data Later on
function Achievements() {
  const achievements = [
    { text: 'Achievement or award 1' },
    { text: 'Achievement or award 2' },
    { text: 'Achievement or award 3' },
    { text: 'Role or recognition 4' },
    { text: 'Role or recognition 5' },
    { text: 'Role or recognition 6' },
    { text: 'Research or project 7' },
    { text: 'Research or project 8' },
    { text: 'Research or project 9' },
  ]

  const categoryTags = ['Technical Leadership', 'Hackathon Winner', 'Research', 'Gaming']

  return (
    <section id="achievements" className="achievements section">
      <div className="container">
        <SectionTitle subtitle="Recognition and milestones from my technical journey">
          Achievements
        </SectionTitle>
        <div className="achievements-grid">
          {achievements.map((item, index) => (
            <div key={index} className="achievement-card">
              <span className="achievement-card-icon" aria-hidden />
              <span className="achievement-card-text">{item.text}</span>
            </div>
          ))}
        </div>
        <div className="achievements-tags">
          {categoryTags.map((tag) => (
            <span key={tag} className="achievement-tag">{tag}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
