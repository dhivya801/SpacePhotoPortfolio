import{React,useEffect,useState}  from 'react'
import axios from 'axios'
const API_URL="https://dummyjson.com/c/a55e-94d8-46c6-9cb0"
const EliteTask2 = () => {
    const[data,setData]=useState(null)
    
    useEffect(() => {
    axios.get(API_URL)
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [])

    const[dark,setDark]=useState(false);
    const[birthdate,setBirthDate]=useState("");
    const[age,setAge]=useState(null);
    const calculateAge=()=>{
        if(!birthdate) return;
        const today = new Date();
         const birth = new Date(birthdate);
         let years = today.getFullYear() - birth.getFullYear();
         let months = today.getMonth() - birth.getMonth();
         let days = today.getDate() - birth.getDate();
          if (days<0) {
             months--;
            days = days + 30; 
    }
    if (months < 0) {
      years--;
      months = months + 12;
    }setAge({ years, months, days });
    }
     if (!data) {
        return <div>Connecting...</div>
    }
   
  return (
     <div style={{background:dark?"black":"white",color:dark?"white":"black",padding: "30px"}}>
      <h2>{dark ?"🌙":"☀️"}</h2>
      <button onClick={() => setDark(!dark)}>
        Change
    </button>
       <input type="date" value={birthdate} onChange={(e) => setBirthDate(e.target.value)} 
      />
    <button onClick={calculateAge}>
        Calculate Age
      </button>

      {age && (
        <div>
          <p>Years:{age.years}</p>
          <p>Months:{age.months}</p>
          <p>Days:{age.days}</p>
        </div>
        
      )}
      <div>
        <p>{data.timeStamp}</p>
        <p>{data.market}</p>
      </div>
        
    </div>
  )
}

export default EliteTask2
//https://dummyjson.com/c/a55e-94d8-46c6-9cb0