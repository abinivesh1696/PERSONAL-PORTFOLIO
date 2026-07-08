import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { FaBriefcase, FaExchangeAlt } from 'react-icons/fa'
import skillSwapBanner from '../assets/SkillSwap.png'
import connectWithBanner from '../assets/connectwith-banner.png'

const Projects = () => {
  const projects = [
    {
      title: 'Job Portal Website',
      period: 'April 2026 – June 2026',
      description:
        'Built a responsive frontend using React.js and modern UI components for an engaging user experience across devices. Implemented secure backend services with Node.js, Express.js, and MongoDB for authentication, data storage, and API management.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
      icon: <FaBriefcase />,
      color: '#6c63ff',
      image: connectWithBanner,
      liveUrl: 'https://connect-with-job-portal.vercel.app/',
      codeUrl: 'https://github.com/abinivesh1696/ConnectWith-Job-portal',
    },
    {
      title: 'Skill Swap Web',
      period: 'January 2026 – March 2026',
      description:
        'Developed a skill-sharing platform that enables users to exchange and learn new skills. Implemented user authentication, profile management, request management features and user-friendly interfaces using React.js and Bootstrap.',
      tech: ['React.js', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
      icon: <FaExchangeAlt />,
      color: '#00d4aa',
      image: skillSwapBanner,
      liveUrl: 'https://skill-swap-yuph.vercel.app/',
      codeUrl: 'https://github.com/abinivesh1696/SkillSwap',
    },
  ]

  return (
    <section className="section" id="projects">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Some of the projects I've built and contributed to
        </motion.p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="glass-card project-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
            >
              <div className="project-image">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="project-image-banner" />
                ) : (
                  <div
                    className="project-image-gradient"
                    style={{
                      background: `linear-gradient(135deg, ${project.color}33 0%, ${project.color}11 100%)`,
                    }}
                  >
                    <span className="project-image-icon" style={{ color: project.color }}>
                      {project.icon}
                    </span>
                  </div>
                )}
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-period">{project.period}</p>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span key={t} className="project-tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.codeUrl || '#'}
                    target={project.codeUrl ? '_blank' : undefined}
                    rel={project.codeUrl ? 'noopener noreferrer' : undefined}
                    className="project-link"
                  >
                    <FiGithub /> Code
                  </a>
                  <a
                    href={project.liveUrl || '#'}
                    target={project.liveUrl ? '_blank' : undefined}
                    rel={project.liveUrl ? 'noopener noreferrer' : undefined}
                    className="project-link"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
