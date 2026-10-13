import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import bg from './scifi-bg.png'
import './Login_Task.css'

const API_URL = 'https://dummyjson.com/c/0155-9af0-486b-b59f'
const Login_Task=()=>{
    const[data,setData]=useState(null)
    const[createAccount,setCreateAccount]=useState(false)
    const[message,setMessage]=useState('')
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
   
    useEffect(()=>{
        axios.get(API_URL)
        .then(res=>setData(res.data))
        .catch(err=>console.log(err))
    },[])
const handleSubmit=(e)=>{
    e.preventDefault()
    if(!email || !password){
        setMessage('Please enter your email and password')
    return
}
  if(createAccount){
    setMessage("Account created succesfully!")
  }else{
    setMessage("Login submitted successfully")
  }
}
if(!data){
    return <div>Connecting to station...</div>
}
return(
    <section className='login-page' style={{backgroundImage: `url(${bg})`}}>
        <div className="login-overlay"></div>
        <nav  className="navbar">
            <h2>✦ NOVA</h2>
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
            <div className="login-content">
                <div className="login-intro" >
                    <span  className="login-eyebrow">{data.eyebrow}</span>
                    <h1>{createAccount?'Join the station.':data.title}</h1>
                    
                    <p>{createAccount?'Create your account and begin your journey.':data.subtitle}</p>
                    <div className="security-note">{data.securityNote}</div>
                </div>
            
            <form className="login-form" onSubmit={handleSubmit}>
                <span className="form-number">{createAccount?'NEW EXPLORER':'ACCESS TERMINAL'}</span>
                <h2>{createAccount?'Create Account':'Sign in'}</h2>
                {createAccount && (
                    <>
                    <label>Full Name</label>
                    <input type="text" placeholder="Enter your name" value={name} onChange={e=>setName(e.target.value)} />
                    </>
                )}

                <label>{data.emailLabel}</label>
                <input type="email" placeholder={data.emailPlaceholder} value={email} onChange={e=>setEmail(e.target.value)}   />
                <label>{data.passwordLabel}</label>
                <input  type="password" placeholder={data.passwordPlaceholder} value={password} onChange={e=>setPassword(e.target.value)}     />
                <button type="submit">{createAccount?'Create Account':data.buttonText}↗</button>
                {message && (
                    <p  className="login-message">{message}</p>
                )}
                <div  className="login-footer">
                    <span>{createAccount? 'Already have an account':data.footerText}</span>
                    <button type="button" className="create-account" onClick={() => {
                       setCreateAccount(!createAccount)
                       setMessage('')
              }}> {createAccount?'Sign in':'Create an account' }</button>

                </div>

            </form>

    </div>
    </section>
)
}

export default Login_Task