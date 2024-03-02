import React from 'react'

import user from "../../../../asset/images/User.png"

const BrowserCat = () => {
  const cat = [
    {id: 1, image: user},
    {id: 1, image: user},
    {id: 1, image: user},
    {id: 1, image: user},
    {id: 1, image: user},
    {id: 1, image: user},
    {id: 1, image: user},
    {id: 1, image: user},
  ]
  return (
    <div className="w-full h-full bg-gradient-to-t p-8">
  <div className="flex flex-col items-center">
    <div className="font-sans text-3xl mb-5">Browse By Category</div>
    
    <div className="flex flex-wrap justify-center">
      {cat.map((category) => (
        <div key={category.id} className="">
          <div className="w-16 h- md:w-40 md:h-40 lg:w-20 lg:h-24 rounded overflow-hidden">
            <img src={category.image} alt={`Category ${category.id}`} className=" object-cover" />
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

  )
}

export default BrowserCat
