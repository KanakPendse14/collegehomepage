// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import ContactUs from './components/contactus';
// import { BrowserRouter } from 'react-router-dom';
// import Home from './pages/Home';

// import contactus from './pages/contactus';

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
        
//         <Route index element={<Home />} />
         
//          <Route path="contact" element={<ContactUs />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import ContactUs from "./components/contactus";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>

          <Route index element={<Home />} />
          <Route path="contactus" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

