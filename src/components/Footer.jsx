import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/deepali-khurana-1692a2216/', 
      icon: 'fab fa-linkedin',
      color: 'hover:bg-blue-600'
    },
    { 
      name: 'GitHub', 
      href: 'https://github.com/khuranadeepali02', 
      icon: 'fab fa-github',
      color: 'hover:bg-gray-700'
    },
    { 
      name: 'Email', 
      href: 'mailto:khuranadeepali02@gmail.com', 
      icon: 'far fa-envelope',
      color: 'hover:bg-red-600'
    }
  ]

  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-[10%] py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <span className="text-xl font-semibold text-gray-900 dark:text-white">Deepali Khurana</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm max-w-sm leading-relaxed">
              Full Stack Developer specializing in modern web technologies and clean, scalable solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-gray-900 dark:text-white font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: 'About', href: '#about' },
                { name: 'Portfolio', href: '#portfolio' },
                { name: 'Contact', href: '#contact' },
                { name: 'Resume', href: '/images/Deepali khurana_new resume.pdf' }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 flex items-center space-x-2 group"
                    {...(link.name === 'Resume' ? { download: true } : {})}
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{link.name}</span>
                    {link.name === 'Resume' && <i className="fas fa-download text-xs"></i>}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-gray-900 dark:text-white font-semibold text-lg">Connect</h4>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-white hover:border-blue-500 dark:hover:border-blue-400 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                  title={social.name}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-500">
              Feel free to reach out for collaborations!
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-gray-600 dark:text-gray-400">
            © {currentYear} Deepali Khurana. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex items-center space-x-4">
            <p className="text-gray-600 dark:text-gray-400">
              Built with{' '}
              <span className="text-blue-600 dark:text-blue-400 font-semibold">React</span>
              {' '}&{' '}
              <span className="text-blue-600 dark:text-blue-400 font-semibold">Tailwind CSS</span>
            </p>
            <div className="hidden md:flex items-center space-x-2 text-gray-500 dark:text-gray-500">
              <i className="fas fa-heart text-red-500 animate-pulse"></i>
              <span className="text-xs">Made with passion</span>
            </div>
          </div>
        </div>

        {/* Additional Footer Info */}
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-500">
              <span className="flex items-center space-x-1">
                <i className="fas fa-map-marker-alt"></i>
                <span>India</span>
              </span>
              <span className="flex items-center space-x-1">
                <i className="fas fa-clock"></i>
                <span>Available for work</span>
              </span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-500">
              <span>Last updated: {new Date().toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl z-50 group"
        aria-label="Back to top"
      >
        <i className="fas fa-arrow-up group-hover:animate-bounce"></i>
      </button>
    </footer>
  )
}

export default Footer
