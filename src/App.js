import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <section className ='Home' id="Hhome">
        <Home />
      </section>
      <section className='About' id="Aabout">
        <About />
      </section>
      <section className = 'Skills'id="Skkills">
        <Skills />
      </section>
      <section className = 'Projects'id="Projjects">
        <Projects />
      </section>
      <section className = 'Contact'id="Contacct">
        <Contact />
      </section>
    </>
  );
}

export default App;
