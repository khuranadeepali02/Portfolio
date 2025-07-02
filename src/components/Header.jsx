import React, { useState, useEffect } from 'react'
import { useTheme } from '../contexts/ThemeContext'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { isDark, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)

      // Update active section based on scroll position
      const sections = ['home', 'about', 'portfolio', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section === 'home' ? 'hero' : section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavClick = (section) => {
    setIsMenuOpen(false)
    if (section === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const element = document.getElementById(section === 'work' ? 'portfolio' : section)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const navItems = [
    { id: 'home', label: 'Home', icon: 'fas fa-home' },
    { id: 'about', label: 'About', icon: 'fas fa-user' },
    { id: 'work', label: 'Work', icon: 'fas fa-briefcase' },
    { id: 'contact', label: 'Contact', icon: 'fas fa-envelope' }
  ]

  return (
    <>
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-theme-primary/90 backdrop-blur-lg border-b border-theme shadow-2xl' 
          : 'bg-transparent'
      }`}>
        <div className="px-4 md:px-[10%] py-4">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => handleNavClick('home')}>
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <span className="text-white font-bold text-lg">D</span>
                </div>
                <div className="absolute inset-0 bg-blue-400 rounded-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-sm"></div>
              </div>
              <div className="hidden md:block">
                <div className="text-xl font-bold text-theme-primary group-hover:text-blue-400 transition-colors duration-300">
                  Deepali Khurana
                </div>
                <div className="text-xs text-theme-muted font-mono">Full Stack Developer</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 glass-pro rounded-full p-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`group relative flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id || (item.id === 'work' && activeSection === 'portfolio')
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-theme-secondary hover:text-theme-primary hover:bg-blue-600/10'
                  }`}
                >
                  <i className={`${item.icon} text-sm`}></i>
                  <span>{item.label}</span>
                  {(activeSection === item.id || (item.id === 'work' && activeSection === 'portfolio')) && (
                    <div className="absolute inset-0 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>

            {/* CTA Button & Theme Toggle */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="relative w-14 h-7 glass-pro rounded-full p-1 transition-all duration-300 hover:scale-105"
                aria-label="Toggle theme"
              >
                <div className={`w-5 h-5 rounded-full bg-blue-600 transition-all duration-300 flex items-center justify-center ${
                  isDark ? 'translate-x-7' : 'translate-x-0'
                }`}>
                  <i className={`text-xs text-white ${isDark ? 'fas fa-moon' : 'fas fa-sun'}`}></i>
                </div>
              </button>

              <a 
                href="/images/Deepali khurana_new resume.pdf" 
                download
                className="flex items-center space-x-2 bg-transparent border border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover-lift"
              >
                <i className="fas fa-download text-xs"></i>
                <span>Resume</span>
              </a>
              <button 
                onClick={() => handleNavClick('contact')}
                className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover-lift animate-glow"
              >
                <span>Let's Talk</span>
                <i className="fas fa-arrow-right text-xs"></i>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden relative w-10 h-10 flex items-center justify-center text-theme-primary z-30 group"
              onClick={toggleMenu}
            >
              <div className="absolute inset-0 bg-blue-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : 'mb-1'}`}></span>
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'mb-1'}`}></span>
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </button>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden fixed inset-0 bg-theme-primary/95 backdrop-blur-lg transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {/* Theme Toggle in Mobile Menu */}
            <button
              onClick={toggleTheme}
              className="flex items-center space-x-3 text-theme-primary"
            >
              <span className="text-lg">Theme</span>
              <div className={`w-14 h-7 glass-pro rounded-full p-1 transition-all duration-300 ${
                isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}>
                <div className={`w-5 h-5 rounded-full bg-blue-600 transition-all duration-300 flex items-center justify-center ${
                  isDark ? 'translate-x-7' : 'translate-x-0'
                }`}>
                  <i className={`text-xs text-white ${isDark ? 'fas fa-moon' : 'fas fa-sun'}`}></i>
                </div>
              </div>
            </button>

            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`group flex items-center space-x-4 text-2xl font-medium transition-all duration-300 transform ${
                  isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                } ${
                  activeSection === item.id || (item.id === 'work' && activeSection === 'portfolio')
                    ? 'text-blue-400'
                    : 'text-white hover:text-blue-400'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <i className={`${item.icon} text-lg`}></i>
                <span>{item.label}</span>
                <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeSection === item.id || (item.id === 'work' && activeSection === 'portfolio')
                    ? 'bg-blue-400 scale-100'
                    : 'bg-transparent scale-0'
                }`}></div>
              </button>
            ))}
            
            {/* Mobile CTA Buttons */}
            <div className={`flex flex-col space-y-4 mt-8 transition-all duration-300 ${
              isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`} style={{ transitionDelay: '0.4s' }}>
              <a 
                href="/images/Deepali khurana_new resume.pdf" 
                download
                className="flex items-center justify-center space-x-2 border border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
              >
                <i className="fas fa-download"></i>
                <span>Download Resume</span>
              </a>
              <button 
                onClick={() => handleNavClick('contact')}
                className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
              >
                <span>Let's Talk</span>
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>

            {/* Social Links */}
            <div className={`flex space-x-6 mt-8 transition-all duration-300 ${
              isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`} style={{ transitionDelay: '0.5s' }}>
              {[
                { icon: 'fab fa-linkedin', href: 'https://www.linkedin.com/in/deepali-khurana-1692a2216/' },
                { icon: 'fab fa-github', href: 'https://github.com/khuranadeepali02' },
                { icon: 'far fa-envelope', href: 'mailto:khuranadeepali02@gmail.com' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center border border-gray-600 rounded-lg text-gray-400 hover:text-white hover:border-blue-500 hover:bg-blue-600/20 transition-all duration-300"
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-900 z-40">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-blue-700 transition-all duration-300"
          style={{ width: `${(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%` }}
        ></div>
      </div>
    </>
  )
}

export default Header
