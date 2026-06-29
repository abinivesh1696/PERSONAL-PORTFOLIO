import { motion } from 'framer-motion'
import { FiCode, FiTool, FiUsers } from 'react-icons/fi'

const Skills = () => {
  const categories = [
    {
      icon: <FiCode />,
      iconClass: 'tech',
      title: 'Technical Skills',
      skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Bootstrap', 'Node.js', 'Express.js', 'SQL', 'MongoDB'],
    },
    {
      icon: <FiTool />,
      iconClass: 'tools',
      title: 'Tools & Technologies',
      skills: ['Git & GitHub', 'VS Code', 'REST APIs', 'NPM', 'Responsive Design'],
    },
    {
      icon: <FiUsers />,
      iconClass: 'soft',
      title: 'Soft Skills',
      skills: ['Good Communication', 'Leadership', 'Team Oriented', 'Result Driven', 'Hard Working', 'Problem Solving', 'Quick Learner'],
    },
  ]

  return (
    <section className="section" id="skills">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills & Expertise
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Technologies and abilities I bring to every project
        </motion.p>

        <div className="skills-grid">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.title}
              className="glass-card skill-category"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 * index }}
            >
              <div className={`skill-category-icon ${cat.iconClass}`}>
                {cat.icon}
              </div>
              <h3>{cat.title}</h3>
              <div className="skill-tags">
                {cat.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
