import React from 'react'
import {Link,useLocation} from "react-router-dom"
import {useState,useEffect} from 'react'
import { Nav,Navbar,NavLink ,NavDropdown,Container} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"



const NavBar = () => {
const [showMenu,setShowMenu]=useState(false)
const location=useLocation();
useEffect(() => {
  setShowMenu(false)
}, [location])
  return (

    <Navbar  bg="dark" variant="dark" expand="lg">
      <Container >
     <Navbar.Toggle aria-controls="basic-navbar-nav" />
     
     <Navbar.Brand eventKey='1' as={Link} to="/Home"  href="#Tecna"><h6 className='hero' style={{color:"white",borderRadius:"7px",fontFamily:'fantasy',fontSize:"1.2rem",padding:"0.6rem",backgroundColor:"purple",boxShadow:" 0px 0px 6px white"}}>Tecna</h6></Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
        
          <Nav className="me-auto" >
            
            <NavLink eventKey='1' as={Link} to="/*"  ></NavLink>
          <NavLink eventKey='2'as={Link}  to="/Home">Home </NavLink>
          <NavLink eventKey='3'as={Link} to="/Project">Work</NavLink>
          <NavLink eventKey='4'as={Link}  to="/About">About</NavLink>
         <NavLink eventKey='5'as={Link}  to="/Contact" >Contact</NavLink>
         
           </Nav>
          
        </Navbar.Collapse>
        </Container>
    </Navbar>
    
  )
  
}

export default NavBar
