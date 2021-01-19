import React from 'react';
import './Navbar.css';

 const NavigationBar = () => (
  <div id="navbar" className="content" >
    <div class="topnav">
      <a href="/">
        <img class="logo" src="./images/Logo1.png" alt="logo"></img>
        <span class="tagline">IPEF Constructions<br/>
                  Building Future !!!</span>
      </a>
      <div class="topnav-right">
        <a href="/" class="active">Home</a>
        <a href="About" >About</a>
        <a href="Projects">Projects</a>
        <a href="Services">Services</a>
        <a href="Contact">Contact</a>
        <a href="Login">Login</a>
      </div>
    </div>
</div>
 )



export default NavigationBar;