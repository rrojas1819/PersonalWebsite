import ProjectCard from './ProjectCard'
import SectionTitle from './SectionTitle'
import '../styles/Projects.css'
import coursifyLogo from '../assets/coursify.png'
import siliconGuideLogo from '../assets/siliconGuide.png'

function Projects() {
  const projects = [
    {
      title: 'Strands',
      description: 'A comprehensive salon management web app that unifies salon owners, employees, customers, and admins in one platform. Enables online booking and payments for customers, staff and schedule management for owners, and verification and reporting for admins.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'JWT', 'AWS'],
      links: [
        { text: 'Frontend', url: 'https://github.com/rrojas1819/strands-frontend' },
        { text: 'Backend', url: 'https://github.com/rrojas1819/strands-backend' }
      ],
      imagePlaceholder: 'STRANDS',
      logo: null
    },
    {
      title: 'Coursify',
      description: 'Led development of a schedule planner website that generates conflict-free schedules for NJIT students. Integrated OpenAI assistant for course suggestions and migrated 2,000+ courses to AWS MySQL, reducing infrastructure costs by 97%.',
      technologies: ['React.js', 'Spring Boot', 'MySQL', 'AWS', 'OpenAI','Python','JavaScript','HTML','CSS','Node.js'],
      links: [
        { text: 'Live Demo', url: 'https://coursify1.com' },
        { text: 'GitHub', url: 'https://github.com/Ismail-Shaikh03/Coursify' }
      ],
      imagePlaceholder: 'Coursify Screenshot',
      logo: coursifyLogo
    },
    {
      title: 'Silicon Guide',
      description: 'AI-driven PC builder website that recommends computer parts across 500+ components based on user budget and workload. Developed integrity-check mechanisms and integrated OpenAI for intelligent part recommendations.',
      technologies: ['React.js', 'Express.js', 'MongoDB', 'AWS', 'OpenAI'],
      links: [
        { text: 'Live Demo', url: 'https://siliconguideai.com' },
        { text: 'GitHub', url: 'https://github.com/jonathanmal1119/SiliconGuide' }
      ],
      imagePlaceholder: 'Silicon Guide Screenshot',
      logo: siliconGuideLogo
    },
    {
      title: 'Personal Portfolio Website',
      description: 'A responsive portfolio website built with React.js and modern CSS. Features smooth scrolling navigation, project showcases, contact form, and mobile-first responsive design. Demonstrates front-end development skills and clean code practices.',
      technologies: ['React.js', 'CSS', 'HTML', 'JavaScript', 'Vite'],
      links: [
        { text: 'GitHub', url: 'https://github.com/rrojas1819' }
      ],
      imagePlaceholder: 'You are here!',
      logo: null
    }
  ]

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <SectionTitle>Featured Projects</SectionTitle>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
