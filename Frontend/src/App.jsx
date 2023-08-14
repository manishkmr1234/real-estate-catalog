<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./Components/Form";
import Login from "./Components/Login";
import Register from "./Components/Register";
import { Home } from "./Pages/Home";
import { Landing } from "./Pages/LandingPage";
import { Navbar } from "./Components/Navbar";
import { Sidebar } from "./Components/Sidebar";
import { temp } from "./Context/Context";
import { useState } from "react";
=======
import React from 'react'
//import Sidebar from './Components/Sidebar'
//import Login from './Pages/Login'
import Signup from './Pages/Signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
>>>>>>> edbd810b005a99de071c1a4be98d60084d3d6707

function App() {
  const [userinfo, setUserInfo] = useState(null);
  return (
<<<<<<< HEAD
    <div className="App">
      <temp.Provider value={{ userinfo, setUserInfo }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/form"
              element={
                <>
                  <Sidebar />
                  <Navbar />
                  <Form />
                </>
              }
            />
            <Route path="/landing" element={<Landing />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </temp.Provider>
    </div>
  );
=======
    
      

    <BrowserRouter>
    <Routes>
      <Route path = '/' element={<Signup/>}/>
      <Route path = '/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  )
>>>>>>> edbd810b005a99de071c1a4be98d60084d3d6707
}

export default App;
