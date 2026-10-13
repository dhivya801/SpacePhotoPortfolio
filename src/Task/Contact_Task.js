import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import bg from './contact-bg.jpg'
import './Contact_Task.css'

const API_URL = 'https://dummyjson.com/c/d320-a06c-4aab-91cf'

const Contact_Task = () => {
  const [data, setData] = useState(null)
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [sent, setSent] = useState(false)

  useEffect(() => {
    axios.get(API_URL)
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [])

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (form.name && form.email && form.message) {
      setSent(true)
      setForm({
        name: '',
        email: '',
        message: ''
      })
    }
  }
  if (!data) {
    return <div className="contact-loading">Connecting...</div>
  }
  return (
    <section
      className="contact-page"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="contact-overlay"></div>
      <nav className="navbar">
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
      <div className="contact-content">
        <div className="contact-intro">
          <span className="contact-eyebrow">
            {data.eyebrow}
          </span>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          <div className="contact-info">
            <h3>{data.contactTitle}</h3>
            <p>✉ {data.email}</p>
            <p>☎ {data.phone}</p>
            <p>⌖ {data.location}</p>
            <span className="availability">
              ● {data.availability}
            </span>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>{data.nameLabel}</label>
          <input
            type="text"
            name="name"
            placeholder={data.namePlaceholder}
            value={form.name}
            onChange={handleChange}
          />
          <label>{data.emailLabel}</label>
          <input
            type="email"
            name="email"
            placeholder={data.emailPlaceholder}
            value={form.email}
            onChange={handleChange}
          /><label>{data.messageLabel}</label>
          <textarea
            name="message"
            placeholder={data.messagePlaceholder}
            value={form.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit">
            {data.buttonText} ↗
          </button>
          {sent && (
            <p className="success-message">
              {data.successMessage}
            </p>
          )}
          </form>
          </div>
        </section>
  )
}

export default Contact_Task