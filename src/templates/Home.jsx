import React from 'react'
import AboutUs from '../containers/AboutUs'
import Objetives from '../containers/Objetives'
import Navbar from '../containers/Navbar'
import Hero from '../containers/Hero'
import TypeProducts from '../containers/TypeProducts'
import TimeLine from '../containers/TimeLine'
import { useSelector } from 'react-redux'

const Home = () => {

  return (
    <div className='overflow-hidden'>
    <Navbar></Navbar>
    <Hero></Hero>
    <Objetives></Objetives>  
    <TimeLine></TimeLine>
    <AboutUs></AboutUs>
    <TypeProducts></TypeProducts>
    </div>
  )
}

export default Home