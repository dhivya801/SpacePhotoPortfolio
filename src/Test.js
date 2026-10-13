/*import React from 'react'
//variable decalaration:
let age=20;
age=21;
console.log(age);

const name="Dhivya";
console.log(name);

var city="Salem";
city="Salem";
console.log(city);

//Arithmetic operators:
let price=500;
let quantity=3;
let total=price*quantity;
console.log(total); //1500

//Logical operators:
let age1=20;
let hasID=true;
console.log(age1>=18 && hasID); //true
//OR ||
let hasGoogleLogin = false;
let hasGithubLogin = true;
console.log(hasGoogleLogin || hasGithubLogin); //true
//NOT !
let isLoggedIn=true;
console.log(!isLoggedIn); //false

//Comparison operators:
let age2 = 20;
console.log(age2 == 20); //true
console.log(age2 === 20); //true
console.log(age2 > 18); //true
console.log(age2 < 18); //false

//== vs ===:
console.log(5 == "5"); //true
console.log(5 === "5"); //false

//Control Flow:
let a = 20;
if (a >= 18) {
  console.log("Eligible to vote");
}

//if-else:
let mark = 35;
if (mark >= 40) {
  console.log("Pass");
} else {
  console.log("Fail");
}//Fail
//else-if:
let m = 85;
if (m >= 90) {
  console.log("A+");
} else if (m >= 80) {
  console.log("A");
} else {
  console.log("B");
}

//Promises:
const foodOrder=new Promise((resolve,reject)=>{
    let foodReady=true;
    if(foodReady){
        resolve("Food delivered");
    }else{
        reject("Food not delivered");
    }
});
foodOrder .then(result=> console.log(result))
          .catch(error=> console.log(error));
//Food delivered
/* Promise states
Pending
   ↓
Fulfilled  → success
   OR
Rejected   → failure  
*/

//JavaScript Objects:
/*const Students={
    name:"Dhivya",
    age:20,
    dept:"cse"
};
console.log(Students.name);

//Object with functions:
const Student = {
    name:"dhivya",
    greet:function(){
        console.log("Hello!");
    }
};
Student.greet(); //Hello!

//Spread operator:
const fruits=["apple","banana"];
const newFruits=[...fruits,"Orange"]
console.log(newFruits); //["apple","banana","Orange"]
//Obj Ex:
const user={
    name:"Dhivya",
    age:20
};
const updatedUser={
    ...user,
    city:"Salem"
}
console.log(updatedUser); //{name: "Dhivya", age: 20, city: "Salem"}

//Rest operator:
function add(...numbers){
    console.log(numbers);
}
add(1,2,3,4,5); //[1, 2, 3, 4, 5]
//Ex:
function added(...number){
    return number.reduce((a,b)=>a+b,0);
}
console.log(added(10, 20, 30));

//Array Methods:
//map():
const num=[1,2,3];
const res=num.map((n)=>n*2);
console.log(res); //[2, 4, 6]

//filter():
const mk=[30,50,80,90];
const passed=mk.filter(m=>m>=40);
console.log(passed); //[50, 80, 90]

//Event handling:
function App(){
    const handleClick=()=>{
        alert("Button clicked");
    }
    return(
        <button onClick={handleClick}>Click Me</button>
    );
}
function App1(){
    const handleChange=(event)=>{
        console.log(event.target.value);
    }
    return(
        <input onChange={handleChange}/>
    );
}
//Usestate import {useSate} from 'react'
function App2(){
    const[name,setName]=useState("");
    const handleChange=(event)=>{
        setName(event.target.value);
    }
    return(
        <div>
            <input value={name} onChange={handleChange}/>
            <p>Name: {name}</p>
        </div>
    );
}

//useEffect:
import React, { useEffect, useState } from 'react';
function App3() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}

//Conditional rendering:
function App4() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Log out" : "Log in"}
      </button>
    </div>
  );
}*/