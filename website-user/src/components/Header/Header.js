'use client'
import React, { useState } from 'react'
import { Menu, ShoppingBagIcon, X } from 'lucide-react'
import { Link } from 'react-router-dom'
// import "./header.css";

const menuItems = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Products',
    href: '/products',
  },

  {
    name: 'Search',
    href: '/search',
  },
  {
    name: 'Contact Us',
    href: '/contact-us',
  }, {
    name: 'About Us',
    href: '/about-us',
  },
]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="relative w-full header py-4">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-12">
        <div className="inline-flex items-center space-x-2">
          <Link to={"/"}>
            <span className="font-semibold text-3xl italic">Fevoff</span>
          </Link>
        </div>
        <div className="hidden lg:block">
          {isMenuOpen ? (
            <X onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
          ) : (
            <ul className="inline-flex space-x-8">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.href}
                    className="text-lg italic font-bold text-gray-800 hover:text-gray-900"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="hidden lg:block">
          <Link to={"/cart"}>
            <ShoppingBagIcon />
          </Link>
        </div>
        <div className="hidden lg:block">
          <Link to={"/login"} className="btn web-btn-2">
            Login
          </Link>
        </div>
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
      </div>
      {isMenuOpen && (
        <>

        </>
      )}
    </div>
  )
}

export default Header;