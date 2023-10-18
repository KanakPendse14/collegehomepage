import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>MyCollege</h1>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">department</a></li>
          <li><a href="#">Councils</a></li>
          <li><a href="#contactus">Contact</a></li>
        </ul>
      </nav>
      
    </header>
  );
}

export default Header;
