// Courses.js

import React from 'react';


const Courses = () => {
  return (
    <div className="courses-container">
      <div className="background-image">
        <div className="centered-text">
          <h1>Welcome to Vivekanand Institute Of Technology</h1>
          
          <h2>Search Your Branch</h2>
          <input type="text" placeholder="Enter your branch" />
          <div className='department'>
          <ul>
          <li><a href="#">CMPN</a></li>
          <li><a href="#">IT</a></li>
          <li><a href="#">AIDS</a></li>
          <li><a href="#">EXTC</a></li>
          </ul>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Courses;
