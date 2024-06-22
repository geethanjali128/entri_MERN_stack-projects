import React from 'react'
import logo from './assets/logo.png'
import {HashLink} from 'react-router-hash-link'

const Navbar = () => {
  return (
    <div className='nav'>
    <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
   
      <img src={logo} alt='logo' className='logo'/>
   
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className='links'>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
       <HashLink to='#header' style={{textDecoration:"none",color:"black"}}>  Home</HashLink>
          </li>
          <li className="nav-item">
       <HashLink to='#about' style={{textDecoration:"none",color:"black"}}>About</HashLink>
          </li>
          <li className="nav-item">
       <HashLink to='#projects'  style={{textDecoration:"none",color:"black"}}>Projects</HashLink>
          </li>
          
          <li className="nav-item">
       <HashLink to='#contact'   style={{textDecoration:"none",color:"black"}}>Contact</HashLink>
          </li>
       
       
         
       
      </ul>
    </div>
    
    </div>
  </div>
</nav>


    </div>
  )
}

export default Navbar
