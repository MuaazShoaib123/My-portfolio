import {React,useEffect,useState} from 'react'
import { useRef } from 'react';
import {scroller} from 'react-scroll';


const Navbar = () => {
  
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const links = document.querySelectorAll('.Button1');

    const handleScroll = () => {
      let currentSection = 'Home';

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 150; // Adjust this value to fine-tune the scroll trigger point
        if (window.scrollY >= sectionTop) {
          currentSection = section.getAttribute('id');
        }
      });

      links.forEach(link => {
        link.classList.remove('active');
        if (link.id.trim() === currentSection) {
          link.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleDownloadClick = () => {
    window.open('https://drive.google.com/file/d/1UILD2UdLId6JjUBiz7TQsykYo6LQ633S/view?usp=drive_link', '_blank');
  };
  const handleMenuToggle = () => {
 // Toggle the menu visibility
    setShowMenu(!showMenu);
  // Toggle the menu visibility
  };
  const [isOpen, setIsOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const scrollToSection = (section) => {

    scroller.scrollTo(section, {
      
     
      spy :true,
      activeClass : "active",
      offset : -100,
      duration: 500,
      smooth: true
     
    });
    setShowMenu(false);
    
  }
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('.NavContainer');
      if (nav) {
        nav.classList.toggle("sticky", window.scrollY > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (

    // ................. Nav Bar............
    <nav className>
      <div className='NavContainer'>

        <div className='Name'>
          <h1> Muaaz Shoaib</h1>
        </div>

        <div className='Buttons'>
          
          <button onClick={() => scrollToSection("Home")} className='Button1 active' id = "Hhome"> HOME</button>
          <button onClick={() => scrollToSection("About")} className='Button1' id ="Aabout"> ABOUT</button>
          <button onClick={() => scrollToSection("Skills")} className='Button1' id ="Skkills"> SKILLS</button>
          <button onClick={() => scrollToSection("Projects")} className='Button1' id ="Projjects"> PROJECTS</button>
          <button onClick={() => scrollToSection("Contact")} className='Button1' id= "Contacct"> CONTACT</button>
        </div>

        <div className='Download-Button'>

          <button className='Button2' onClick={handleDownloadClick}> Download CV</button>
          <div className='bars' onClick={handleMenuToggle}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      {showMenu && (
        <div className='MobileMenu'>
          <button onClick={() => scrollToSection("Home")}>HOME</button>
          <button onClick={() => scrollToSection('About')}>ABOUT</button>
          <button onClick={() => scrollToSection("Skills")}>SKILLS</button>
          <button onClick={() => scrollToSection("Projects")}>PROJECTS</button>
          <button onClick={() => scrollToSection("Contact")}>CONTACT</button>
          <button onClick={handleDownloadClick}>Download CV</button>
        </div>
      )}
      
    </nav>
   
  )
}

export default Navbar
