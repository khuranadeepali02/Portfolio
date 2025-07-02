import React, { useState, useEffect } from 'react'

const About = () => {
  const [activeTab, setActiveTab] = useState('overview')

  const skills = [
    { 
      category: 'Frontend Development',
      icon: 'fas fa-laptop-code',
      color: 'blue',
      items: [
        { name: 'React.js', level: 90, icon: 'fab fa-react' },
        { name: 'JavaScript ES6+', level: 88, icon: 'fab fa-js-square' },
        { name: 'TypeScript', level: 82, icon: 'fas fa-code' },
        { name: 'HTML5/CSS3', level: 95, icon: 'fab fa-html5' },
        { name: 'Tailwind CSS', level: 85, icon: 'fas fa-palette' }
      ]
    },
    { 
      category: 'Backend Development',
      icon: 'fas fa-server',
      color: 'green',
      items: [
        { name: 'Node.js', level: 80, icon: 'fab fa-node-js' },
        { name: 'Express.js', level: 78, icon: 'fas fa-route' },
        { name: 'RESTful APIs', level: 85, icon: 'fas fa-exchange-alt' },
        { name: 'Database Design', level: 75, icon: 'fas fa-database' }
      ]
    },
    { 
      category: 'Tools & Technologies',
      icon: 'fas fa-tools',
      color: 'purple',
      items: [
        { name: 'Git/GitHub', level: 90, icon: 'fab fa-git-alt' },
        { name: 'VS Code', level: 95, icon: 'fas fa-code' },
        { name: 'npm/yarn', level: 88, icon: 'fab fa-npm' },
        { name: 'Webpack', level: 70, icon: 'fas fa-cube' },
        { name: 'Figma', level: 80, icon: 'fab fa-figma' }
      ]
    }
  ]

  useEffect(() => {
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

    return () => observer.disconnect()
  }, [])

  return (
    <div id="about" className="py-20 bg-gray-50 dark:bg-gray-950 relative overflow-hidden transition-colors duration-300">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-blue-600/3 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/2 rounded-full blur-3xl animate-pulse-custom"></div>
      </div>

      <div className="container mx-auto px-4 md:px-[10%] relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-on-scroll">
          <div className="text-blue-500 dark:text-blue-400 font-mono text-sm mb-4 animate-slide-down">&lt;about-me&gt;</div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-slide-up animate-delay-100">About Me</h2>
          <div className="w-24 h-px bg-blue-500 dark:bg-blue-400 mx-auto animate-zoom-in animate-delay-200"></div>
          <div className="text-lg max-w-3xl mx-auto mt-6 leading-relaxed animate-fade-in animate-delay-300">
            <p className="text-gray-600 dark:text-gray-300 mb-3">
              Passionate Full Stack Developer with hands-on experience in building responsive web applications using MERN stack.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Skilled in both frontend and backend development, with a focus on clean code, scalable architecture, and seamless user experience.
            </p>
          </div>
        </div>

        
        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-2 rounded-xl mb-12 fade-in-on-scroll animate-delay-500">
            {[{
              id: 'overview',
              label: 'Overview',
              icon: 'fas fa-user'
            },
            {
              id: 'skills',
              label: 'Skills',
              icon: 'fas fa-cogs'
            },
            {
              id: 'experience',
              label: 'Experience',
              icon: 'fas fa-briefcase'
            }
            ].map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`group flex items-center space-x-2 px-6 py-3 text-sm font-medium transition-all duration-300 rounded-lg hover-lift ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg animate-glow'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-blue-50 dark:hover:bg-blue-600/20'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <i className={`${tab.icon} group-hover:animate-wiggle`}></i>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="min-h-[400px]">
            {activeTab === 'overview' && (
              <div className="space-y-8 animate-fade-in">
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-8 hover-lift">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                    <i className="fas fa-lightbulb text-blue-500 dark:text-blue-400 mr-3"></i>
                    Professional Overview
                  </h3>
                  <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                    <p>
                      I'm a passionate Full Stack Developer with expertise in building scalable 
                      web applications using modern technologies. My journey in software development 
                      has been driven by a love for problem-solving and creating intuitive user experiences.
                    </p>
                    <p>
                      With a strong foundation in JavaScript ecosystems and a keen eye for detail, 
                      I bridge the gap between design and functionality. I'm constantly learning 
                      new technologies and best practices to deliver high-quality, maintainable solutions.
                    </p>
                    <p>
                      My approach combines technical excellence with creative thinking, ensuring 
                      that every project not only meets requirements but exceeds expectations.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover-lift">
                    <h4 className="text-blue-500 dark:text-blue-400 font-semibold mb-4 flex items-center">
                      <i className="fas fa-graduation-cap mr-2"></i>
                      Education
                    </h4>
                    <div className="space-y-2">
                      <p className="text-gray-900 dark:text-white font-medium">B.Tech Computer Science</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Chandigarh Group Of Colleges</p>
                      <p className="text-gray-500 dark:text-gray-500 text-xs">2020 - 2024</p>
                    </div>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover-lift">
                    <h4 className="text-blue-500 dark:text-blue-400 font-semibold mb-4 flex items-center">
                      <i className="fas fa-map-marker-alt mr-2"></i>
                      Location & Availability
                    </h4>
                    <div className="space-y-2">
                      <p className="text-gray-900 dark:text-white font-medium">India</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Available for  Work</p>
                      <p className="text-green-400 text-xs flex items-center">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse-custom"></span>
                        Available for new projects
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'skills' && (
              <div className="space-y-8 animate-fade-in">
                {/* Skills Overview */}
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-8 hover-lift">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                    <i className="fas fa-code text-blue-500 dark:text-blue-400 mr-3"></i>
                    Technical Expertise
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                    Proficient in modern web development technologies with a focus on creating 
                    efficient, scalable, and maintainable solutions. Continuously expanding 
                    skillset through hands-on projects and staying updated with industry trends.
                  </p>
                  
                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {skills.map((skillGroup, groupIndex) => (
                      <div 
                        key={groupIndex} 
                        className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-blue-300 dark:hover:border-blue-500/30 transition-all duration-300 hover-lift group"
                        style={{animationDelay: `${groupIndex * 0.1}s`}}
                      >
                        {/* Category Header */}
                        <div className="flex items-center space-x-3 mb-6">
                          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                            skillGroup.color === 'blue' ? 'bg-blue-100 dark:bg-blue-600/20 group-hover:bg-blue-600' :
                            skillGroup.color === 'green' ? 'bg-green-100 dark:bg-green-600/20 group-hover:bg-green-600' :
                            'bg-purple-100 dark:bg-purple-600/20 group-hover:bg-purple-600'
                          } transition-colors duration-300`}>
                            <i className={`${skillGroup.icon} text-lg ${
                              skillGroup.color === 'blue' ? 'text-blue-600 dark:text-blue-400 group-hover:text-white' :
                              skillGroup.color === 'green' ? 'text-green-600 dark:text-green-400 group-hover:text-white' :
                              'text-purple-600 dark:text-purple-400 group-hover:text-white'
                            } transition-colors duration-300`}></i>
                          </div>
                          <div>
                            <h4 className="text-gray-900 dark:text-white font-semibold text-lg">{skillGroup.category}</h4>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">{skillGroup.items.length} Technologies</p>
                          </div>
                        </div>

                        {/* Skills List */}
                        <div className="space-y-4">
                          {skillGroup.items.map((skill, skillIndex) => (
                            <div key={skillIndex} className="group/skill">
                              <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center space-x-3">
                                  <i className={`${skill.icon} text-sm ${
                                    skillGroup.color === 'blue' ? 'text-blue-500 dark:text-blue-400' :
                                    skillGroup.color === 'green' ? 'text-green-500 dark:text-green-400' :
                                    'text-purple-500 dark:text-purple-400'
                                  }`}></i>
                                  <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">{skill.name}</span>
                                </div>
                                <span className="text-xs font-mono text-gray-500 dark:text-gray-400">{skill.level}%</span>
                              </div>
                              
                              {/* Progress Bar */}
                              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 overflow-hidden">
                                <div 
                                  className={`h-1.5 rounded-full transition-all duration-1000 ease-out ${
                                    skillGroup.color === 'blue' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                                    skillGroup.color === 'green' ? 'bg-gradient-to-r from-green-500 to-green-600' :
                                    'bg-gradient-to-r from-purple-500 to-purple-600'
                                  } group-hover/skill:animate-pulse-custom`}
                                  style={{ 
                                    width: `${skill.level}%`,
                                    animationDelay: `${skillIndex * 0.1}s`
                                  }}
                                ></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Skills & Certifications */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover-lift">
                    <h4 className="text-blue-500 dark:text-blue-400 font-semibold mb-4 flex items-center">
                      <i className="fas fa-plus-circle mr-2"></i>
                      Additional Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'Responsive Design', 'API Integration', 'Version Control', 
                        'Testing', 'Performance Optimization', 'UI/UX Principles',
                        'Agile Methodology', 'Problem Solving'
                      ].map((skill, index) => (
                        <span 
                          key={index}
                          className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500/50 transition-colors duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover-lift">
                    <h4 className="text-blue-500 dark:text-blue-400 font-semibold mb-4 flex items-center">
                      <i className="fas fa-certificate mr-2"></i>
                      Learning & Growth
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse-custom"></div>
                        <span className="text-gray-700 dark:text-gray-300 text-sm">Currently exploring Next.js & GraphQL</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse-custom"></div>
                        <span className="text-gray-700 dark:text-gray-300 text-sm">Studying cloud platforms (AWS, Vercel)</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse-custom"></div>
                        <span className="text-gray-700 dark:text-gray-300 text-sm">Web Developer Certification - Hoping Minds</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'experience' && (
              <div className="space-y-6 animate-fade-in">
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-8 border-l-4 border-blue-500 hover-lift">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 animate-glow">
                      <i className="fas fa-briefcase text-white"></i>
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-gray-900 dark:text-white font-semibold text-xl">Full Stack Developer</h4>
                        <span className="bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-400 text-xs px-3 py-1 rounded-full">Current</span>
                      </div>
                      <p className="text-blue-500 dark:text-blue-400 font-medium mb-1">Finsocial Digital Systems</p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">Dec 2024 - Present</p>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        Developing and maintaining web applications using modern technologies including React, Node.js, and cloud services. 
                        Collaborating with cross-functional teams to deliver high-quality software solutions that meet business requirements 
                        and user expectations.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {['React', 'Node.js', 'JavaScript', 'Git'].map((tech, index) => (
                          <span key={index} className="bg-blue-100 dark:bg-blue-600/20 text-blue-600 dark:text-blue-400 text-xs px-2 py-1 rounded border border-blue-200 dark:border-blue-500/30">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-8 border-l-4 border-gray-300 dark:border-gray-600 hover-lift">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-graduation-cap text-gray-500 dark:text-gray-400"></i>
                    </div>
                    <div>
                      <h4 className="text-gray-900 dark:text-white font-semibold text-xl mb-2">Web Developer Training</h4>
                      <p className="text-blue-500 dark:text-blue-400 font-medium mb-1">Hoping Minds</p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">2024</p>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        Intensive training program covering modern web development technologies, industry best practices, 
                        and hands-on project development. Gained expertise in full-stack development methodologies 
                        and agile development processes.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {['HTML/CSS', 'JavaScript', 'React', 'MongoDB'].map((tech, index) => (
                          <span key={index} className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs px-2 py-1 rounded border border-gray-200 dark:border-gray-600">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
