import React from 'react'
import { IconContext } from 'react-icons/lib';
import { FaJs, FaReact,FaHtml5,FaBootstrap,FaCss3} from "react-icons/fa";

const Home = () => {
  return (
    
    <section className='hero' id='hero'>
    <div className='brief'>
     <div style={{position:"relative",top:"-27px"}}>
      <h1><span className='im'>I'm</span></h1>
      <h1 style={{color:"yellow"}}>Ishmita Gain</h1>
      <h1>Front-end developer</h1>
       <p style={{color:"lavender",fontSize:"20px"}}>You are a click away from building your dream website or web app.
        Send me the details of your project for a modern, 
       mobile responsive, highly performant website today! </p>
     </div>
     <div><br></br><br></br>
      <h2>SKILLS</h2>  
      <IconContext.Provider value={{size:"60px"}} >
      <div>
        <ul style={{display: "flex", justifyContent: "space-evenly",position:"relative",right:"41px",bottom:"-25px",listStyleType:"none"}} >
        <li style={{position:"relative",right:"1px",color:"cyan"}} ><FaReact/> </li>
       <li style={{position:"relative",right:"-14px",color:"gold"}}> <FaJs/> </li>
       <li style={{position:"relative",right:"-35px",color:"darkviolet"}}> <FaBootstrap/> </li>
       <li  style={{position:"relative",right:"-49px",bottom:"-3px",color:"royalblue"}}> <FaCss3/> </li>
       <li style={{position:"relative",right:"-59px",bottom:"-3px",color:"tomato"}}> <FaHtml5 /> </li>
        </ul> 
        </div>
       
        </IconContext.Provider>
     </div>
    </div>
    <figure style={{bordercolor:"black",borderStyle: 'none',padding:"48px"}}>
   <img  src='1.jpg' alt='Ishmita gain' ></img>
    </figure>
  </section>
    
  )
}

export default Home
