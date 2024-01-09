import React from 'react'
import {Link} from 'react-router-dom'
function Home() {
    return (
        <>
            <div className=' bg-blue-700 text-yellow-400 flex align-middle justify-center flex-wrap'>
                <div className='w-2/5'>
                    <img className=' rounded' src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="avtar" />
                </div>
                <div className=' w-2/4'>
                    <h1>Lorem ipsum dolor sit amet.</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo iusto fuga, assumenda soluta neque nobis?</p>
                    <Link to='#' className='py-2 px-2 bg-yellow-300 text-blue-600' >Get Started</Link>
                </div>

            </div>
        </>
    )
}

export default Home