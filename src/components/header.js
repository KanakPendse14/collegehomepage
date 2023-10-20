import React from 'react';
import { Link,useNavigate } from 'react-router-dom';


function Header() {

  const navigate = useNavigate()

  const handleContact=()=>{
    navigate('/contactus')
  }


  return (
    <header>
      <h1>MyCollege</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="department">department</a></li>
          <li><a href="#">Councils</a></li>
          <li><a href='Contactus'>Contact</a></li>
          {/* <button onClick={handleContact}>ContactUs</button> */}
        </ul>
      </nav>
      
    </header>
  );
}

export default Header;
