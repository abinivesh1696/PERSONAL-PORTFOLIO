import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Particles from './components/Particles'
import BackToTop from './components/BackToTop'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
      const saved = localStorage.getItem('isDarkMode')
      return saved !== null ? JSON.parse(saved) : false
    } catch (e) {
      return false
    }
  })

  useEffect(() => {
    // persist preference and apply theme to document
    try {
      localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode))
    } catch (e) {}

    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
    }
  }, [isDarkMode])

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section, .hero')
      const scrollPos = window.scrollY + 200

      sections.forEach((section) => {
        const top = section.offsetTop
        const height = section.offsetHeight
        const id = section.getAttribute('id')

        if (scrollPos >= top && scrollPos < top + height && id) {
          setActiveSection(id)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Particles />
      <Navbar activeSection={activeSection} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}

export default App
