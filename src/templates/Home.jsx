import React from 'react'
import AboutUs from '../components/AboutUs'
import Objetives from '../components/Objetives'
import Navbar from '../containers/Navbar'
import Hero from '../components/Hero'
import TypeProducts from '../components/TypeProducts'
import TimeLine from '../components/TimeLine'

const Home = () => {
  return (
    <div className='overflow-hidden'>
    <Navbar></Navbar>
    <Hero></Hero>
    <AboutUs></AboutUs>
    <TimeLine></TimeLine>
    <Objetives></Objetives>
    <TypeProducts></TypeProducts>
    </div>
  )
}

export default Home