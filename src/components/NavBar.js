import React from 'react';
import { NavLink } from 'react-router-dom';
import person3 from '../components/yf_logo1.png';
const NavBar = () => {
    return (
        <>
        <header className="header">
        <img className="logo_yf" src={person3} width="70" height="70" alt="" loading="lazy"/>
  <input class="menu-btn" type="checkbox" id="menu-btn" />
  <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
  <ul class="menu">
    <li><NavLink to="/chatbot">ChatBot</NavLink></li>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/boardofadvisors">Advisors</NavLink></li>
    <li><NavLink to="/contact">Contact</NavLink></li>

  </ul>
</header>
        </>

    );
};
export default NavBar;