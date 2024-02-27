import React from 'react'
import Banner from "../../page/Home/Banner/Banner"
import SideMenu from '../Dashboard/SideMenu'
import Password from './Password'

const ChangePaassword = () => {
  return (
    <div className="bg-gradient-to-t from-yellow-100 via-pink-100 to-yellow-100 italic font-semibold">
      <Banner />
      <h6 className="text-xs font-bold tracking-tight text-black sm:text-xs">
        Home > My Account > Change Password
      </h6>
      <div className='flex'>
        <SideMenu/>
        <Password />
      </div>
    </div>
  )
}

export default ChangePaassword
