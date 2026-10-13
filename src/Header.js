import {React,useState} from 'react'

function Header(){
   const[status,setStatus]=useState("")
    const hour = new Date().toLocaleTimeString;
    console.log(hour);
    if(hour>="16:11:52 pm"&& status!="grey"){
        console.log("offline")
      
        setStatus("grey")
       
    }
    
   return(
    <> 
    <div style={({width:"100%",height:"100vh",backgroundColor: status})}>
      HEADER
      {status}
      <button disabled={setStatus=="grey ? true:false"}>test</button>
     </div>
    </>
   )
}
export default Header