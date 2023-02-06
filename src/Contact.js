import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaInstagram ,FaGithub} from "react-icons/fa";
import { IconContext } from 'react-icons/lib';


const Contact = () => {
  
  
return (
    
      
    
  <section className='projects' >
       <div>
      <form action='https://getform.io/f/dd50831d-26f9-4abe-aa79-7f20861f9442' method='POST' style={{position:"relative",right:"px",top:"-88px"}} >
        
        <h2 style={{position:"relative",bottom:"5px"}}>Contact</h2>
        <br />
        <div style={{position:"relative",right:"px",top:"-64px"}}>
        <span></span>
        <br /> 
        <input style={{width:"410px",height:"25px",color:"white",backgroundColor:"transparent",border:"1.5px",bordercolor:"white",borderStyle: 'solid',borderRadius:"6px",fontSize:"16px"}}
         
          name="Name"
          type="text"
          placeholder='Enter your name'
        />
        <br />
        
        <span></span>
        <br />
        <input style={{width:"410px",height:"25px",backgroundColor:"transparent",border:"1.5px",color:"white",bordercolor:"white",borderStyle: 'solid',borderRadius:"6px",fontSize:"16px"}}
         
          name="Email"
          type="email"
          placeholder='Enter your email'
        />
        <br /> 
        
        <span></span>
        <br />
        <input
        style={{width:"410px",height:"25px",backgroundColor:"transparent",border:"1.5px",color:"white",bordercolor:"white",borderStyle: 'solid',borderRadius:"6px",fontSize:"16px"}}
          
          name="Number"
          type="number"
          placeholder='Enter your phone number'
        />
        <br/>
      
        
        <span></span>
        <br />
        
        <textarea style={{height:"166px",width:"410px",backgroundColor:"transparent",border:"1.5px",color:"white",bordercolor:"white",borderStyle: 'solid',borderRadius:"6px",fontSize:"19px"}}
          
          name="Message"
          type="text"
          cols="50"
          rows="9"
          placeholder='Enter your message'
        >
          
        </textarea>
        <br />
        
        <button style={{width:"100px",height:"25px",position:"relative",right:"-150px",backgroundColor:"dodgerblue",borderRadius:"1px",fontSize:"16px",color:"white",border:"20px",bottom:"-12px"}} > Lets Talk </button>
        </div>
      </form>
      </div>
            
     <IconContext.Provider value={{size:"40px" }} >
      <div>
      <p style={{position:"relative",right:"-8px",fontSize:"20px",top:"-130px",textDecoration:"none"}}>gainishmita12@gmail.com</p>  
        <ul style={{display: "flex", justifyContent: "space-evenly",position:"relative",right:"30px",bottom:"105px",listStyleType:"none"}} >
        <li><a  style={{color:"dodgerblue"}} href='https://www.facebook.com/tecna.ishmita/'> <FaFacebookF/> </a></li>
             <li><a style={{color:"mediumvioletred"}} href='https://www.instagram.com/_tecna_ishmita_/'> <FaInstagram/> </a></li>
             <li> <a style={{color:"royalblue"}} href='https://www.linkedin.com/in/ishmita-gain-4704bb116/'> <FaLinkedinIn/> </a></li>
             <li> <a style={{color:"white"}} href='https://github.com/tecnaish/'> <FaGithub/> </a></li>

        </ul> 
       
        </div>
       
        </IconContext.Provider>
       

    </section>

            
  )
}

export default Contact;

 