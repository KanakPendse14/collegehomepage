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

function App() {
  return (
    <div className="App">
      <Header />
      <Courses/>
      <Detail/>

      {/* <h3>
        Hello
      </h3>
      <h4>Hello</h4> */}
      <Footer/>
      {/* Other content of your website */}
    </div>
  );
}

export default App;
