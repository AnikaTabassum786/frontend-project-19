import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import { FaShoppingCart } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { CartContext } from '../../provider/Contexts';

const Navbar = () => {
    const {cart} = useContext(CartContext)
    console.log(cart)
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="flex-1">
                    <a className="text-xl">FlagshipFaceOff</a>
                </div>
                <div className="flex justify-center items-center gap-4">

                    <NavLink className={({ isActive }) => isActive ? "active text-blue-400" : ""} to="/"> Home </NavLink>

                    <NavLink className={({ isActive }) => isActive ? "active text-blue-400" : ""} to="/about">About</NavLink>

                    <NavLink className={({ isActive }) => isActive ? "active text-blue-400" : ""} to="/cart"> <FaShoppingCart  />{cart.length} </NavLink>
                    
                    <NavLink className={({ isActive }) => isActive ? "active text-blue-400" : ""} to="/favorites"><FaBookmark /></NavLink>

                </div>
            </div>
        </div>
    );
};

export default Navbar;