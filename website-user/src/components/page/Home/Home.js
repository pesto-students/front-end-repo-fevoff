import React from 'react'

import Product from './Product/Product'
import Showcase from './showcase/Showcase'
import BrowserCat from './BrowserCat/BrowserCat'
import SuggestionProduct from './SuggestionProduct/SuggestionProduct'


const Home = () => {
  return (
    <div className='bg-gradient-to-t from-yellow-100 via-pink-100 to-yellow-100 italic font-semibold'>
   
      <BrowserCat />
      <Product />
      <Showcase />
      <SuggestionProduct/>
    </div>
  )
}

export default Home
