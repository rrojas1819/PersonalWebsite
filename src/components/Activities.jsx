import '../styles/Activities.css'
import SectionTitle from './SectionTitle'
import WorkExperience from './WorkExperience'
import Leadership from './Leadership'
import Certifications from './Certifications'
import Education from './Education'

function Activities() {
  const workExperience = [
    {
      title: 'UPS Store Associate',
      company: 'UPS',
      duration: 'Jul 2021 – Dec 2021',
      location: 'Linden, NJ',
      description: 'Assisted customers with domestic and international package shipments, including imports and exports.  Improved communication and problem-solving skills by handling daily logistics challenges and customer needs.',
      skills: ['Customer Service', 'Logistics', 'Problem Solving', 'Communication', 'Data Management']
    }
  ]

  const leadership = [
    {
      title: 'Founder/Coordinator',
      organization: 'CodeReview Circle (Self-Led)',
      duration: 'Sep 2024 – Present',
      description: 'Founded and coordinate a peer-run community focused on collaborative learning and skill development. Organize events and study sessions to help students advance their technical skills and career readiness.',
      achievements: ['Coordinated events for 40+ students', 'Led group study sessions for certification exams', 'Organized peer-run mock interviews', '4+ participants earned certifications']
    }
  ]

  const certifications = [
    {
      title: 'AWS Certified Cloud Practitioner',
      organization: 'Amazon Web Services',
      year: '2025',
      credentialUrl: 'https://www.credly.com/badges/85a5fe66-8f5b-423b-bd7d-f1e25cf34778/linked_in_profile'
    }
  ]

  const education = {
    degree: 'Bachelor of Science, Computer Science',
    school: 'New Jersey Institute of Technology',
    location: 'Newark, NJ',
    duration: 'Sep 2022 – May 2026',
    coursework: ['Data Structures & Algorithms', 'Analysis and Systems Design', 'Data Science', 'Database Systems', 'Computer Networks', 'Intensive Programming in Linux', 'Cybersecurity', 'Probability & Statistics', 'Data Visualization']
  }

  return (
    <section id="activities" className="activities section">
      <div className="container">
        <SectionTitle>Activities & Experience</SectionTitle>
        
        <div className="activities-content">
          <WorkExperience experiences={workExperience} />
          <Leadership leadership={leadership} />
          <Certifications certifications={certifications} />
          <Education education={education} />
        </div>
      </div>
    </section>
  )
}

export default Activities
