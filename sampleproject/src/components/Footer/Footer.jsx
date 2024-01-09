import React from 'react'
import {Link, NavLink} from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className=' w-full bg-gray-800 flex  align-middle justify-center flex-wrap'>
                <div className="logo">
                    <Link to='/'>Logo</Link>
                </div>
                <div className=''>
                    <ul className='flex align-middle gap-8'>
                        <NavLink to={'/'} className={({isActive}) => `${isActive ? " text-orange-700" : " text-gray-600"}`}>Home</NavLink>
                        <NavLink className={({isActive}) => `${isActive ? "text-orange-700" : "text-gray-700"}`} to={'about'}>About</NavLink>
                        <NavLink to={'contact'} className={({isActive}) => `${isActive ? "text-orange-700" : "text-gray-700"}`}>Contact</NavLink>
                    </ul></div>
                <div className=''>
                    <ul className=''>
                        <Link to='#'>Lorem ipsum dolor sit amet.</Link>
                        <Link to='#'>Lorem ipsum dolor sit amet.</Link>
                        <Link to='#'>Lorem ipsum dolor sit amet.</Link>
                    </ul>
                </div>

            </div>
        </>
    )
}

export default Footer