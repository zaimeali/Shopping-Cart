import React, { createContext, useState } from 'react'

export const CartContext = createContext();

const Provider = (props) => {

    const [cart, setCart] = useState([]);

    return (
        <CartContext.Provider>
            { props.children }
        </CartContext.Provider>
    )
}

export default Provider
