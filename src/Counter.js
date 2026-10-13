import React,{useState,useEffect} from 'react'
const Counter=()=>{
    const[count,setCount]=useState(0)
     
    const btn={
        padding:"10px",
        borderRadius:"10px",
        backgroundColor:"green",
        color:"white",
        border:"none",
        margin:"5px",
        cursor:"pointer"

    }
    //without dependencies->one time run 
    /*useEffect(()=>{
       // console.log("UseEffect Rendered")
       document.title="counter"
    },[])*/
    /*useEffect(()=>{
        setCount(42)
    })*/
    //with dependencies
   /* useEffect(()=>{
        console.log("counter button is pressed")
    },[count])
    //empry dependencies
    useEffect(()=>{
        console.log("every time")
    })*/
   //delay function 
   function timeout(){
    setTimeout(()=>{
        ()=>{
            console.log("test")
        },1000
    })
   }
   //to run function repeatedly
   function interval(){
    setInterval(()=>{
        console.log("interval test")
    },1000)
   }
    return(
        <div style={{textAlign:"center"}}>
            <h1>Count:{count}</h1>
            <button style={btn} onClick={()=>setCount(count+1)}>INCREMENT</button>
            <button styele={btn} onClick={()=>setCount(count-1)}>DECREMENT</button>
            <button style={btn} onClick={()=>setCount(0)}>RESET</button>
           <button style={btn} onClick={()=>setTimeout}>Timeout</button>
            <button style={btn} onClick={()=>setInterval}>Interval</button>
           
        </div>
    )
}