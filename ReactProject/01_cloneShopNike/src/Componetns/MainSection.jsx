import React from 'react'
import shoe_image from '../assets/shoe_image.png'
import flipkart from '../assets/flipkart.png'
import amazon from '../assets/amazon.png'
function MainSection() {
    return (
        <div className='flex  pt-28'>
            <div className='w-7/12'>
                <h1 className=' text-8xl  font-extrabold tracking-wide'>YOUR FEET DESERVE THE BEST</h1>
                <p className=' w-96 pt-4'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className='pt-5'>
                    <button className='btn bg-red-700 text-white px-4 py-1 uppercase'>Shop Now</button>
                    <button className='capitilize mx-5  border-black border px-4 py-1 text-1xl'>Category</button>
                </div>
                <div className='pt-3'>
                    <p>Also Available On</p>
                    <div className='flex items-center gap-5 pt-4'>
                        <img src={flipkart} alt="" />
                        <img src={amazon} alt="" />
                    </div>
                </div>
            </div>
            <div className=' w-5/12 flex justify-end'>
                <img src={shoe_image} alt="" />
            </div>
        </div>
    )
}

export default MainSection