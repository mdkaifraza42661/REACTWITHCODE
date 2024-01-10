import React from 'react'
import {Link, NavLink} from 'react-router-dom'
function Header() {
    return (
        <>
            <div>
                <ul>
                    <li>
                        <NavLink to={"/"} className={({isActive}) => `${isActive ? " text-red-800 " : " text-yellow-900"}`}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/about"} className={({isActive}) => `${isActive ? "text-red-800 " : "text-yellow-900"}`}>About</NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Header