import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from '../templates/Home';
import Signup from '../templates/SignUp';
import Login from '../templates/Login';

const App = () => {
  return (
    <BrowserRouter>
     <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
     </Routes>
    </BrowserRouter>
  )
}

export default App