import React from 'react';
import Cplus from './images/c++.png';
import Csharp from './images/c#.png';
import python from './images/python.png';
import js from './images/JS.png';
import html from './images/html2.jpeg';
import css from './images/css.png';
import react from './images/react.png';
import msql from './images/mysqk.png';


const Skills = () => {
  return (
    <div className='skills'>
      <h1 className='skill-title'>Skills</h1>
      <div className='skills-grid'>
        <div className='skill-item'>
          <img src={Cplus} alt="C++" className="skill-image-cplus" />
          <h3 className='skill-name'>C++</h3>
        </div>
        <div className='skill-item'>
          <img src={Csharp} alt="C#" className="skill-image-csharp" />
          <h3 className='skill-nameMS'>C#</h3>
        </div>
        <div className='skill-item'>
          <img src={python} alt="Python" className="skill-image" />
          <h3 className='skill-name'>Python</h3>
        </div>
        <div className='skill-item'>
          <img src={js} alt="JavaScript" className="skill-image" />
          <h3 className='skill-name'>JavaScript</h3>
        </div>
        <div className='skill-item'>
          <img src={html} alt="HTML" className="skill-image" />
          <h3 className='skill-name'>HTML</h3>
        </div>
        <div className='skill-item'>
          <img src={css} alt="CSS" className="skill-image" />
          <h3 className='skill-name'>CSS</h3>
        </div>
        <div className='skill-item'>
          <img src={react} alt="MongoDB" className="skill-image" />
          <h3 className='skill-name'>React</h3>
        </div>
        <div className='skill-item'>
          <img src={msql} alt="MySQL" className="skill-image-mysql" />
          <h3 className='skill-nameMS'>MySQL</h3>
        </div>
      </div>
    </div>
  );
}

export default Skills;
