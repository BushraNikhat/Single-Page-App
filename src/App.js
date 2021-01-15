import React from "react";
import {Switch,Route,Redirect} from "react-router-dom"
import Courses from "./Components/Courses/Courses.jsx";
import Home from "./Components/Home.js";
import Navbar from "./Components/Navbar.jsx";
import About from "./Components/About/About.jsx";
import Contact from "./Components/Contact.jsx";
import Footer from "./Components/Footer.jsx";



function App() {
  return (
  <>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/courses" component={Courses}/>
        <Redirect exact to="/" />
      </Switch>
      <Footer/>
     
  </>
 
  );
}

export default App;
