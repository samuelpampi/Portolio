import { useEffect } from 'react'
import './App.css'
import Hero from './components/sections/Hero/Hero'
import Experience from './components/sections/Experience/Experience'
import Projects from './components/sections/Projects/Projects'
import Skills from './components/sections/Skills/Skills'
import Footer from './components/ui/Footer/Footer'
import NavBar from './components/ui/Navbar/Navbar'

function App() {

  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!elements.length) return;

    if (prefersReducedMotion) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    if (typeof IntersectionObserver !== 'function') {
      elements.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    elements.forEach((el) => el.classList.add('will-reveal'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <NavBar/>
      <Hero/>
      <Experience/>
      <Projects/>
      <Skills/>
      <div className="scroll-fade" aria-hidden="true"></div>
    </main>
    
  )
}

export default App
