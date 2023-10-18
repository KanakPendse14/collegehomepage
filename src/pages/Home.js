import React from 'react'
import Header from '../components/header'
import Courses from '../components/courses'
import ContactUs from '../components/contactus'
import Footer from '../components/footer'


const Home = () => {
  return (
    <div>
      
      <Header />
      <Courses/>
      <Detail/>
     

      <ContactUs/>
      
      <Footer/>
    </div>
  );
};

export default Home;
