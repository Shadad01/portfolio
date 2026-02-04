// src/App.jsx
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About';
import Projects from './Components/Projects'
import Experience from './Components/Experience';
import Contact from './Components/Contact';
import Footer from './Components/Footer'

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
       <About />
       <Projects />
       <Experience/>
       <Contact/>
       <Footer/>

      {/* Other sections would go here */}
    </div>
  )
}

export default App