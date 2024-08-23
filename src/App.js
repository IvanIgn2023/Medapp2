// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'; // Import Navbar component
import SignUp from './Components/SignUp/SignUp'; // Import SignUp component
import Login from './Components/Login/Login'; // Import Login component

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar /> {/* Display the Navbar component */}

        <Routes>
          {/* Define individual Route components for different pages */}
          <Route path="/" element={<Home />} /> {/* Example Home route */}
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          {/* Add other routes as needed */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
