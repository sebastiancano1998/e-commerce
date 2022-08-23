import React from 'react'
import {Link} from "react-router-dom"

const LoginButton = () => {
  return (
    <Link to="/login" className='w-full'>
    <button className="bg-p2 text-white p-2 rounded-md border-p2 border  w-full font-semibold">Log in</button>
    </Link>
  )
}

export default LoginButton