import React from 'react'
import {Link,useLocation} from "react-router-dom"
import {useState,useEffect} from 'react'

const Navbar = () => {
const [showMenu,setShowMenu]=useState(false)
const location=useLocation();
useEffect(() => {
  setShowMenu(false)
}, [location])
  return (
    <nav>
     <div id='brand' style={{color:"white"}}>Tecna</div> 
     <div id="nav-menu">
      <span onClick={()=>setShowMenu(!showMenu)} className='mobile-menu'>
     <li onClick={()=>setShowMenu(false)}> <Link to="/" >Menu</Link></li>
     </span>
     <ul className={`${showMenu ? "active" :"hide"}`} >
     <li onClick={()=>setShowMenu(false)} > <Link to="/Home" >Home</Link></li>
     <li onClick={()=>setShowMenu(false)} > <Link to="/Project" >Work</Link></li>
     <li onClick={()=>setShowMenu(false)} > <Link to="/About" >About</Link></li>
     <li onClick={()=>setShowMenu(false)} > <Link to="/Contact" >Contact</Link></li>
     </ul>
      </div>
    </nav>

   
  )
  
}

export default Navbar
