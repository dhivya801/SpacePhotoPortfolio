//import React from 'react'


    /*const Students=[{
        id:1,
        name:"Dhivya",
        age:20,
        department:"CSE",
},
{
        id:2,
        name:"Dhiv",
        age:22,
        department:"ECE",
},
{
        id:3,
        name:"Divzz",
        age:24,
        department:"Mech",
},
{
        id:4,
        name:"Nova",
        age:28,
        department:"AI & DS",
},
{
        id:5,
        name:"Sandy",
        age:29,
        department:"AI & ML",
},
{
        id:6,
        name:"Kowsi",
        age:30,
        department:"Cyber",
},
{
        id:7,
        name:"Karthika",
        age:31,
        department:"CSBS",
},
{
        id:8,
        name:"Salif",
        age:21,
        department:"AI&DS",
},
{
        id:9,
        name:"Gopika",
        age:32,
        department:"CSE",
},
{
        id:10,
        name:"Moni",
        age:27,
        department:"ECE",
}
]

console.log(Students);
function Spread(){
    
    {Students.map((i)=>{
        return(
            <>
            {i.name}
            </>
        )
    })}

}*/
function Spread(){
    const cars={
        name:"citreon",
        price:"1,00,000",
        city:"Salem",
        color:"Black",
        model:"2026",
        variant:"shine",
        capacity:"45L",
        suspension:"mac"
    }
    const {name,price,city,color, ...remains}=cars

    const updatedCars={
        ...cars,
        model:"2027"
    }
    
    console.log(remains)
    return(
        <>
        <div>
            {price}
        </div>
        </>
    )
}


export default Spread


