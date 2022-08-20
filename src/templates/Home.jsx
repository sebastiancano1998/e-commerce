import React from 'react'
import AboutUs from '../components/AboutUs'
import Objetives from '../components/Objetives'
import Navbar from '../containers/Navbar'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <div className='overflow-hidden'>
    <Navbar></Navbar>
    <Hero></Hero>
    <AboutUs></AboutUs>
    <Objetives></Objetives>
    </div>
  )
}

export default Home