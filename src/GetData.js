import {React,useState,useEffect} from 'react'
import axios from 'axios'

//axios-> get data from website 
const GetData = () => {
    const[data,setData]=useState([])
    useEffect(()=>{
        axios.get("https://dummyjson.com/c/9048-b231-40f2-9182")
        .then((res)=>setData(res.data))
    },[])
    console.log(data)
  return (
    <div>
         <table>
                    <thead>
                        <tr>
                            <th>ID</th> &nbsp; &nbsp;
                            <th>Name</th>&nbsp; &nbsp;
                            <th>Email</th>
                        </tr>
                    </thead>
                </table>
        {data.map((i)=>{
            return(
                <>
                <tbody>
                    <tr>
                        <td>{i.id}</td>&nbsp; &nbsp;
                        <td>{i.name}</td>&nbsp; &nbsp;
                        <td>{i.email}</td>
                        
                    </tr>
                </tbody>
                </>
            )
        })}
    </div>
  )
}

export default GetData