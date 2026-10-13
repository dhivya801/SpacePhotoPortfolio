/*import {React,useState} from 'react'
import './ErrorHandling.css'
function ErrorHandling({data}) {
    console.log(data)
    const[value,setValue]=useState(
        {
           name:"",
           email:"",
           mobile:""
        }
    )
    const[errors,setErrors]=useState({
        nameError:"",
        emailError:"",
        mobileError:""
    })
function change (event){
    setValue(
        {
            ...value,
            [event.target.name]:event.target.value
        }
    )
}


function handleSubmit(event){
    event.preventDefault();
    if(value.name == ""){
       setErrors({
        ...errors,
        nameError:"Field is required"
       })
    }else if(value.name.length<3){
       setErrors({
        ...errors,
        nameError:"less than 3 letters"
       })
    }

}
  return (
    <div>
        <div className='container'>
         <div>
            <h1 className='left'>LEARN AND DISCOVER</h1>
        </div>
        <div className='rightForm'>
        <form onSubmit={handleSubmit} >
        <input type="text" placeholder="Name" name="name" onChange={change} /><br /> <br />
        <span style={{color:"red"}}>{errors.nameError} </span><br />
        <input type="email" placeholder="Email" name="email" onChange={change}/><br /> <br/>
        <input type="number" placeholder="mobile" name="mobile" onChange={change} /><br /> <br />
        <button type="submit">Submit</button>
        </form>
        </div>
        </div>
   
    </div>
  )
}

export default ErrorHandling*/


import React, { useState } from 'react';
import './ErrorHandling.css';
import campusImage from './mec-campus.jpeg';

function ErrorHandling({ data }) {
  console.log(data);

  const [value, setValue] = useState({
    name: '',
    fatherName: '',
    dob: '',
    gender: '',
    registerNumber: '',
    email: '',
    mobile: '',
    parentMobile: '',
    community: '',
    firstGraduate: '',
    address: '',
    city: '',
    district: '',
    state: '',
    course: '',
    referredBy: ''
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');
  function change(event) {
    const { name, value: inputValue } = event.target;

    setValue(prev => ({
      ...prev,
      [name]: inputValue
    }));

    setErrors(prev => ({
      ...prev,
      [name]: ''
    }));

    setSuccess('');
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newErrors = {};

    if (!value.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (value.name.trim().length < 3) {
      newErrors.name = 'Enter at least 3 characters';
    }

    if (!value.fatherName.trim()) {
      newErrors.fatherName = 'Father name is required';
    }

    if (!value.dob) {
      newErrors.dob = 'Date of birth is required';
    }

    if (!value.gender) {
      newErrors.gender = 'Please select gender';
    }

    if (!value.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.email)) {
      newErrors.email = 'Enter a valid email';
    }

    if (!/^[0-9]{10}$/.test(value.mobile)) {
      newErrors.mobile = 'Enter a valid 10-digit mobile number';
    }

    if (
      value.parentMobile &&
      !/^[0-9]{10}$/.test(value.parentMobile)
    ) {
      newErrors.parentMobile = 'Enter a valid 10-digit mobile number';
    }

    if (!value.community) {
      newErrors.community = 'Please select community';
    }

    if (!value.firstGraduate) {
      newErrors.firstGraduate = 'Please select an option';
    }

    if (!value.address.trim()) {
      newErrors.address = 'Address is required';
    }

    if (!value.city.trim()) {
      newErrors.city = 'City / Town is required';
    }

    if (!value.district.trim()) {
      newErrors.district = 'District is required';
    }

    if (!value.state) {
      newErrors.state = 'Please select state';
    }

    if (!value.course) {
      newErrors.course = 'Please select a course';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Admission details:', value);
      setSuccess(
        'Form validated successfully! This demo does not send your application.'
      );
    } else {
      setSuccess('');
    }
  }

  return (
    <div
      className="admission-container"
      style={{ '--campus-image': `url("${campusImage}")` }}
    >
      <div className="left">
        <h1>
          LEARN &amp;
          <br />
          DISCOVER.
        </h1>
      </div>

      <div className="rightForm">
        <form onSubmit={handleSubmit} noValidate>
          <h2>ONLINE ADMISSION ENQUIRY - 2026</h2>

          <div className="form-grid">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                value={value.name}
                onChange={change}
              />
              <span className="error">{errors.name}</span>
            </div>

            <div className="field">
              <label htmlFor="fatherName">Father Name</label>
              <input
                id="fatherName"
                name="fatherName"
                type="text"
                placeholder="Father Name"
                value={value.fatherName}
                onChange={change}
              />
              <span className="error">{errors.fatherName}</span>
            </div>

            <div className="field">
              <label htmlFor="dob">Date of Birth</label>
              <input
                id="dob"
                name="dob"
                type="date"
                value={value.dob}
                onChange={change}
              />
              <span className="error">{errors.dob}</span>
            </div>

            <div className="field">
              <label htmlFor="gender">Gender</label>
              <select
                id="gender"
                name="gender"
                value={value.gender}
                onChange={change}
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <span className="error">{errors.gender}</span>
            </div>

            <div className="field">
              <label htmlFor="registerNumber">
                Register Number [+2 / Diploma / UG]
              </label>
              <input
                id="registerNumber"
                name="registerNumber"
                type="text"
                placeholder="Register Number"
                value={value.registerNumber}
                onChange={change}
              />
            </div>

            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email Id"
                value={value.email}
                onChange={change}
              />
              <span className="error">{errors.email}</span>
            </div>

            <div className="field">
              <label htmlFor="mobile">Mobile Number</label>
              <input
                id="mobile"
                name="mobile"
                type="tel"
                inputMode="numeric"
                maxLength={10}
                placeholder="Mobile Number"
                value={value.mobile}
                onChange={change}
              />
              <span className="error">{errors.mobile}</span>
            </div>

            <div className="field">
              <label htmlFor="parentMobile">Parent Mobile Number</label>
              <input
                id="parentMobile"
                name="parentMobile"
                type="tel"
                inputMode="numeric"
                maxLength={10}
                placeholder="Parent Mobile Number"
                value={value.parentMobile}
                onChange={change}
              />
              <span className="error">{errors.parentMobile}</span>
            </div>

            <div className="field">
              <label htmlFor="community">Community</label>
              <select
                id="community"
                name="community"
                value={value.community}
                onChange={change}
              >
                <option value="">Select</option>
                <option value="OC">OC</option>
                <option value="BC">BC</option>
                <option value="BCM">BCM</option>
                <option value="MBC">MBC</option>
                <option value="SC">SC</option>
                <option value="SCA">SCA</option>
                <option value="ST">ST</option>
              </select>
              <span className="error">{errors.community}</span>
            </div>

            <div className="field">
              <label htmlFor="firstGraduate">First Graduate</label>
              <select
                id="firstGraduate"
                name="firstGraduate"
                value={value.firstGraduate}
                onChange={change}
              >
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              <span className="error">{errors.firstGraduate}</span>
            </div>

            <div className="field">
              <label htmlFor="address">Address</label>
              <input
                id="address"
                name="address"
                type="text"
                placeholder="Address"
                value={value.address}
                onChange={change}
              />
              <span className="error">{errors.address}</span>
            </div>

            <div className="field">
              <label htmlFor="city">City / Town</label>
              <input
                id="city"
                name="city"
                type="text"
                placeholder="City / Town"
                value={value.city}
                onChange={change}
              />
              <span className="error">{errors.city}</span>
            </div>

            <div className="field">
              <label htmlFor="district">District</label>
              <input
                id="district"
                name="district"
                type="text"
                placeholder="District"
                value={value.district}
                onChange={change}
              />
              <span className="error">{errors.district}</span>
            </div>

            <div className="field">
              <label htmlFor="state">State</label>
              <select
                id="state"
                name="state"
                value={value.state}
                onChange={change}
              >
                <option value="">Select</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Kerala">Kerala</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Telangana">Telangana</option>
                <option value="Other">Other</option>
              </select>
              <span className="error">{errors.state}</span>
            </div>

            <div className="field">
              <label htmlFor="course">Course</label>
              <select
                id="course"
                name="course"
                value={value.course}
                onChange={change}
              >
                <option value="">Select</option>
                <optgroup label="UG Courses">
                  <option value="B.E. CSE">
                    B.E. Computer Science and Engineering
                  </option>
                  <option value="B.E. CSE AI and ML">
                    B.E. CSE (AI and ML)
                  </option>
                  <option value="B.Tech. AI and DS">
                    B.Tech. AI and Data Science
                  </option>
                  <option value="B.Tech. IT">
                    B.Tech. Information Technology
                  </option>
                  <option value="B.E. ECE">
                    B.E. Electronics and Communication Engineering
                  </option>
                  <option value="B.E. EEE">
                    B.E. Electrical and Electronics Engineering
                  </option>
                  <option value="B.E. Mechanical">
                    B.E. Mechanical Engineering
                  </option>
                  <option value="B.E. Civil">
                    B.E. Civil Engineering
                  </option>
                </optgroup>
                <optgroup label="PG Courses">
                  <option value="MBA">MBA</option>
                  <option value="MCA">MCA</option>
                  <option value="M.E. CSE">
                    M.E. Computer Science and Engineering
                  </option>
                </optgroup>
              </select>
              <span className="error">{errors.course}</span>
            </div>

            <div className="field">
              <label htmlFor="referredBy">Referred by</label>
              <input
                id="referredBy"
                name="referredBy"
                type="text"
                placeholder="Name & Mobile No."
                value={value.referredBy}
                onChange={change}
              />
            </div>
          </div>

          {success && (
            <p className="success-message" role="status">
              {success}
            </p>
          )}

          <button type="submit" className="apply-btn">
            Apply
          </button>
        </form>
      </div>
    </div>
  );
}

export default ErrorHandling;
