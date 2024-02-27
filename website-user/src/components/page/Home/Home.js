import React from 'react'
import Banner from "./Banner/Banner"
import Product from './Product/Product'
import Showcase from './showcase/Showcase'
import BrowserCat from './BrowserCat/BrowserCat'


const Home = () => {
  return (
    <div>
      <Banner />
      <BrowserCat />
      <Product />
      <Showcase />
    </div>
  )
}

export default Home
