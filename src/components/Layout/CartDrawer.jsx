import React from 'react'
import {IoMdClose} from 'react-icons/io'
import CartContext from '../Cart/CartContext'

const CartDrawer = ({openDrawer, toggleCartDrawer}) => {

  return (
    <div className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-1/4 h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${openDrawer ? "translate-x-0" : "translate-x-full"}`}>

        <div className="p-4 flex justify-end">
            <button onClick={toggleCartDrawer}>
                <IoMdClose className="h-6 w-6" />
            </button>
        </div>

        <div className="flex-grow p-4 overflow-y-auto">
          <h2 className="text-xl font-semi-bold mb-4">Your Cart</h2>
          <CartContext />
        </div>

        <div className="p-4 bg-white sticky bottom-0">
          <button className="w-full bg-black text-white py-3 rounded font-semibold hover:bg-gray-800 transition">Checkout</button>
        </div>

    </div>
  )
}

export default CartDrawer