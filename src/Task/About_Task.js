import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import bg from './about-bg.png'
import './About_Task.css'

const API_URL = 'https://dummyjson.com/c/1db6-eef8-44bd-84a9'
const About_Task =()=>{
  const[data,setData]=useState(null)
  useEffect(()=>{
    axios.get(API_URL)
    .then(res=>setData(res.data))
    .catch(err=>console.log(err))
  },[])
  if(!data){
    return <div  className="about-loading">Loading..</div>
  }
  return(
    <section className="about-page" style={{backgroundImage:`url(${bg})`}}>
      <nav className="navbar">
        <h2>✦ NOVA </h2>
         <div className="navlinks">
                  <Link to="/">Home</Link>
                  <Link to="/About">About</Link>
                  <Link to="/Accordion">Accordion</Link>
                  <Link to="/Contact">Contact</Link>
                  
                  <Link to="/Projects">Projects</Link>
                  <Link to="/Skills">Skills</Link>
                  <Link to="/Login">Login</Link>
                </div>
      </nav>
      <div  className="about-overlay"> </div>
        <div className="about-content">
          <div className="about-hero">
            <span className="about-eyebrow">{data.eyebrow}</span>
            <h1>{data.name}</h1>
            <h2>{data.role}</h2>
            <p className="about-tagline">
              {data.tagline}
            </p>
            <p className="about-intro">
              {data.intro}
            </p>
          </div>
          <div className="about-highlights">
          {data.highlights.map((item, index) => (
            <div className="about-card" key={index}>
              <span>{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
          <div className="about-section">
            <h2>Skills & Expertise</h2>
            <div className="about-skills">
              {data.skills.map((skill,index)=>(
                <span key={index}>{skill}</span>
              ))}
            </div>
          </div>
          <div className="about-section">
            <h2>Journey</h2>
            <div className='about-journey'>
              {data.journey.map((item,index)=>(
                <div className="journey-item" key={index} >
                  <strong>{item.year}</strong>
                   <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>

                </div>
              ))}
            </div>
          </div>
          <div>
            <div>
              <span>GET IN TOUCH</span>
              <h2>
                Let's explore new ideas.
              </h2>
            </div>
         
          <div  className="contact-info">
            <p>{data.email}</p>
            <p> {data.phone}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About_Task