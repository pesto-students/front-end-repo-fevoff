/* eslint-disable jsx-a11y/anchor-is-valid */
'use client'
import React, { useState } from 'react'
import { Home, Menu, ShoppingBagIcon, X, ListMinus, Search, SquareUser, ListCollapse } from 'lucide-react'
import { Link } from 'react-router-dom'
import "./header.css";
import { useNavigate } from 'react-router-dom';

const menuItems = [
  {
    name: 'Home',
    icon: <Home />,
    href: '/',
  },
  {
    name: 'Products',
    icon: <ListMinus />,
    href: '/products',
  },

  {
    name: 'Search',
    icon: <Search />,
    href: '/search',
  },
  {
    name: 'Contact Us',
    icon: <SquareUser />,
    href: '/contact-us',
  }, {
    name: 'About Us',
    icon: <ListCollapse />,
    href: '/about-us',
  },
]

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const btnClick = async (pageName) => {
    navigate(pageName);
    setIsMenuOpen(false);
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
          <div className="drawer-content">
            {
              isMenuOpen ? <X onClick={toggleMenu} htmlFor="my-drawer" className="h-6 w-6 cursor-pointer  drawer-button" /> : <Menu onClick={toggleMenu} htmlFor="my-drawer" className="h-6 w-6 cursor-pointer  drawer-button" />
            }

          </div>
        </div>
      </div>
      {isMenuOpen && (
        <>
          <div className='our-drawer'>
            <aside class="flex h-screen w-72 flex-col overflow-y-auto border-r bg-white py-8">
              <h2 className='text-3xl italic border-b border-gray-500 px-5'>Fevoff</h2>
              <div class="flex flex-1 flex-col justify-between">
                <nav class="mt-2">
                  {
                    menuItems.map((data, index) => {
                      return (
                        <label key={index} class="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 menu-btn-link" onClick={(e) => btnClick(data.href)} >
                          {data.icon}
                          <span class="mx-2 text-sm font-medium">{data.name}</span>
                        </label>
                      );
                    })
                  }
                </nav>
              </div>
            </aside>
          </div>
        </>
      )}
    </div>
  )
}

export default Header;