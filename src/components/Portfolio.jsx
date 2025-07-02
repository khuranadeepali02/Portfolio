import React, { useState } from 'react'

const Portfolio = () => {
  const [selectedFilter, setSelectedFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: "BhashaBot.AI",
      description: "An intelligent multilingual chatbot website with advanced AI capabilities, natural language processing, and seamless user interaction.",
      category: "web-app",
      technologies: ["React", "JavaScript", "AI/ML APIs", "Natural Language Processing"],
      github: "https://github.com/khuranadeepali02/BhashaBot.AI",
      live: "https://bhasha-bot-ai.vercel.app/",
      year: "2024"
    },
   
    {
      id: 3,
      title: "Abacus.AI Platform Clone",
      description: "A comprehensive AI platform interface featuring modern UI/UX, responsive design, and interactive components.",
      category: "frontend",
      technologies: ["React", "Tailwind CSS", "TypeScript", "Framer Motion"],
      github: "https://github.com/khuranadeepali02/abacus-ai-clone",
      live: "https://abacus-ai-clone.netlify.app",
      year: "2024"
    },
   
    
    {
      id: 6,
      title: "Travel Explorer",
      description: "Comprehensive travel website with destination guides, booking integration, interactive maps, and travel planning tools.",
      category: "web-app",
      technologies: ["React", "Node.js", "Maps API", "Booking API", "MongoDB"],
      github: "https://github.com/khuranadeepali02/Travel-website",
      live: "https://travel-website-two-sable.vercel.app/",
      year: "2024"
    }
  ]

  const filters = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'web-app', label: 'Web Apps', count: projects.filter(p => p.category === 'web-app').length },
    { id: 'frontend', label: 'Frontend', count: projects.filter(p => p.category === 'frontend').length },
    { id: 'game', label: 'Games', count: projects.filter(p => p.category === 'game').length }
  ]

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter)

  return (
    <div id="portfolio" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-40 right-10 w-48 h-48 bg-blue-600/3 rounded-full blur-2xl animate-float" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="container mx-auto px-4 md:px-[10%] relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-blue-500 dark:text-blue-400 font-mono text-sm mb-4">&lt;my-work&gt;</div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">Portfolio</h2>
          <div className="w-24 h-px bg-blue-500 dark:bg-blue-400 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my technical expertise through diverse projects, each solving unique challenges 
            with modern technologies and best practices.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`group flex items-center space-x-2 px-6 py-3 text-sm font-medium transition-all duration-200 border rounded-lg hover-lift ${
                selectedFilter === filter.id
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-600 hover:text-gray-900 dark:hover:text-white hover:border-blue-400 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-600/10'
              }`}
            >
              <span>{filter.label}</span>
              <span className={`text-xs px-2 py-1 rounded-full ${
                selectedFilter === filter.id 
                  ? 'bg-white/20' 
                  : 'bg-gray-100 dark:bg-gray-700 group-hover:bg-blue-100 dark:group-hover:bg-blue-600/30'
              }`}>
                {filter.count}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-blue-300 dark:hover:border-blue-500/50 transition-all duration-300 hover-lift shadow-sm hover:shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Header */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <i className={`fas ${
                      project.category === 'web-app' ? 'fa-globe' : 
                      project.category === 'game' ? 'fa-gamepad' : 
                      'fa-code'
                    } text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-300`}></i>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-blue-500 dark:text-blue-400 text-sm font-mono">{project.year}</span>
                  <div className={`text-xs px-2 py-1 rounded-full mt-1 ${
                    project.category === 'web-app' ? 'bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400' :
                    project.category === 'game' ? 'bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400' :
                    'bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                  }`}>
                    {project.category.replace('-', ' ')}
                  </div>
                </div>
              </div>
              
              {/* Project Title */}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-3">
                {project.title}
              </h3>
              
              {/* Project Description */}
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              
              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="text-xs text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500/50 px-3 py-1 rounded-full font-mono transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="flex space-x-4">
                <a 
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover-lift"
                >
                  <i className="fas fa-external-link-alt text-xs"></i>
                  <span>Live Demo</span>
                </a>
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 border border-gray-300 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover-lift"
                >
                  <i className="fab fa-github text-xs"></i>
                  <span>Code</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio