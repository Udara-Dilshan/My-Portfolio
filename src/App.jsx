import React from 'react'
import NavBar from './Components/Navbar/NavBar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import MyWorks from './Components/MyWork/MyWorks'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Services />
      <MyWorks />
      <Contact />
      
    </div>
  )
}

export default App
