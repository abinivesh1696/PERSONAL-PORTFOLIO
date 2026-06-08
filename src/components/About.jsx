import { motion } from 'framer-motion'
import { FiMapPin, FiMail, FiPhone, FiBriefcase } from 'react-icons/fi'

const About = () => {
  const codeLines = [
    { num: 1, content: <><span className="code-keyword">const</span> <span className="code-variable">developer</span> <span className="code-bracket">=</span> <span className="code-bracket">{'{'}</span></> },
    { num: 2, content: <>&nbsp;&nbsp;name: <span className="code-string">"Abinivesh KV"</span>,</> },
    { num: 3, content: <>&nbsp;&nbsp;role: <span className="code-string">"Frontend Developer"</span>,</> },
    { num: 4, content: <>&nbsp;&nbsp;location: <span className="code-string">"Chennai, TN"</span>,</> },
    { num: 5, content: <>&nbsp;&nbsp;education: <span className="code-string">"B.E. CSE"</span>,</> },
    { num: 6, content: <>&nbsp;&nbsp;passion: <span className="code-string">"Building UIs"</span>,</> },
    { num: 7, content: <>&nbsp;&nbsp;available: <span className="code-keyword">true</span>,</> },
    { num: 8, content: <><span className="code-bracket">{'}'}</span>;</> },
    { num: 9, content: <><span className="code-comment">// Let's build something great!</span></> },
  ]

  return (
    <section className="section" id="about">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          A quick overview of who I am and what drives me
        </motion.p>

        <div className="about-grid">
          <motion.div
            className="about-image-container"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="about-image-card">
              <div className="about-code-block">
                {codeLines.map((line, index) => (
                  <motion.div
                    key={line.num}
                    className="code-line"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                  >
                    <span className="code-line-number">{line.num}</span>
                    {line.content}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-details"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3>
              Crafting Digital Experiences with <span className="gradient-text">Passion</span>
            </h3>
            <p className="about-text">
              I'm a passionate Frontend Developer with 6 months of internship experience at 
              Besant Technologies. I specialize in building responsive and interactive web 
              applications using React.js, JavaScript, and modern CSS. As a B.E. Computer 
              Science graduate from Hindusthan College of Engineering and Technology, I combine 
              strong technical foundations with creative problem-solving abilities.
            </p>
            <p className="about-text">
              I'm a quick learner, team player, and creative problem solver, ready to 
              contribute innovative ideas to dynamic development teams. I believe in writing 
              clean, maintainable code and creating seamless user experiences.
            </p>

            <div className="about-info-grid">
              <div className="about-info-item">
                <FiMapPin className="about-info-icon" />
                <div>
                  <div className="about-info-label">Location</div>
                  <div className="about-info-value">Chennai, Tamil Nadu</div>
                </div>
              </div>
              <div className="about-info-item">
                <FiMail className="about-info-icon" />
                <div>
                  <div className="about-info-label">Email</div>
                  <div className="about-info-value">abiniveshk@gmail.com</div>
                </div>
              </div>
              <div className="about-info-item">
                <FiPhone className="about-info-icon" />
                <div>
                  <div className="about-info-label">Phone</div>
                  <div className="about-info-value">8248633996</div>
                </div>
              </div>
              <div className="about-info-item">
                <FiBriefcase className="about-info-icon" />
                <div>
                  <div className="about-info-label">Experience</div>
                  <div className="about-info-value">6+ Months</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
