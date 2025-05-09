import React from 'react'
import { TbBrandMeta } from 'react-icons/tb'
import { IoLogoInstagram } from 'react-icons/io'
import { RiTwitterXLine } from 'react-icons/ri'

const TopBar = () => {
  return (
    <div className="bg-blue-700 text-white">
        <div className="container mx-auto flex justify-between items-center py-3 px-4">
            <div className="hidden md:flex items-center space-x-4">
                <a href="#" className="hover:text-gray-400">
                    <TbBrandMeta className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-gray-400">
                    <IoLogoInstagram className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-gray-400">
                    <RiTwitterXLine className="h-5 w-5" />
                </a>
            </div>

            <div className="text-sm text-center flex-grow">
                <span>We offer free shipping if you purchase over 20 dollars</span>
            </div>

            <div className="text-sm hidden md:block">
                <a href="tel:+12225443333" className="hover:text-gray-400">+ 1 (222) 544-3333</a>
            </div>
        </div>
    </div>
  )
}

export default TopBar