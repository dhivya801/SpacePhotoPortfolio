import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import bg from './project-bg.png'
import './Project_Task.css'

const API_URL = 'https://dummyjson.com/c/b103-5b48-4991-94ee'

const Projects_Task = () => {
  const [data, setData] = useState(null)
  useEffect(() => {
    axios.get(API_URL)
      .then(res => {
        console.log(res.data)
        setData(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  if (!data) {
    return <div className="projects-loading">Loading projects...</div>
  }
  return (
    <section
      className="projects-page"
      style={{ backgroundImage: `url(${bg})` }}
    ><div className="projects-overlay"></div>
      <nav className="projects-navbar">

        <h2>✦ NOVA</h2>

        <div className="projects-navlinks">
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Accordion">Accordion</Link>
          <Link to="/Contact">Contact</Link>
      
          <Link to="/Projects">Projects</Link>
          <Link to="/Skills">Skills</Link>
            <Link to="/Login">Login</Link>
        </div>

      </nav>
      <div className="projects-content">
        <div className="projects-head">
          <span>{data.eyebrow}</span>
          <h1>{data.title}</h1>
          <p>{data.description}</p>

        </div>
        <div className="projects-grid">
          {data.projects?.map(project => (
            <div className="project-card" key={project.id}>
              <div className="project-top">
                <span className="project-number">
                  {project.number}
                </span>
                <span className="project-status">
                  {project.status}
                </span>

              </div>

              <span className="project-category">
                {project.category}
              </span>
              <h2>{project.title}</h2>
              <p>{project.description}</p>

             
              <div className="project-tech">
                {(project.tech || []).map((item, index) => (
                  <span key={index}>
                    {item}
                  </span>
                ))}
                </div>
                </div>

          ))}
          </div>
          </div>
          </section>
  )
}

export default Projects_Task