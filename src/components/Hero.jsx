import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'

const Hero = () => {
  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Full Stack Developer",
        "React.js Developer", 
        "Frontend Engineer",
        "Software Developer"
      ],
      loop: true,
      typeSpeed: 80,
      backSpeed: 60,
      backDelay: 1500,
    })

    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
        }
      })
    }, observerOptions)

    document.querySelectorAll('.fade-in-on-scroll').forEach(el => observer.observe(el))

    return () => {
      typed.destroy()
      observer.disconnect()
    }
  }, [])

  return (
    <div id="hero" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/3 rounded-full blur-3xl animate-float animate-delay-200"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/2 rounded-full blur-3xl animate-pulse-custom"></div>
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-[10%] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
                <div className="space-y-8 stagger-children">
                <div className="space-y-6">
                  <div className="text-blue-500 dark:text-blue-400 text-lg font-mono tracking-wide fade-in-on-scroll">
                  &lt;hello-world /&gt;
                  </div>
                  
                  <div className="space-y-4">
                  <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight fade-in-on-scroll animate-delay-100">
                    <span className="inline-block animate-slide-right">Deepali</span>
                    <br />
                    <span className="text-gray-900 dark:text-white inline-block animate-slide-left animate-delay-200">Khurana</span>
                  </h1>
                  
                  <div className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-light fade-in-on-scroll animate-delay-300">
                    <span ref={el} className="text-blue-600 dark:text-blue-400 font-medium border-r-2 border-blue-600 dark:border-blue-400 animate-pulse"></span>
                  </div>
                  </div>
                </div>
                
                <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl fade-in-on-scroll animate-delay-400">
                  I craft scalable web applications with clean code and intuitive user experiences. 
                  Specializing in modern JavaScript frameworks and full-stack development.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 fade-in-on-scroll animate-delay-500">
                  <button 
                  onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover-lift animate-glow hover:animate-wiggle"
                  >
                  <span className="flex items-center space-x-2">
                    <span>View My Work</span>
                    <i className="fas fa-arrow-down group-hover:animate-bounce-custom"></i>
                  </span>
                  </button>
                  <button className="group border border-gray-300 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-400 text-gray-900 dark:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-600/10 hover-lift">
                  <span className="flex items-center space-x-2">
                    <i className="fas fa-download group-hover:animate-bounce-custom"></i>
                    <span>Download Resume</span>
                  </span>
                  </button>
                </div>

                
                </div>

                {/* Enhanced Right Content - Professional Image */}
          <div className="relative flex justify-center lg:justify-end fade-in-on-scroll animate-delay-700">
            <div className="relative group">
              <div className="w-80 h-80 md:w-96 md:h-96 relative animate-zoom-in">
                <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse-custom"></div>
                <img 
                  src="/images/background-img.jpeg" 
                  alt="Deepali Khurana" 
                  className="relative w-full h-full object-cover rounded-lg transition-all duration-500 group-hover:scale-105 group-hover:rotate-1"
                />
                <div className="absolute inset-0 border border-blue-300 dark:border-blue-500/20 rounded-lg group-hover:border-blue-500 dark:group-hover:border-blue-500/40 transition-all duration-300 animate-glow"></div>
                <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              </div>
              
              {/* Enhanced professional accents with animations */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border border-blue-300 dark:border-blue-500/30 rounded-lg animate-float animate-delay-300"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-blue-600 animate-rotate-in animate-delay-400"></div>
              
              {/* Floating tech icons */}
              <div className="absolute -top-4 right-4 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center animate-bounce-custom animate-delay-500">
                <i className="fab fa-react text-white text-sm"></i>
              </div>
              <div className="absolute bottom-4 -left-4 w-8 h-8 bg-gray-800 dark:bg-gray-700 rounded-full flex items-center justify-center animate-bounce-custom animate-delay-600">
                <i className="fab fa-js text-yellow-400 text-sm"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-custom fade-in-on-scroll animate-delay-800">
          <div className="text-blue-500 dark:text-blue-400 text-sm mb-2 text-center animate-pulse-custom">Scroll to explore</div>
          <div className="w-6 h-10 border-2 border-blue-500 dark:border-blue-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-500 dark:bg-blue-400 rounded-full mt-2 animate-bounce-custom"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
