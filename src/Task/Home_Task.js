
import React from 'react'
import About_Task from './About_Task'
import Accordion_Task from './Accordion_Task'
import Contact_Task from './Contact_Task'
import Login_Task from './Login_Task'
import Projects_Task from './Projects_Task'
import Skills_Task from './Skills_Task'
import EliteTask2 from './EliteTask2'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './Home_Task.css'
import galaxy from './galaxy.png'
const Home_Task = () => {

  
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={
        <div className='home'style={{backgroundImage:`url(${galaxy})`}}>
      <nav className="navbar">
        <h2>✦ NOVA</h2>
        <div className='navlinks'>
        <Link to="/">Home</Link>
        <Link to="/About">About  </Link>
        <Link to="/Accordion">Accordion  </Link>
        <Link to="/Contact">Contact  </Link>
        <Link to="/Projects">Projects  </Link>
        <Link to="/Skills">Skills</Link>
        <Link to="/Login">Login  </Link>
        <Link to="/EliteTask2">EliteTask2</Link>
        </div>
      </nav>
      <div className="hero">
        <p className="status">
          ● SYSTEM STATUS — NOMINAL
        </p>
         <h1>
          EXPLORE.<br />
          DISCOVER.<br />
          <span>CREATE.</span>
        </h1>
        <p>
          Welcome to my universe. Explore my skills,
          projects and journey through the galaxy.
        </p>
          <button>EXPLORE NOW ↗</button>
      </div>
      </div>

      }/>
      
         <Route path="/EliteTask2" element={<EliteTask2 />} />
        <Route path="/About" element={<About_Task />} />
        <Route path="/Accordion" element={<Accordion_Task />} />
        <Route path="/Contact" element={<Contact_Task />} />
        <Route path="/Login" element={<Login_Task />} />
        <Route path="/Projects" element={<Projects_Task />} />
        <Route path="/Skills" element={<Skills_Task />} />
      </Routes>
      
    </BrowserRouter>
  )
}

export default Home_Task

