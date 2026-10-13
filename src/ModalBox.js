import {React,useState} from 'react'
import './ModalBox.css'
import image from './elite.jpeg'
function ModalBox() {
    const [modal,setModal]=useState(false)
  return (
    <>
    <div className='box'>ModalBox</div>
    {modal ? 
    <div className='modal'>
    <span>Are you sure, Do you want to Continue</span><br /><br />
    <button className='ok' onClick={()=>setModal(false)} >OK</button> 
    </div> : " "} 
    <button className='confirm' onClick={()=>setModal(true)}>Confirm</button>

<div className='overlay'>
    <div className='popup'>
    <button className='xButton'>x</button>
    <img src="image" width={"100px"} height={"100px"}/>
    <h1>Secure all your devices</h1>
    <p>
        Ensure your mobile phone,laptop,and other <br />
        devices are protected online.
    </p>
    <button className='premium'>Purchase premium</button>
</div>
</div>
    </>
  )
}

export default ModalBox