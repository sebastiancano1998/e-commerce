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
import Admin from "../templates/Admin";
import AdminDashBoard from "../containers/AdminDashBoard";
import AdminProducts from "../containers/AdminProducts";

const App = () => {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} ></Route>
          <Route path="store" element={<Store/>}></Route>
          <Route element={<PrivateRoute/>}>
            <Route path= "userdetails" element={<UserDetails/>}></Route>
          </Route>
          <Route path="admin" element={<Admin/>}>
             <Route path="productos" element={<AdminProducts/>} ></Route>
             <Route path="dashboard" element={<AdminDashBoard/>}></Route>
          </Route> 
          <Route path="signup" element={<Signup />}></Route>
          <Route path="login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
