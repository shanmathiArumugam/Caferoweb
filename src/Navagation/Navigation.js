import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './Navigation.css'
function Navigation() {
  return (
    <div>
    <header>
     <a href="#" class="logo">Caff<span>e</span>o.</a>
     <ul class="navlist">
         <li><Link to="/" class="active">Home</Link></li>
         <li><Link to="/about">About</Link></li>
         <li><Link to="/coffee">Coffee</Link></li>
         <li><Link to="/contact">Contact</Link></li>
     </ul>
     <div class="bx bx-menu" id="menu-icon">
         <i class="fa-solid fa-bars"></i>
         <i class="fa-solid fa-search"></i>
     </div>
 </header>
 </div>
  );
}

export default Navigation;