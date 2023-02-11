import React from 'react'
import { Container,Row,Col,Image} from 'react-bootstrap';
const About = () => {
  return (
    
    <div className='hero'>
      <main>
      <Container>
      <Row className='px-5 my-5'>
       <Col sm={5} >
       <Image
          src="2.jpg"
          fluid
          round
          width='334px'
          style={{border:"1px solid linen",borderRadius:"0rem"}}
          />
        
        </Col>
        <Col sm={7}><h2 style={{color:"white",fontSize:"2rem"}}>ABOUT ME</h2>
          <h1 id="who-am-i" style={{color:"silver"}}>WHO AM I</h1>
          <p style={{color:"lavenderblush",fontSize: "28px",}} >Hi, my name is Ishmita Gain from Bangalore, India. I'm a front-end developer. My top priority is to get your business online the right way, giving you industry-standard design and all the functionality you need to operate smoothly online. Get in touch with the details of your project let's get started!</p>
         
        </Col>
      </Row>
    </Container>  
    </main>  
    </div>

    
    
  )
}

export default About
