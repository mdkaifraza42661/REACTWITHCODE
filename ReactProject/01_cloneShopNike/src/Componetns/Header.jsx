import React from 'react'
import brand_logo from '../assets/brand_logo.png'

function Header() {
    return (
        <div className='flex items-center justify-between  pt-3'>

            <div className="first_Section">
                <img src={brand_logo} alt="" />
            </div>
            <div className="Second_Section">
                <ul className='flex gap-4'>
                    <li><a href="#" className='uppercase font-medium'>menu</a> </li>
                    <li><a href="#" className='uppercase font-medium'>location</a> </li>
                    <li><a href="#" className='uppercase font-medium'>about</a> </li>
                    <li><a href="#" className='uppercase font-medium'>contact</a> </li>
                </ul>
            </div>
            <div className="Third_Section">
                <button className='btn bg-red-700 text-white px-4 py-1 capitalize'>login</button>
            </div>
        </div>
    )
}

export default Header