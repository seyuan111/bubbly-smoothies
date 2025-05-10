import React from 'react'

const CartContext = () => {
    const cartProducts = [
        {
            productId: 1,
            name: "Mango Slushie",
            size: "small",
            toppings: "boba",
            quantity: 1,
            price: 3.00,
            image: "https://picsum.photos/200?random=1"
        },
                {
            productId: 2,
            name: "Pineapple strawberry Smoothie",
            size: "medium",
            toppings: "pudding",
            quantity: 1,
            price: 5.00,
            image: "https://picsum.photos/200?random=1"
        },
        {
            productId: 3,
            name: "Blueberry Mango Slushie",
            size: "large",
            toppings: "strawberries",
            quantity: 1,
            price: 7.00,
            image: "https://picsum.photos/200?random=1"
        },
        {
            productId: 4,
            name: "Strawberry Green Tea",
            size: "small",
            toppings: "boba",
            quantity: 1,
            price: 3.00,
            image: "https://picsum.photos/200?random=1"
        },
        {
            productId: 5,
            name: "Passionfruit Lemonade",
            size: "small",
            toppings: "grass jelly",
            quantity: 1,
            price: 3.00,
            image: "https://picsum.photos/200?random=1"
        },
        {
            productId: 6,
            name: "Mango Strawberry Juice",
            size: "small",
            toppings: "mango jelly",
            quantity: 1,
            price: 3.00,
            image: "https://picsum.photos/200?random=1"
        },
        {
            productId: 7,
            name: "Oolong Tea",
            size: "small",
            toppings: "boba",
            quantity: 1,
            price: 3.00,
            image: "https://picsum.photos/200?random=1"
        },
    ]
  return (
    <div>
        {cartProducts.map((product, index) => (
            <div key={index} className="flex items-start justify-between py-4 border-b">
                <div className="flex flex-start">
                    <img src={product.image} alt={product.name} className="w-20 h-24 object-cover mr-4 rounded"></img>
                    <div>
                        <h3>{product.name}</h3>
                        <p className="text-sm text-gray-600">size: {product.size} || toppings: {product.toppings}</p>
                        <div>
                            <button className="border rounded px-2 py-1 text-xl font-medium">-</button>
                            <span className="mx-4">{product.quantity}</span>
                            <button className="border rounded px-2 py-1 text-xl font-medium">+</button>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default CartContext