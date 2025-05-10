import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {HiOutlineUser, HiOutlineShoppingBag, HiBars3BottomRight} from 'react-icons/hi2'
import { GiBubbles } from "react-icons/gi";
import SearchBar from '../Common/SearchBar';
import CartDrawer from '../Layout/CartDrawer'

const NavBar = () => {
    
    const [openDrawer, setOpenDrawer] = useState(false)
    
    const toggleCartDrawer = () => {
        setOpenDrawer(!openDrawer)
    }

  return (
    <>
        <nav className="container mx-auto flex items-center justify-between py-4 px-6">
            <Link to="/" className="flex justify-center items-center gap-2 text-blue-700 hover:text-black duration-300">
                <GiBubbles className="w-5 h-5" />
                <div className="md:text-xl text-md font-medium">Bubbly Smoothies</div>
            </Link>

            <div className="hidden md:flex space-x-6">
                <Link to="#" className="text-gray-600 hover:text-black text-sm font-medium uppercase">Smoothies</Link>

                <Link to="#" className="text-gray-600 hover:text-black text-sm font-medium uppercase">Tea</Link>

                <Link to="#" className="text-gray-600 hover:text-black text-sm font-medium uppercase">Juices</Link>
            </div>

            <div className="flex items-center space-x-4">
                <Link to="/profile" className="hover:text-black">
                    <HiOutlineUser className="h-6 w-6 text-gray-700" />
                </Link>
                <button onClick={toggleCartDrawer} className="relative hover:text-black">
                    <HiOutlineShoppingBag className="h-6 w-6 text-gray-700 cursor-pointer" />
                    <span className="absolute -top-1 bg-red-700 text-white text-xs rounded-full px-2 py-0.5">4</span>
                </button>

                <div className="overflow-hidden">
                    <SearchBar />
                </div>

                <button className="md:hidden">
                    <HiBars3BottomRight className="w-6 h-6 text-gray-700" />
                </button>
            </div>
        </nav>

        <CartDrawer openDrawer={openDrawer} toggleCartDrawer={toggleCartDrawer} />
    </>
  )
}

export default NavBar