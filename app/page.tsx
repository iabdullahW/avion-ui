import React from 'react'
import Hero1 from './components/Hero1'
import Hero2 from './components/Hero2'
import Card1 from './components/Card1'
import PopularProduct from './components/PopularProduct'
import Club from './components/Club'
import Studio from './components/Studio'

const page = () => {
  return (
    <div>
      <Hero1 />
      <Hero2 />
      <Card1 /> 
      <PopularProduct />
      <Club />
      <Studio />
    </div>
  )
}

export default page