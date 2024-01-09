import React from 'react'
import {Link, NavLink} from 'react-router-dom'


// link is basically it is a  atag  its reload the web but we use react does not reload so we use link 
// NavLink is provide various opration like active check whether is present 

function Header() {
    return (
        <>
            <div className='flex align-middle justify-between'>
                <div>
                    <ul>
                        <Link to='/'>Logo</Link>
                    </ul>
                </div>
                <div>
                    <ul className='flex align-middle gap-8'>
                        <li>
                            <NavLink to={'/'} className={({isActive}) => `${isActive ? " text-orange-700" : " text-gray-700"}`}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={'about'} className={({isActive}) => `${isActive ? "text-orange-700" : "text-gray-700"} `}>About</NavLink>
                        </li>
                        <li>  <NavLink to={'contact'} className={({isActive}) => `${isActive ? "text-orange-700" : "text-gray-700"}`}>Contact</NavLink></li>



                    </ul>
                </div>
                <div>
                    <Link to='#'>Login</Link>
                </div>
            </div>
        </>
    )
}

export default Header