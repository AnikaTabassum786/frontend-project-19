import React, { useEffect, useState } from 'react';
import { CartContext } from './Contexts';

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    useEffect(()=>{
    //Local storage
    },[])
    return (
        <div>
            <CartContext.Provider value={{cart, setCart}}>
                 {children}
            </CartContext.Provider>
        </div>
    );
};

export default CartProvider;