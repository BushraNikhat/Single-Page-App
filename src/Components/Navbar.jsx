import React from "react";
import {NavLink} from "react-router-dom"
import logo from "../Images/Navlogo.png"

const Navbar = () => {
  return (
    <>
     <section className="nav-section " id="nav-section">
        <div className="container-fluid  navbar-head  ">
          <div className="row">
            <div className="col-10 mx-auto d-block">
            <nav className="navbar navbar-expand-lg navbar-dark ">
       
          <NavLink exact className="navbar-brand " to="/">
          <img src={logo} className="img-fluid" alt="logo"/> Turning 
          <span className=""> Point</span> 
          </NavLink> 
      
         
             <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
         <div className="collapse navbar-collapse text-right" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink exact className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact className="nav-link active" aria-current="page" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact className="nav-link active" aria-current="page" to="/courses">
                  Courses
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact className="nav-link active" aria-current="page" to="/contact">
                  Contact us
                </NavLink>
              </li>
              
            </ul>
          </div>
      
        
           </nav>
            </div>
          </div>
        </div>
        </section>
    </>
  );
};
export default Navbar;
