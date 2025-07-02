import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div id="contact" className="py-20 bg-gray-50 dark:bg-gray-950 relative overflow-hidden transition-colors duration-300">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-blue-600/3 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/2 rounded-full blur-3xl animate-pulse-custom"></div>
      </div>

      <div className="container mx-auto px-4 md:px-[10%] relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-on-scroll">
          <div className="text-blue-500 dark:text-blue-400 font-mono text-sm mb-4 animate-slide-down">&lt;contact&gt;</div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-slide-up animate-delay-100">Get In Touch</h2>
          <div className="w-24 h-px bg-blue-500 dark:bg-blue-400 mx-auto mb-8 animate-zoom-in animate-delay-200"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto animate-fade-in animate-delay-300">
            Let's discuss your next project. I'm always interested in new opportunities 
            and collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8 fade-in-on-scroll animate-delay-400">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Let's Talk</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                I'm currently available for freelance work and full-time opportunities. 
                If you have a project in mind, let's discuss how we can work together.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <a 
                href="mailto:khuranadeepali02@gmail.com"
                className="flex items-center space-x-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 hover-lift group transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-500/30"
              >
                <div className="w-12 h-12 bg-blue-600 flex items-center justify-center rounded-lg group-hover:bg-blue-700 transition-colors duration-300">
                  <i className="far fa-envelope text-white"></i>
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Email</p>
                  <p className="text-gray-900 dark:text-white font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">khuranadeepali02@gmail.com</p>
                </div>
                <i className="fas fa-external-link-alt text-gray-400 group-hover:text-blue-500 transition-colors duration-300 ml-auto"></i>
              </a>

              <a 
                href="https://www.linkedin.com/in/deepali-khurana-1692a2216/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 hover-lift group transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-500/30"
              >
                <div className="w-12 h-12 bg-blue-600 flex items-center justify-center rounded-lg group-hover:bg-blue-700 transition-colors duration-300">
                  <i className="fab fa-linkedin text-white"></i>
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">LinkedIn</p>
                  <p className="text-gray-900 dark:text-white font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">Deepali Khurana</p>
                </div>
                <i className="fas fa-external-link-alt text-gray-400 group-hover:text-blue-500 transition-colors duration-300 ml-auto"></i>
              </a>

              <a 
                href="https://github.com/khuranadeepali02"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 hover-lift group transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-500/30"
              >
                <div className="w-12 h-12 bg-blue-600 flex items-center justify-center rounded-lg group-hover:bg-blue-700 transition-colors duration-300">
                  <i className="fab fa-github text-white"></i>
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">GitHub</p>
                  <p className="text-gray-900 dark:text-white font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">khuranadeepali02</p>
                </div>
                <i className="fas fa-external-link-alt text-gray-400 group-hover:text-blue-500 transition-colors duration-300 ml-auto"></i>
              </a>
            </div>

            {/* Resume Download */}
            <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
              <a 
                href="/images/Deepali khurana_new resume.pdf" 
                download
                className="inline-flex items-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover-lift animate-glow"
              >
                <i className="fas fa-download"></i>
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-8 hover:border-blue-300 dark:hover:border-blue-500/30 transition-all duration-300 fade-in-on-scroll animate-delay-500">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
              <i className="fas fa-paper-plane text-blue-500 dark:text-blue-400 mr-3"></i>
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-gray-600 dark:text-gray-400 text-sm mb-2 font-medium">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="group">
                  <label className="block text-gray-600 dark:text-gray-400 text-sm mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    placeholder="Your email address"
                    required
                  />
                </div>
              </div>

              <div className="group">
                <label className="block text-gray-600 dark:text-gray-400 text-sm mb-2 font-medium">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                  placeholder="Subject of your message"
                  required
                />
              </div>

              <div className="group">
                <label className="block text-gray-600 dark:text-gray-400 text-sm mb-2 font-medium">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                  placeholder="Write your message here"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 hover-lift animate-glow flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>

        {/* Additional Contact Methods */}
        <div className="mt-16 fade-in-on-scroll animate-delay-600">
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-8 text-center">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Other Ways to Connect</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a 
                href="https://www.linkedin.com/in/deepali-khurana-1692a2216/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover-lift transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-500/30"
              >
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                  <i className="fab fa-linkedin text-white"></i>
                </div>
                <div className="text-left">
                  <p className="text-gray-900 dark:text-white font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">LinkedIn</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Professional Network</p>
                </div>
                <i className="fas fa-external-link-alt text-gray-400 group-hover:text-blue-500 transition-colors ml-auto"></i>
              </a>

              <a 
                href="https://github.com/khuranadeepali02" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover-lift transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-500/30"
              >
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                  <i className="fab fa-github text-white"></i>
                </div>
                <div className="text-left">
                  <p className="text-gray-900 dark:text-white font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">GitHub</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Code Repository</p>
                </div>
                <i className="fas fa-external-link-alt text-gray-400 group-hover:text-blue-500 transition-colors ml-auto"></i>
              </a>

              <a 
                href="mailto:khuranadeepali02@gmail.com" 
                className="group flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover-lift transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-500/30"
              >
                <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center group-hover:bg-red-700 transition-colors">
                  <i className="far fa-envelope text-white"></i>
                </div>
                <div className="text-left">
                  <p className="text-gray-900 dark:text-white font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Email</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Direct Contact</p>
                </div>
                <i className="fas fa-external-link-alt text-gray-400 group-hover:text-blue-500 transition-colors ml-auto"></i>
              </a>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  )
}

export default Contact
