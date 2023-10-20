import React from 'react'
import '../App.css'
import Header from '../components/header'
import Courses from '../components/courses'

import Footer from '../components/footer'
import Detail from '../components/detail'



const Home = () => {
  return (
    <div>
      <Header />
      <Courses/>
      <Detail/>
     
      <Footer/>
    </div>
  );
};

export default Home;
