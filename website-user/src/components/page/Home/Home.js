import React from 'react'

import Product from './Product/Product'
import Showcase from './showcase/Showcase'
import BrowserCat from './BrowserCat/BrowserCat'
import SuggestionProduct from './SuggestionProduct/SuggestionProduct'
import Banner from "./../../../components/page/Home/Banner/Banner";


const Home = () => {
  return (
    <div>
      <Banner />
      <BrowserCat />
      <Product />
      <Showcase />
      <SuggestionProduct />
    </div>
  )
}

export default Home
