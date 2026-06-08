import { motion } from 'framer-motion'
import { FiAward } from 'react-icons/fi'
import { FaAws, FaJava } from 'react-icons/fa'

const Certifications = () => {
  const certs = [
    {
      title: 'HTML, CSS, Bootstrap, JavaScript & React.js',
      issuer: 'Besant Technologies',
      icon: <FiAward />,
    },
    {
      title: 'Java Fundamentals Certification',
      issuer: 'IBM',
      icon: <FaJava />,
    },
    {
      title: 'AWS Academy Cloud Foundations',
      issuer: 'ICT Academy',
      icon: <FaAws />,
    },
  ]

  return (
    <section className="section" id="certifications">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Certifications
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Professional certifications and courses completed
        </motion.p>

        <div className="certifications-grid">
          {certs.map((cert, index) => (
            <motion.div
              key={cert.title}
              className="glass-card cert-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 * index }}
            >
              <div className="cert-icon">{cert.icon}</div>
              <div className="cert-details">
                <h4>{cert.title}</h4>
                <p className="cert-issuer">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
