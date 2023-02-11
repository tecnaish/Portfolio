import React from 'react'
import { Container,Card,Col,Row,Form, FormGroup, FormControl,InputGroup, Button} from 'react-bootstrap';

import { FaFacebookF, FaLinkedinIn, FaInstagram ,FaGithub} from "react-icons/fa";



const Contact = () => {
  
  
return (
    
      <div className='hero'>
        <main >
          <Container style={{position:"relative",left:"-1rem"}} className='mt-5'>
            <Row className='px-5 my-7'>
              <Col xl={5}>
                <Card.Header className='p-3'>
                <h4 style={{position:"relative",left:"-0.6rem",color:"white"}}>Contact</h4>
                </Card.Header>
                <Card.Body>
                  <Form action='https://getform.io/f/dd50831d-26f9-4abe-aa79-7f20861f9442' method='POST'>
                   <FormGroup className='mb-3'>
                  <Form.Control  name="Name"
                   type="text"
                   placeholder='Enter your name'
                   style={{color:"white",backgroundColor:"transparent",bordercolor:"white",borderStyle: 'solid'}}
                   />
                   </FormGroup>
                   <FormGroup className='mb-3'>
                    <FormControl  name="Email"
                   type="email"
                   placeholder='Enter your email' 
                   style={{color:"white",backgroundColor:"transparent",bordercolor:"white",borderStyle: 'solid'}}/>
                   </FormGroup>

                   <FormGroup className='mb-3'>
                    <FormControl  name="Number"
                    type="number"
                    placeholder='Enter your number'
                    style={{color:"white",backgroundColor:"transparent",bordercolor:"white",borderStyle: 'solid'}}/>
                    </FormGroup>

                   <InputGroup  className='mb-3' size='lg'>
                   <Form.Control type="text"
                   as='textarea'
                   rows="5"
                   placeholder='Enter your phone message'
                   style={{color:"white",backgroundColor:"transparent",bordercolor:"white",borderStyle: 'solid'}}
                     />
                   </InputGroup >
                   <FormGroup  className='mb-3' controlId='submit'>
                    <Button   type='submit'variant='primary'>Lets Talk</Button>
                   </FormGroup>
                  
                   <ul style={{display: "flex", justifyContent: "space-evenly",position:"relative",listStyleType:"none",bottom:"-2rem",fontSize:"3rem",left:'1.1rem'}}  >
             <li ><a style={{position:'relative',left:"-5rem",color:"dodgerblue"}} href='https://www.facebook.com/tecna.ishmita/'> <FaFacebookF/> </a></li>
             <li><a  style={{position:'relative',left:"-3rem",color:"mediumvioletred"}} href='https://www.instagram.com/_tecna_ishmita_/'> <FaInstagram/> </a></li>
             <li > <a style={{position:'relative',left:"-1rem",color:"royalblue"}} href='https://www.linkedin.com/in/ishmita-gain-4704bb116/'> <FaLinkedinIn/> </a></li>
             <li > <a style={{position:'relative',left:"1.9rem",color:"white"}}  href='https://github.com/tecnaish/'> <FaGithub/> </a></li>
            
        </ul> 
       
                   </Form>
                </Card.Body>
              </Col>
              
        
       
       
            </Row>
          </Container>
        </main>
      </div>
            
  )
}

export default Contact;

 