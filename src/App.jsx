import './App.css'
import Hero from './components/sections/Hero/Hero'
import Experience from './components/sections/Experience/Experience'
import Projects from './components/sections/Projects/Projects'
import Skills from './components/sections/Skills/Skills'
import Footer from './components/ui/Footer/Footer'

function App() {

  return (
    <main>
      <Hero/>
      <Experience/>
      <Projects/>
      <Skills/>
      <div className="scroll-fade" aria-hidden="true"></div>
    </main>
    
  )
}

export default App
