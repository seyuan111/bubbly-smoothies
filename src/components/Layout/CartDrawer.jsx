import React from 'react'
import {IoMdClose} from 'react-icons/io'

const CartDrawer = ({openDrawer, toggleCartDrawer}) => {

  return (
    <div className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-1/4 h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${openDrawer ? "translate-x-0" : "translate-x-full"}`}>

        <div className="p-4 flex justify-end">
            <button onClick={toggleCartDrawer}>
                <IoMdClose className="h-6 w-6" />
            </button>
        </div>

    </div>
  )
}

export default CartDrawer