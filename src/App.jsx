import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-theme-primary text-theme-primary min-h-screen transition-colors duration-300">
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
