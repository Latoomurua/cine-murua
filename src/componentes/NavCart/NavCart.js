import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import "./NavCart.css"

const NavCart = () => {
    return(
        <div className='NavCart'>
        <AiOutlineShoppingCart />
        <span>1</span>
        </div>
    )
}

export default NavCart