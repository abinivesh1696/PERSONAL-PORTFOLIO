import { motion } from 'framer-motion'

const Education = () => {
  const education = [
    {
      degree: 'B.E. in Computer Science Engineering',
      school: 'Hindusthan College Of Engineering and Technology',
      board: 'Anna University',
      year: '2022 – 2026',
      marks: '73%',
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      school: 'Swami Matric Hr Sec School, Ariyalur',
      board: 'State Board',
      year: '2020 – 2022',
      marks: '70%',
    },
    {
      degree: 'Secondary School Leaving Certificate (SSLC)',
      school: 'Swami Matric Hr Sec School, Ariyalur',
      board: 'State Board',
      year: '2019 – 2020',
      marks: '81%',
    },
  ]

  return (
    <section className="section" id="education">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          My academic background and qualifications
        </motion.p>

        <div className="education-grid">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              className="glass-card edu-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 * index }}
            >
              <h3 className="edu-degree">{edu.degree}</h3>
              <p className="edu-school">{edu.school}</p>
              <div className="edu-meta">
                <span className="edu-year">{edu.year}</span>
                <span className="edu-marks">{edu.board} — {edu.marks}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
