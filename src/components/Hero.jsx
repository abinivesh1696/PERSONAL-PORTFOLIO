import { motion } from 'framer-motion'
import { FiMail, FiArrowRight, FiEye } from 'react-icons/fi'
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa'
import profilePhoto from '../assets/portfolio-image1.png'

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="hero-badge">
            <span className="dot"></span>
            Available for Opportunities
          </div>
          <h1 className="hero-title">
            Hi, I'm
            <span className="hero-name"> ABINIVESH KV</span>
          </h1>
          <p className="hero-role">Frontend Developer</p>
          <p className="hero-description">
            Passionate and skilled frontend developer with hands-on experience creating 
            and implementing innovative web designs. Proficient in React.js, JavaScript, 
            and modern web technologies.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              <FiMail />
              Get In Touch
            </a>
            <a href="/resume.pdf" className="btn btn-outline" target="_blank" rel="noopener noreferrer" aria-label="View resume">
              <FiEye />
              View Resume
            </a>
            <a href="#projects" className="btn btn-outline">
              <FiArrowRight />
              View Projects
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-value">6+</div>
              <div className="stat-label">Months Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">4+</div>
              <div className="stat-label">Projects Built</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">7+</div>
              <div className="stat-label">Technologies</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          <div className="hero-avatar-wrapper">
            <div className="hero-avatar-ring"></div>
            <div className="hero-avatar">
              <img
                src={profilePhoto}
                alt="Abinivesh KV portrait"
                className="hero-avatar-image"
              />
            </div>
            <div className="hero-avatar-glow"></div>
            <motion.div
              className="floating-icon"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <FaReact color="#61DAFB" />
            </motion.div>
            <motion.div
              className="floating-icon"
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <FaJs color="#F7DF1E" />
            </motion.div>
            <motion.div
              className="floating-icon"
              animate={{ y: [-8, 12, -8] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <FaHtml5 color="#E34F26" />
            </motion.div>
            <motion.div
              className="floating-icon"
              animate={{ y: [12, -8, 12] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <FaCss3Alt color="#1572B6" />
            </motion.div>
            <motion.div
              className="floating-icon"
              animate={{ y: [-12, 8, -12] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <FaNodeJs color="#339933" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
