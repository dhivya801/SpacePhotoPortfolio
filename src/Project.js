import {React,useState} from 'react'
import './Project.css'

const Project=()=>{
const [form,setForm]=useState({
     id:0,
        name:"Divzz",
        age:30,
        department:"AI&DS",
})
const [value,setValue]=useState({
     id:1,
        name:"Dhivya",
        age:20,
        department:"CSE",
})
function change(event){
    setValue({
        ...value,
        [event.target.name]:event.target.value
       
    })
}

function submit(event){
    event.preventDefault();
    setForm({
        ...form,
       name:value.name,
       department:value.department,
       age:value.age

    })
}
return(
    <div>
        {/*{value.name}*/}
        {form.name}<br />
        {form.age}<br />
        {form.department}
        
       
      

        
        <form onSubmit={submit}>
            <label>Name:</label> <br /> <input onChange={change} name={"name"} placeholder="Enter you name" /> <br />
            <label>Department:</label><br /> <input onChange={change} name={"department"}/><br />
            <label>Age:</label> <br /> <input onChange={change} name={"age"} /><br />
            <button type="submit">Submit</button>
        </form>
    </div>
)
}
/*const Project=()=>{
    /*const [value,setValue]=useState(false);
    const[input,setInput]=useState("Your data will be visible here")
    const[email,setEmail]=useState("")
    const[age,setAge]=useState(0)*/
    
    /*const [value,setValue]=useState({
    
        id:1,
        name:"Dhivya",
        age:20,
        department:"CSE",
});
function change(event){
setvalue({
    ...value,
    name:event.target.value})
}
    
/*function inc(){
    /*if(value==0){
        setValue(1)
    }else{
        setValue(0)
    }*/
   //setValue(value === 0 ? 1 : 0)
   //setValue(!value)
//}
/*function getData(event){
    setInput(event.target.value)

}
console.log(value)*/

/*function emailReg (event){
    setEmail(event.target.value);
}

function register(event){
    setInput(event.target.value)

}
function handleSubmit(event){
    event.preventDefault();
    alert(input + " " + email + " " + age);
    


}*/


  /*  return(
        <div style={{backgroundColor:value ? "#23272f" : "beige",height:"100vh"}}>
           {value} <br />
           <center><span style={{cursor:"pointer"}}onClick={inc}>{value ? "☀️" : "🌙"}</span> <br /><br /></center>
           <form onSubmit={handleSubmit}>
                Name:  <input onChange={register} /> <br /> <br />
                Email: <input onChange={emailReg}/> <br /> <br />
                Age:   <input style={{marginLeft:"15px"}}onChange={(e)=> setAge(e.target.value)} /> <br /> <br />
                
                
                <button type="submit">Submit</button>
           </form>
           
           
          
        </div>
    )
}*/
/*import React, { useState } from 'react';

const Project = () => {
  // 1. Define states for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  
  // 2. Define state for dark/light mode theme
  const [darkMode, setDarkMode] = useState(false);

  // Toggle theme function
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${name}\nEmail: ${email}\nAge: ${age}`);
  };

  return (
    <div style={{ backgroundColor: darkMode ? "#23272f" : "beige", height: "100vh", color: darkMode ? "white" : "black", padding: "20px" }}>
      <center>
        <span style={{ cursor: "pointer", fontSize: "2rem" }} onClick={toggleTheme}>
          {darkMode ? "☀️" : "🌙"}
        </span>
      </center>
      
      <br /><br />
      
      <form onSubmit={handleSubmit} style={{ maxWidth: "300px", margin: "0 auto" }}>
        <div>
          <label>Name: </label>
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <br />
        <div>
          <label>Email: </label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <br />
        <div>
          <label>Age: </label>
          <input style={{ marginLeft: "15px" }} value={age} onChange={(e) => setAge(e.target.value)} />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Project;
*/
export default Project