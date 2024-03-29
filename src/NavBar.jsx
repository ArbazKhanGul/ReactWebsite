import React from 'react';
import {NavLink} from "react-router-dom"
function NavBar(){
    return(
        <>
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">

<nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid">
    <NavLink exact   className="navbar-brand" to="/" >Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  mb-2 mb-lg-0 design">
        <li className="nav-item">
          <NavLink exact  className="nav-link"  to="/" activeClassName="menu_active">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  className="nav-link" to="/service" activeClassName="menu_active">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  to="/about" activeClassName="menu_active">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  to="/contact" activeClassName="menu_active">Contact</NavLink>
        </li>

      </ul>
       </div>
  </div>
</nav>
            </div>
          </div>
        </div>
        </>
    )
}

export default NavBar;