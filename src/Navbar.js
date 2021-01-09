import React from 'react';
import './Navbar.css';

 const NavigationBar = () => (
  <div id="navbar" className="content" >
    <div class="topnav">
      <a href="/">
        <p class="logo-image">
            IPEF Constructions<br></br>
            Building Future!!!
        </p>
      </a>
      <div class="topnav-right">
        <a href="/" class="active">Home</a>
        <a href="About" >About</a>
        <a href="Projects">Projects</a>
        <a href="Contact">Contact</a>
        <a href="Login">Login</a>
      </div>
    </div>
</div>
 )



export default NavigationBar;