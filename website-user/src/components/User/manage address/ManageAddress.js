import React from 'react'
import SideMenu from '../Dashboard/SideMenu'
import Banner from "../../page/Home/Banner/Banner"
import Address from './Address'

const ManageAddress = () => {
  return (
    <div className='bg-gradient-to-t from-yellow-100 via-pink-100 to-yellow-100 italic font-semibold'>
      <Banner />
      <h6 className="text-xs font-bold tracking-tight text-black sm:text-xs m-5">
              Home > My Account > Manage Address
            </h6>
      <div className='flex'>
        <SideMenu />
        <Address />
      </div>
    </div>
  )
}

export default ManageAddress
