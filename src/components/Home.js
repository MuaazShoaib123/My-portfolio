import React from 'react';
import Muaaz from './images/Muaaz.png';
import { ReactTyped as Typed } from 'react-typed';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Home = () => {
  return (
    <div className='Home-section'>
      
      <div className='Rows'>
        
         <div className='r1'>
           <h1 className='HMuaaz' > Hi , I am <span className='Muaaz'> Muaaz</span></h1>
         </div>
         <div className='r2'>
           
           <h2> I am a Software <span className='DMuaaz'>   <Typed
              strings={[' Developer', 'Coder']}
              typeSpeed={100}
              backSpeed={50}
              loop
            />
          </span></h2>
         </div>
         <div className='r3'>
           <p> Passionate about addressing real-world <br></br>challenges through the development of <br></br> innovative software systems.</p>
         </div>
         <div className='links'>
         <a href="https://www.linkedin.com/in/muaaz-shoaib-a964a6275/" className="icon-circle" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/MuaazShoaib123" className="icon-circle" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="https://www.instagram.com/itx_muaaz223/" className="icon-circle" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>
         </div>
      </div>
      <div className='Image'>
      <img src={Muaaz} alt="Muaaz Shoaib" className="ProfileImage" />
      </div>
    </div>
  )
}

export default Home;
