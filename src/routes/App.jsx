import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../templates/Home";
import Signup from "../templates/SignUp";
import Login from "../templates/Login";
import Store from "../templates/Store";
import UserDetails from "../templates/UserDetails";
import store from "../store";

import PrivateRoute from "./PrivateRoute";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/store" element={<Store/>}></Route>
          <Route path= "/userdetails" element={<UserDetails/>}></Route>
          <Route path="/" element={<Home/>} ></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
