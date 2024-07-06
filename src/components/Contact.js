import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className='Contact'>

            <h1 className='Habout'> Get in touch </h1>
            <div className='contact-grid'>

                <h2> Feel free to reach me at :</h2>
                <div className='contact-item'>
                    <FaEnvelope size={30} />
                    <p>Email: muaazshoaib@yahoo.com</p>
                </div>
                <div className='contact-item'>
                    <FaPhone size={30} />
                    <p>Phone: +923249876502</p>
                </div>
            </div>
            <div className='afterbox'>
            <div className='contact-name'>
                Muaaz Shoaib
            </div>
            <div className='social-links'>
        <a href="https://www.linkedin.com/in/muaaz-shoaib-a964a6275/"target='_blank' rel='noopener noreferrer'><FaLinkedin size={30} /></a>
        <a href="https://github.com/MuaazShoaib123" target='_blank' rel='noopener noreferrer'><FaGithub size={30} /></a>
        <a href="https://www.instagram.com/itx_muaaz223/" target='_blank' rel='noopener noreferrer'><FaInstagram size={30} /></a>
      </div>
            <div className='copyright'>
               Copyright &copy; Muaaz Shoaib - All rights reserved
            </div>
            </div>
           
        </div>

    )
}

export default Contact;
