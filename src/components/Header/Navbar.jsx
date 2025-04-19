import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="flex-1">
                    <a className="text-xl">FlagshipFaceOff</a>
                </div>
                <div className="flex justify-center gap-4">

                    <NavLink className={({ isActive }) => isActive ? "active text-blue-400" : ""} to="/"> Home </NavLink>

                    <NavLink className={({ isActive }) => isActive ? "active text-blue-400" : ""} to="/about">About</NavLink>

                    <NavLink className={({ isActive }) => isActive ? "active text-blue-400" : ""} to="/cart"> Cart </NavLink>
                    
                    <NavLink className={({ isActive }) => isActive ? "active text-blue-400" : ""} to="/favorites">Favorites</NavLink>

                </div>
            </div>
        </div>
    );
};

export default Navbar;