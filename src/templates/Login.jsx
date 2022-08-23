import React from 'react'
import LoginForm from '../containers/LoginForm'
import logo from "../../public/assets/logos/favicon_yard_sale.svg";
import {Link} from "react-router-dom"


const Login = () => {
  return (
    <div className='flex flex-col gap-8'>
              <Link to="/">
      <img src={logo} className="w-14 ml-4 mt-4" alt="logo"></img>
      </Link>
        <LoginForm></LoginForm>
    </div>
  )
}

export default Login