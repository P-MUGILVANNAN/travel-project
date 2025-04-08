import React from 'react'
import Carousel from '../components/Carousel'
import AboutComponent from '../components/AboutComponent'
import PackagesComponent from '../components/PackagesComponent'
import ContactComponent from '../components/ContactComponent'

const Home = () => {
  return (
    <div>
      <Carousel />
      <AboutComponent />
      <PackagesComponent />
      <ContactComponent />
    </div>
  )
}

export default Home