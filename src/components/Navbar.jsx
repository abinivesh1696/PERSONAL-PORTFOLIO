import { useState, useEffect } from 'react'
import { FiSun, FiMoon, FiDownload } from 'react-icons/fi'

const Navbar = ({ activeSection, isDarkMode, setIsDarkMode }) => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ]

  const handleNavClick = (id) => {
    setMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="container">
        <a href="#home" className="nav-logo" onClick={() => handleNavClick('home')}>
          &lt;AK /&gt;
        </a>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.id)
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="nav-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <a
          className="resume-btn"
          href="/resume.pdf"
          download
          aria-label="Download resume"
          title="Download resume"
        >
          <FiDownload size={18} />
          <span className="resume-text">Resume</span>
        </a>

        <button
          className="theme-toggle"
          onClick={() => setIsDarkMode(!isDarkMode)}
          aria-label="Toggle theme"
          title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
