
import './App.css';
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Navbar from "./Navbar"
import Project from './Project';
function App() {
  return (
<Router>
<Navbar/>

<Routes>

<Route path="/Home"  element={<Home/>}/>
<Route path="/Project"  element={<Project/>}/>
<Route path="/About"  element={<About/>} />
<Route path="/Contact"  element={<Contact/>} />
</Routes>
   
    </Router>    
   
  );
}

export default App;
