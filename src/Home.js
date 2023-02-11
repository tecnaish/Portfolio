import React from 'react'
import { FaJs, FaReact,FaHtml5,FaBootstrap,FaCss3} from "react-icons/fa";
import { Container,Row,Col,Card,Button,Image,Figure} from 'react-bootstrap';


const Home = () => {
  return (
    
<div className='hero' style={{backgroundColor:"#2e2b2b"}} >
  <main>
    <Container>
      <Row className='px-6 my-5'>
       <Col sm={8} >
       <h1 style={{color:"gray",fontSize:"2.5rem"}}>I'm</h1>
            <h1 style={{color:"yellow",fontSize:"2.6rem"}}>Ishmita Gain</h1>
            <h1 style={{color:"white",fontSize:"2.9rem"}}>   Front-end developer</h1><br/>
         <p style={{color:"lavender",fontSize:"1.3rem"}}>You are a click away from building your dream website or web app.
          Send me the details of your project for a modern, 
         mobile responsive, highly performant website today! </p> <br/> <br/>
         <h3 style={{color:"white",fontSize:"1.5rem",position:"relative",bottom:"1rem"}}>SKILLS</h3>
         <ul style={{display: "flex",listStyleType:"none",position:"relative",left:"-2.6rem",top:"1rem"}} >
       
       <li style={{color:"cyan",fontSize:"3.7rem",position:"relative",left:"0.1rem"}} ><FaReact/> </li>
      <li style={{color:"gold",fontSize:"3.7rem",position:"relative",left:"0.4rem"}}> <FaJs/> </li>
      <li style={{color:"darkviolet",fontSize:"4rem",position:"relative",left:"0.7rem",top:'-0.3rem'}}> <FaBootstrap/> </li>
      <li  style={{color:"royalblue",fontSize:"3.7rem",position:"relative",left:"1rem"}}> <FaCss3/> </li>
      <li style={{color:"tomato",fontSize:"3.8rem",position:"relative",left:"1rem",top:"-0.1rem"}}> <FaHtml5 /> </li>
       </ul>
        </Col>
       
        <Col sm={4}>
          
          <Image
          src="1.jpg"
          fluid
          width='380px'
          style={{ boxShadow:"2px 2px 75px rgb(151, 18, 124)",position:"relative",bottom:"-3rem",left:"1rem"}}
          />
        </Col>
      </Row>
    </Container>
  </main>
</div>
  )
}

export default Home
