import { useState } from 'react'

import './App.css'
 import  Home from './screens/Home'
import Footer from './components/Footer'
import Login from "./screens/Login"
import React from "react";
import Signup from './screens/Signup'
import CartProvider  from './components/ContextReducer' 
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// Import Bootstrap Dark Theme (if installed)
import 'bootstrap-dark-5/dist/css/bootstrap-dark.min.css';

// Import Bootstrap CSS (Default Light Theme)
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Bootstrap JS (JavaScript Features like Modals, Tooltips)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



// import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
// import '../node_modules/dist/js/bootstrap.bundle.min.js'

function App() {
  

  return (
    <CartProvider> 


    <Router>
    <div>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path ='/Createuser' element ={<Signup/>}/>
      </Routes>
    </div>
    </Router>
    
    </CartProvider>
  )
}

export default App
