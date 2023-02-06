import React from 'react'

const Project = () => {
  return (
    <section className="aboutMe" id="about">
      <main>
        <figure>
          <img style={{position:"relative",bottom:"-25px",border:"5px solid white"}} src="3.jpg" alt="Ishmita Gain" width={450} />
        </figure>
        <div style={{position:"relative",right:"-50px"}}>
            <br></br>
         <h1 id="who-am-i" style={{color:"snow"}}>My Projects</h1>
           <br></br>
         <h2 style={{color:"yellow",fontSize:"30px",textDecoration:"underline"}}>Todo List</h2>
         <h2 style={{color:"white",fontSize:"25px"}}>Technologies</h2>
          <ul>
            <li style={{color:"white",fontSize:"21px"}}>React Js</li>
            <li style={{color:"white",fontSize:"21px"}}>Css</li>
          </ul>

          <h2 style={{color:"yellow",fontSize:"30px",textDecoration:"underline"}}>Restaurant App</h2>
         <h2 style={{color:"white",fontSize:"25px"}}>Technologies</h2>
          <ul>
            <li style={{color:"white",fontSize:"21px"}}>React Js</li>
            <li style={{color:"white",fontSize:"21px"}}>Bootstrap</li>
          </ul>

          <h2 style={{color:"yellow",fontSize:"30px",textDecoration:"underline"}}>Weather App</h2>
         <h2 style={{color:"white",fontSize:"25px"}}>Technologies</h2>
          <ul>
            <li style={{color:"white",fontSize:"21px"}}>React Js</li>
            <li style={{color:"white",fontSize:"21px"}}>Css</li>
          </ul>

          <h2 style={{color:"yellow",fontSize:"30px",textDecoration:"underline"}}>Personal Portfolio</h2>
         <h2 style={{color:"white",fontSize:"25px"}}>Technologies</h2>
          <ul>
            <li style={{color:"white",fontSize:"21px"}}>React Js</li>
            <li style={{color:"white",fontSize:"21px"}}>React Router</li>
            <li style={{color:"white",fontSize:"21px"}}>Css</li>
          </ul>
          <div>
            
          </div>
        </div>

      </main>
    </section>
  )
}

export default Project;