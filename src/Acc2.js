
import { React, useState } from 'react'

const Project = () => {
const [value,setValue]=useState({task:"",priority:"Low"})
const [tasks,setTasks]=useState([])
const [dark,setDark]=useState(false)
const [open,setOpen]=useState(null)
const [modal,setModal]=useState(false)
const [deleteId,setDeleteId]=useState(null)

function change(event){
    setValue({...value,[event.target.name]:event.target.value})
}

function submit(event){
    event.preventDefault()
    setTasks([...tasks,{
        id:tasks.length+1,
        name:value.task,
        priority:value.priority,
        completed:false
    }])
    setValue({task:"",priority:"Low"})
}

function complete(id){
    setTasks(tasks.map((res)=>{
        if(res.id==id)
            return {...res,completed:!res.completed}
        return res
    }))
}

function openModal(id){
    setDeleteId(id)
    setModal(true)
}

function deleteTask(){
    setTasks(tasks.filter((res)=>res.id!=deleteId))
    setModal(false)
}

function handleId(id){
    setOpen(open==id?null:id)
}

const completedTasks=tasks.filter((res)=>res.completed==true)

return(
<div style={{
    backgroundColor:dark?"#23272f":"beige",
    color:dark?"white":"black",
    minHeight:"100vh"
}}>

<center><h1 style={{ fontFamily: "Times New Roman", fontSize: "2.5em" }}>Task Manager</h1></center>

<center><button style={{ backgroundColor: dark ? "black" : "rgb(228, 228, 188)", color: dark ? "white" : "black", borderRadius:"5px", padding:"4px", fontWeight:"700", fontStyle:"Times New Roman"}} onClick={()=>setDark(!dark)}>
{dark?"☀️ Light Mode":"🌙 Dark Mode"}
</button></center>

<div style={{backgroundColor:"rgb(228, 228, 188)",margin:"20px" ,marginLeft:"550px",marginRight:"550px",border:"1px solid black",padding:"20px",borderRadius:"10px"}}>
<h2 style={{ fontFamily: "Times New Roman", fontSize: "1.5em",marginLeft:"20%" }}>
  Total Tasks: {tasks.length}</h2>

<form onSubmit={submit}>
<label style={{fontFamily:"Times New Roman",fontWeight:"700"}}>Task:</label><br/>
<input style={{borderRadius:"5px", padding:"4px", fontWeight:"700", fontStyle:"Times New Roman",marginTop:"10px",border:"2px solid black"}} name="task" value={value.task}
onChange={change} placeholder="Enter task"/><br/><br/>

<label  style={{fontFamily:"Times New Roman",fontWeight:"700"}}>Priority:</label><br/>
<select style={{borderRadius:"5px", padding:"4px", fontWeight:"700", fontStyle:"Times New Roman",marginTop:"10px",border:"2px solid black"}} name="priority" value={value.priority} onChange={change}>
<option>Low</option>
<option>Medium</option>
<option>High</option>
</select><br/><br/>
<center>
<button  style={{ borderRadius:"5px", padding:"4px", fontWeight:"700", fontStyle:"Times New Roman",marginTop:"10px",border:"2px solid black",backgroundColor:"rgb(75, 22, 22)",color:"white",paddingLeft:"20px",paddingRight:"20px"}}type="submit">Add Task</button>
</center>
</form>
</div>



<center><h2 style={{ fontFamily: "Times New Roman", fontSize: "25px" }}>All Tasks</h2></center>

{tasks.map((res)=>{
return(
<div key={res.id}>

<center><p style={{fontFamily:"Times New Roman",fontWeight:"700",marginTop:"10px"}} >{res.name} | {res.priority} | {res.completed ? "Completed" : "Pending"}</p>
<button style={{borderRadius:"5px", padding:"4px", fontWeight:"700", fontStyle:"Times New Roman",marginTop:"10px",border:"2px solid black",backgroundColor:"rgb(75, 22, 22)",color:"white",marginRight:"30px"}} onClick={()=>complete(res.id)}>
{res.completed?"Mark Pending":"Mark Completed"}
</button>


<button style={{borderRadius:"5px", padding:"4px", fontWeight:"700", fontStyle:"Times New Roman",marginTop:"10px",border:"2px solid black",backgroundColor:"rgb(75, 22, 22)",color:"white"}} onClick={()=>openModal(res.id)}>Delete</button>
</center> 

</div>

)
})}

<div style={{backgroundColor:"rgb(228, 228, 188)",margin:"20px",marginLeft:"450px",marginRight:"450px" ,border:"1px solid black",padding:"20px",borderRadius:"10px"}}>
<h2 style={{ fontFamily: "Times New Roman", fontSize: "1.5em",marginLeft:"40%" }}>Completed Tasks</h2>
<span style={{fontFamily:"Times New Roman",fontWeight:"700",marginTop:"10px"}}>
{completedTasks.map((res)=>{
return <p key={res.id}>{res.name} : Completed</p>
})}
</span>
</div>


<center><h2 style={{ fontFamily: "Times New Roman", fontSize: "25px" }}>How to use this app</h2></center>
<div >
<p style={{  
    backgroundColor:" rgb(87, 66, 66)",marginLeft:"500px",marginRight:"500px" ,
    fontFamily: "Times New Roman",
    padding:"6px",
    fontSize:"20px",
    color:"white",
    cursor:"pointer",
    marginBottom: "10px",
    marginTop: "10px"}} onClick={()=>handleId(1)}>How to Add Task </p>
<center>{open==1?<p style={{fontFamily:"Times New Roman",fontSize:"18px",fontWeight:"600"}}>Enter task and click Add Task.</p>:""}</center>

<p style={{  marginLeft:"500px",marginRight:"500px" ,
    backgroundColor:" rgb(87, 66, 66)",
    fontFamily: "Times New Roman",
    padding:"6px",
    fontSize:"20px",
    color:"white",
    cursor:"pointer",
    marginBottom: "10px",
    marginTop: "10px"}} onClick={()=>handleId(2)}>How to Complete Task</p>
<center>{open==2?<p style={{fontFamily:"Times New Roman",fontSize:"18px",fontWeight:"600" }}>Click Mark Completed.</p>:""}</center>

<p style={{ marginLeft:"500px",marginRight:"500px" ,
    backgroundColor:" rgb(87, 66, 66)",
    fontFamily: "Times New Roman",
    padding:"6px",
    fontSize:"20px",
    color:"white",
    cursor:"pointer",
    marginBottom: "10px",
    marginTop: "10px"}} onClick={()=>handleId(3)}>How to Delete Task</p>
<center>{open==3?<p style={{fontFamily:"Times New Roman",fontSize:"18px",fontWeight:"600"}}>Click Delete and confirm.</p>:""}</center>
</div>
{modal?
<div style={{backgroundColor:"rgb(50, 129, 117)",color:"white",margin:"20px",marginLeft:"650px",marginRight:"650px" ,border:"1px solid black",padding:"20px",borderRadius:"10px"}}>
<h3 style={{fontFamily:"Times New Roman",fontSize:"20px",fontWeight:"600"}}>Confirm Delete</h3>
<p style={{marginTop:"10px",marginLeft:"10px"}}>Are you sure?</p>
<button style={{borderRadius:"5px", padding:"4px", fontWeight:"700", fontStyle:"Times New Roman",marginTop:"10px",border:"2px solid black",backgroundColor:"rgb(231, 237, 185)",color:"black",marginLeft:"10px"}} onClick={deleteTask}>OK</button>
<button style={{borderRadius:"5px", padding:"4px", fontWeight:"700", fontStyle:"Times New Roman",marginTop:"10px",border:"2px solid black",backgroundColor:"rgb(231, 237, 185)",color:"black",marginLeft:"10px"}} onClick={()=>setModal(false)}>Cancel</button>
</div>
:""}

</div>

)
}

export default Project