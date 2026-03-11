import coursifyLogo from '../assets/coursify.png'
import strandsLogo from '../assets/strands.png'
import websiteLogo from '../assets/website.png'
import milesplitLogo from '../assets/MilesplitParser.png'
import recessLogo from '../assets/RecessLogo.jpg'
import recessScreenshot from '../assets/RecessExample.jpg'

export const projectsData = [
  {
    id: 'recess',
    title: 'Recess',
    description: 'React Native and Expo mobile app that encourages intentional breaks and supports live campus location sharing. Supabase (PostgreSQL) backend with real-time presence tracking, row-level security, and Apple Maps campus hotspots.',
    technologies: ['React Native', 'Expo', 'Supabase', 'PostgreSQL', 'Apple Maps'],
    links: [
      { text: 'Devpost', url: 'https://devpost.com/software/recess-bi6pj4' },
      { text: 'GitHub', url: 'https://github.com/mduddin112203/Recess' }
    ],
    imagePlaceholder: 'Recess',
    logo: recessLogo,
    screenshot: recessScreenshot,
    bullets: [
      'Engineered a mobile application using React Native and Expo to encourage intentional break-taking and support live campus location sharing.',
      'Architected and deployed a Supabase (PostgreSQL) backend with real-time presence tracking, row-level security policies, and customizable friend-based visibility permissions.',
      'Integrated Apple Maps to display active campus hotspots and monitor live zone engagement.'
    ]
  },
  {
    id: 'strands',
    title: 'Strands',
    description: 'Multi-tenant salon booking platform, stress-tested for 100+ salons. Led code reviews and CI/CD for a 6-person team with 300+ commits and 80% unit test coverage.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'AWS'],
    links: [
      { text: 'Live', url: 'https://strands.click' },
      { text: 'Frontend', url: 'https://github.com/rrojas1819/Strands-Frontend' },
      { text: 'Backend', url: 'https://github.com/rrojas1819/Strands-Backend' }
    ],
    imagePlaceholder: 'STRANDS',
    logo: strandsLogo,
    videoUrl: 'https://www.youtube.com/watch?v=tbiK6APg2Cg',
    videoCredit: 'Video - Teammate Shams',
    bullets: [
      'Built multiple repositories for a multi-tenant salon booking platform (Node.js, Express, MySQL, React), stress-tested to handle 100+ salons and their associated clients and photos.',
      'Designed and normalized a 20+ table MySQL schema with audit triggers and indexing; reduced booking/analytics query time by 30%, improving transactional safety.',
      'Collaborated with a 6-person GitHub team, leading code reviews, enforcing PR approvals, and implementing a CI/CD pipeline; delivered 300+ commits across Frontend and Backend with 80% unit test coverage.'
    ]
  },
  {
    id: 'coursify',
    title: 'Coursify',
    description: 'React and Spring Boot scheduling service that uses an LLM to rank schedules for course selection, processing 500+ sections. Migrated 2,000+ courses to AWS MySQL, cutting infrastructure costs by 90%+.',
    technologies: ['React.js', 'Spring Boot', 'MySQL', 'AWS', 'LLM'],
    links: [
      { text: 'Live Demo', url: 'https://coursify1.com' },
      { text: 'GitHub', url: 'https://github.com/Ismail-Shaikh03/Coursify' }
    ],
    imagePlaceholder: 'Coursify Screenshot',
    logo: coursifyLogo,
    bullets: [
      'Developed a React and Spring Boot scheduling service that leverages an LLM to rank schedules under constraints to assist in course selection, processing 500+ course sections to automatically resolve conflicts and generate degree-aligned timetables.',
      'Migrated 2,000+ courses from Google Cloud MySQL to MySQL on AWS EC2, reducing infrastructure costs by 90%+.',
      'Implemented security best practices reducing unauthorized SSH and HTTP traffic by 70%, and blocked 50+ IPs.'
    ]
  },
  {
    id: 'milesplit-parser',
    title: 'Milesplit Parser',
    description: 'Automated Java scraping tool that processes meet results (1,000+ athletes) to extract team rosters into Excel. Cut data collection time by 85% and eliminated manual errors with a URL-based parser.',
    technologies: ['Java', 'JSoup', 'Selenium', 'Excel'],
    links: [
      { text: 'GitHub', url: 'https://github.com/rrojas1819/MilesplitTimeParser' }
    ],
    imagePlaceholder: 'Milesplit Parser',
    logo: milesplitLogo,
    bullets: [
      'Engineered an automated scraping tool using Java that processes meet results (1,000+ athletes) to accurately isolate and extract specific team rosters (80+ students) into Excel.',
      'Reduced data collection time by over 85% and eliminated manual entry errors by developing a URL-based parser that instantly structures raw web data.',
      'Optimized the workflow to handle high-volume event data, converting race results into clean spreadsheets.'
    ]
  },
  {
    id: 'personal-portfolio',
    title: 'Personal Portfolio Website',
    description: 'Responsive portfolio built with React and modern CSS. Smooth scrolling, project showcases, and mobile-first design.',
    technologies: ['React.js', 'CSS', 'HTML', 'JavaScript', 'Vite'],
    links: [
      { text: 'GitHub', url: 'https://github.com/rrojas1819' }
    ],
    imagePlaceholder: 'You are here!',
    logo: websiteLogo,
    bullets: [
      'Responsive portfolio built with React and modern CSS.',
      'Smooth scrolling, project showcases, and mobile-first design.'
    ]
  }
]
