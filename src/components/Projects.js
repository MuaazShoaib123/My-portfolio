import React from 'react';
import Expense from './images/Expense.jpeg';
import College from './images/College.jpeg';
import BT from './images/BTgame.jpeg';
import Money from './images/Money.jpeg';
import Hostel from './images/Hostel.jpeg';
import FYP from './images/FYP.jpeg';
const Projects = () => {
  return (
    <div className='ProjectsSection'>
      
      <h1 className='HAbout'> Projects </h1>
      <div className='Projects-grid'>
        <div className='projects-item'>
        <img src={Expense} alt="C++" className="projects-img" />
           <h2> Expense Management System</h2>
          <p className='project-para'>Expense management software is a specialized tool designed to streamline and automate the process of tracking, submitting, approving, and reimbursing business expenses. It helps organizations effectively manage their financial resources by providing features.</p>
        </div>
        <div className='projects-item'>
        <img src={College} alt="C++" className="projects-img" />
        <h2> College Management System</h2>
          <p className='project-para'>A college management system is a comprehensive software solution designed to streamline and automate various administrative and academic processes within educational institutions. It serves as a centralized platform that integrates multiple functionalities to enhance efficiency, communication, and management across different departments and stakeholders.</p>
        </div>
        <div className='projects-item'>
        <img src={BT} alt="C++" className="projects-img" />
        <h2> Bubble Shooter Using C#</h2>
          <p className='project-para'>Bubble Trouble is a classic arcade-style game where players control a character armed with a harpoon gun to pop bouncing bubbles. The objective is to shoot each bubble into smaller pieces until they disappear, all while avoiding contact with them</p>
        </div>
        <div className='projects-item'>
        <img src={Money} alt="C++" className="projects-img" />
        <h2> Money Transaction System</h2>
          <p className='project-para'>A money transaction system facilitates the electronic transfer of funds between individuals, businesses, or financial institutions. It enables secure and efficient transactions, typically through digital channels such as online banking, mobile apps, or payment gateways.</p>
        </div>
        <div className='projects-item'>
        <img src={Hostel} alt="C++" className="projects-img" />
        <h2> Hostel Management System</h2>
          <p className='project-para'>A hostel management system is a software application designed to streamline the administration and operations of hostels or dormitories, typically in educational institutions or accommodations. It provides comprehensive tools to manage various aspects of hostel life efficiently.</p>
        </div>
        <div className='projects-item'>
        <img src={FYP} alt="C++" className="projects-img" />
        <h2> FYP Project</h2>
          <p className='project-para'>Final year presentation projects are significant milestones in academic and professional development, typically undertaken by students in their last year of study. These projects serve as comprehensive demonstrations of the knowledge, skills, and creativity gained throughout the academic journey.</p>
        </div>
      </div>
    </div>
  )
}

export default Projects;
