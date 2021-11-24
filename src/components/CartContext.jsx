import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item, qty) => {
        setCartList([
            ...cartList,
            {
                idItem: item.id,
                imgItem: item.image[0],
                nameItem: item.name,
                costItem: item.cost,
                qtyItem: qty

            }
        ]);
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addToCart
        }}>
           {children} 
        </CartContext.Provider>
    );
}

export default CartContextProvider;