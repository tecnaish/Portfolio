
import './App.css';
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"
import Home from './Home';
import Contact from './Contact';
import About from './About';
import NavBar from "./NavBar";
import Project from './Project';
function App() {
  return (
<Router>
<NavBar/>
<Routes>
<Route path="/"  element={<Home/>}/> 
<Route path="/Home"  element={<Home/>}/> 
<Route path="/Project"  element={<Project/>}/> 
 <Route path="/About"  element={<About/>} /> 
 <Route path="/Contact"  element={<Contact/>} /> 
</Routes>
   
    </Router>    
   
  );
}

export default App;
