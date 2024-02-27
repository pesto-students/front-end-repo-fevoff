import React from 'react'

import user from "../../../../asset/images/User.png"

const BrowserCat = () => {
  return (
    <div>
      <div className="w-full h-full bg-gradient-to-t p-8">
        <div className="flex justify-center mt-5 ml-50 font-sans text-3xl">
          Browse By Category
        </div>
        <div className="avatar m-10 flex justify-center ">
          <div className="w-22 h-12 rounded m-5">
            <img src={user} />
          </div>
          <div className="w-22 h-12 rounded m-5">
            <img src={user} />
          </div>
          <div className="w-22 h-12 rounded m-5">
            <img src={user} />
          </div>
          <div className="w-22 h-12 rounded m-5">
            <img src={user} />
          </div>
          <div className="w-22 h-12 rounded m-5">
            <img src={user} />
          </div>
          <div className="w-22 h-12 rounded m-5">
            <img src={user} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrowserCat
