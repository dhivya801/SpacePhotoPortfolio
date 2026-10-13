import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import bg from './accordion-bg.png'
import './Accordion_Task.css'

const API_URL = 'https://dummyjson.com/c/2a42-ffef-46e6-8e51'
const Accordion_Task=()=>{
const[data,setData]=useState(null)
const[open,setOpen]=useState(null)
useEffect(()=>{
  axios.get(API_URL)
  .then(res=>setData(res.data))
  .catch(err=>console.log(err))
},[])
if(!data){
  return<div  className="accordion-loading">Loading...</div>
}
return(
  <section  className="accordion-page" style={{ backgroundImage: `url(${bg})` }}>
    <div  className="accordion-overlay"></div>
    
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
    <div className="accordion-content">
      <div className="accordion-head">
        <span>{data.eyebrow}</span>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
      </div>
      <div className="accordion-list">
        {data.items.map(item=>(
          <div className={`accordion-item ${
            open==item.id?'open':''
          }`} key={item.id}>
           <button className='accordion-question'
           onClick={()=>setOpen(open==item.id?null:item.id)}>
            <span>{item.question} </span>
              <b>{open==item.id?'-':'+'}</b>
           
           </button>
           {open==item.id &&(
            <div className="accordion-answer">
              <p>{item.answer}</p>
            </div>
           )}
          </div>
        ))}
      </div>
    </div>

  </section>
)
}

export default Accordion_Task