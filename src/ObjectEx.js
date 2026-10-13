import React from "react";

const ObjectEx=()=>{
    const student=[{
        id:1,
        name:"Dhivya",
        age:20,
        department:"B.E",
        marks:90
},
{
   
        id:12,
        name:"Dhiv",
        age:22,
        department:"B.E",
        marks:95
}
]
/*const data = student.map((i)=>{
    return(
        <>
        {console.log(i.name)}
        </>
    )
})*/
//const filteredStudents = student.filter((item) => item.marks > 90);
const numbers=[1,2,3,4,5,6];
console.log("pop",numbers.pop(),numbers)//remove last element
console.log("push",numbers.push(7),numbers)//add first element
console.log("shift",numbers.shift(),numbers)//remove the first element
console.log("unshift",numbers.unshift(0),numbers)//add the first element
const filtered=numbers.filter(
    function (x){
        return x>2
    }
)
console.log(filtered)


const name=["Divzz","Nova","Karthika","Sandy"]
/*const result=name.slice(1,2)
console.log("result",result,name)*/

//const spliceresult=name.splice(1,1,"added")
const spliceresult=name.splice(2,2)

console.log(">>>>>>",spliceresult)
console.log(name)
/*const datamark=student.filter(
    function(i){
        return i.marks>90
    }
)
console.log(datamark)*/

const datamark=student.filter((i)=>i.marks>90)
console.log(datamark)
    return(

        <>
       
           {}
                <>
                <table>
                   <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Marks</th>
                    </tr>
                   </thead>
                   <tbody>
                    <tr>
                        <td>Dhivya</td>
                        <td>20</td>
                        <td>95</td>
                    </tr>
                     <tr>
                        <td>Divzz</td>
                        <td>25</td>
                        <td>90</td>
                    </tr>

                   </tbody>
                    
                </table>
                 </>
            
    {datamark.map((i)=>{
        return(
            <>
            {i.name}
            </>
        )
    })}
        {/*{student.map((i)=>{
            return( <>
            {i.name} &nbsp; {i.age} &nbsp; {i.department} &nbsp; {i.marks} <br />
            </>
            )
        })}*/}


        {/*{student[0].id}<br />
        {student[1].name}*/}

      </>
    )
}
export default ObjectEx 
/* return (
    <div>
      {student.map((i) => { 
        return ( 
          <> 
            {i.name} &nbsp; {i.age} &nbsp; {i.department} &nbsp; {i.marks} 
            <br /> 
          </> 
        ); 
      })}
    </div>
  );*/