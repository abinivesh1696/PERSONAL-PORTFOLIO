import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      role: 'Frontend Developer Intern',
      company: 'Besant Technologies',
      date: 'January 2026 – Present',
      points: [
        'Strengthened proficiency in HTML, CSS, and JavaScript, applying theoretical knowledge to practical scenarios during the internship.',
        'Gained exposure to frontend frameworks and libraries such as Bootstrap and React.js, acquiring valuable insights into industry best practices and coding standards.',
        'Developed responsive and interactive user interfaces using React.js, HTML, CSS, Bootstrap and JavaScript.',
        'Built reusable React components and optimized frontend architecture for better scalability and maintainability.',
        'Implemented client-side routing, dynamic rendering, and modern UI functionalities using React Router.',
      ],
    },
  ]

  return (
    <section className="section" id="experience">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Professional Experience
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          My journey in the world of web development
        </motion.p>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
            >
              <div className="timeline-dot"></div>
              <div className="glass-card timeline-card">
                <div className="timeline-header">
                  <h3 className="timeline-role">{exp.role}</h3>
                  <span className="timeline-date">{exp.date}</span>
                </div>
                <p className="timeline-company">{exp.company}</p>
                <ul className="timeline-description">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
