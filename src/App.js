// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import Header from './components/header';
import './App.css'; 
import Footer from './components/footer';

import Courses from './components/courses';
import Detail from './components/detail';
import ContactUs from './components/contactus';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';



function App() {
  
  return (
    <div className='App'>
      
      <div>
        {/* <Home/> */}
      
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/' element={<ContactUs/>}>

        </Route>
      </Routes>
      </BrowserRouter>
      {/* <Courses/>
      <Detail/>
     

      <ContactUs/>
      
      <Footer/> */}
      
    </div>
    </div>
  );
}

export default App;
