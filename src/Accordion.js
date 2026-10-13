import {React,useState} from 'react'
import './Accordion.css'
const Accordion=()=>{
    const[open,setOpen]=useState(null)//for accordion
   /*function expand(){
        setOpen(!open)
    }*/
        const accor=[
            {id:1,title:"accordion 1",para:"paragraph:1"},
            {id:2,title:"accordion 2",para:"paragraph:2"}
        ]
    function handleId(id){
        console.log(id)
        //setOpen(id)
        setOpen(open == id?null:id)

    }
    return(
        <>
        {/*<p className='head' onClick={expand}>Accordion 1</p>
        {open?
        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eos quaerat natus iste, sunt tenetur. Vero error sunt modi inventore. Nulla quia quas in iusto necessitatibus est totam dolorem voluptatum harum! Voluptatibus asperiores odit animi impedit a quia, rem similique adipisci sint. Aliquid magnam maxime voluptatum corrupti quasi laudantium iste.</p>
        :""}
        <p className='head' >Accordion 2</p>
        <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam maxime magnam, harum sequi aperiam veniam? Eveniet eius id est laboriosam quos incidunt officia architecto tempora nobis ipsa. Consequuntur fugiat, at aperiam accusamus temporibus saepe dolores quae, reiciendis quidem incidunt voluptatum facere quia nostrum illum quas eligendi harum amet asperiores?</p>*/}

        {
            accor.map((res)=>{
                return(
                    <>
                    <p className='head' onClick={()=>handleId(res.id)}>{res.title}</p>
                    {open == res.id?<p>{res.para}</p>:""}
                    </>
                )
            })
        }
        </>
    )
}
export default Accordion