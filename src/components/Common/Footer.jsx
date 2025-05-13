import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0">
            <div>
                <h3 className="text-lg text-gray-800 mb-4">Newsletters</h3>
                <p className="text-gray-500 mb-4">Get news and offers about our smoothies and toppings online</p>
                <p>Sign up and get deals on your smoothies</p>
                <form className="flex">
                    <input type="email" placeholder="Enter Email" className="p-3 w-full text-sm border-2 rounded border-gray-300" required></input>
                    <button type="submit" className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800">Subscribe</button>
                </form>
            </div>
        </div>
    </footer>
  )
}

export default Footer