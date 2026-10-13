import React,{useState,useEffect} from 'react'
const Count=()=>{
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
        
            console.log("test")
        },1000
    )
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
            <button style={btn} onClick={()=>setCount(count-1)}>DECREMENT</button>
            <button style={btn} onClick={()=>setCount(0)}>RESET</button>
           <button style={btn} onClick={timeout}>Timeout</button>
            <button style={btn} onClick={interval}>Interval</button>
           
        </div>
    )
}
export default Count;
{/* import React, { useState, useEffect } from 'react';

const Count = () => {
    const [count, setCount] = useState(0);
    const [isIntervalRunning, setIsIntervalRunning] = useState(false);

    // 1. Timeout logic
    const handleTimeout = () => {
        setTimeout(() => {
            console.log("test");
        }, 1000);
    };

    // 2. Interval logic (safely handled inside useEffect)
    useEffect(() => {
        if (!isIntervalRunning) return;

        const intervalId = setInterval(() => {
            console.log("interval test");
        }, 1000);

        // Clears the interval when stopped or when component unmounts
        return () => clearInterval(intervalId);
    }, [isIntervalRunning]);

    return (
        <div>
            <h1>Count: {count}</h1>
            
            <button onClick={() => setCount(count + 1)}>INCREMENT</button>
            <button onClick={() => setCount(count - 1)}>DECREMENT</button>
            <button onClick={() => setCount(0)}>RESET</button>
            
            <button onClick={handleTimeout}>Timeout</button>
            <button onClick={() => setIsIntervalRunning(!isIntervalRunning)}>
                {isIntervalRunning ? "Stop Interval" : "Start Interval"}
            </button>
        </div>
    );
};

export default Count;
*/
}