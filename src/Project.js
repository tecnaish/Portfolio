import React from 'react'
import { Container,Row,Col,Image} from 'react-bootstrap';

const Project = () => {
  return (
    <div >
      <Container>
      <Row className='px-5 my-5'>
       <Col sm={6} >
       <Image
          src= "3.jpg"
          fluid
          rounded
          width='400px'
         style= {{border:"1px solid white"}}
          />
        
        </Col>
        <Col sm={6}>
        <h1 id="who-am-i" style={{color:"white"}}>My Projects</h1>
           <br></br>
         <h2 style={{color:"yellow",fontSize:"33px",textDecoration:"underline"}}>Todo List</h2>
         <h2 style={{color:"white",fontSize:"27px"}}>Technologies</h2>
          <ul>
            <li style={{color:"white",fontSize:"25px"}}>React Js</li>
            <li style={{color:"white",fontSize:"25px"}}>Css</li>
          </ul>

          <h2 style={{color:"yellow",fontSize:"33px",textDecoration:"underline"}}>Restaurant App</h2>
         <h2 style={{color:"white",fontSize:"27px"}}>Technologies</h2>
          <ul>
            <li style={{color:"white",fontSize:"25px"}}>React Js</li>
            <li style={{color:"white",fontSize:"25px"}}>Bootstrap</li>
          </ul>

          <h2 style={{color:"yellow",fontSize:"33px",textDecoration:"underline"}}>Weather App</h2>
         <h2 style={{color:"white",fontSize:"27px"}}>Technologies</h2>
          <ul>
            <li style={{color:"white",fontSize:"25px"}}>React Js</li>
            <li style={{color:"white",fontSize:"25px"}}>Css</li>
          </ul>

          <h2 style={{color:"yellow",fontSize:"33px",textDecoration:"underline"}}>Personal Portfolio</h2>
 <h2 style={{color:"white",fontSize:"27px"}}>Technologies</h2>
          <ul>
            <li style={{color:"white",fontSize:"25px"}}>React Js</li>
            <li style={{color:"white",fontSize:"25px"}}>React Router</li>
            <li style={{color:"white",fontSize:"25px"}}>Bootstrap</li>
            <li style={{color:"white",fontSize:"25px"}}>Css</li>
          </ul>
         
        </Col>
      </Row>
    </Container>    
    </div>
  )
}

export default Project;