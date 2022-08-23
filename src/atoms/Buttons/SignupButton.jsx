import React from 'react'
import {Link} from "react-router-dom"
const SignupButton = () => {
  return (
    <Link to='/signup' className='w-full'>
    <button className="bg-white text-p2 p-2 rounded-md border-p2 border w-full font-semibold">Sign up</button>
    </Link>
  )
}

export default SignupButton