import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import bg from './skill-bg.png'
import './Skills_Task.css'

const API_URL = 'https://dummyjson.com/c/ea8b-01ec-4db8-8368'

const Skills_Task = () => {

  const [data, setData] = useState(null)
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    axios.get(API_URL)
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [])

  if (!data) {
    return <div className="skills-loading">LOADING MISSION DATA...</div>
  }

  const skills = data.skills || []

  const categories = [
    'All',
    ...new Set(skills.map(skill => skill.category))
  ]

  const filteredSkills =
    filter === 'All'
      ? skills
      : skills.filter(skill => skill.category === filter)

  return (
    <section
      className="skills-page"
      style={{ backgroundImage: `url(${bg})` }}
    >

      <div className="skills-overlay"></div>

      <nav className="skills-navbar">

        <h2>✦ NOVA</h2>

        <div className="skills-navlinks">
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Accordion">Accordion</Link>
          <Link to="/Contact">Contact</Link>
          
          <Link to="/Projects">Projects</Link>
          <Link to="/Skills">Skills</Link>
          <Link to="/Login">Login</Link>
        </div>

      </nav>

      <div className="skills-content">

        <div className="skills-header">

          <span>{data.eyebrow}</span>

          <h1>{data.title}</h1>

          <p>{data.subtitle}</p>

        </div>

        <div className="skills-filters">

          {categories.map(category => (

            <button
              key={category}
              className={
                filter === category
                  ? 'skill-filter active'
                  : 'skill-filter'
              }
              onClick={() => setFilter(category)}
            >
              {category}
            </button>

          ))}

        </div>

        <div className="skills-grid">

          {filteredSkills.map(skill => (

            <div className="skill-card" key={skill.id}>

              <div className="skill-top">

                <div className="skill-icon">
                  {skill.icon}
                </div>

                <div className="skill-name">
                  <h2>{skill.name}</h2>
                  <span>{skill.category}</span>
                </div>

                <div className="skill-percent">
                  {skill.level}%
                </div>

              </div>

              <p>{skill.description}</p>

              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Skills_Task