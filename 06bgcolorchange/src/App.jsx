import {useState} from 'react'

import './App.css'

function App() {

  const [color, setcolor] = useState('yellow')
  return (
    <>
      <div className='w-full h-screen duration-200 flex item-cente justify-around' style={{backgroundColor: color}}>

        <div className=' fixed bottom-11 w-5/6 flex justify-around  bg-white py-4 px-4 rounded-lg '>
          <button className='px-5 rounded-xl  py-2 border   capitalize outline-none shadow-lg' style={{backgroundColor: 'red'}} onClick={() => setcolor("red")}>Red</button>
          <button className='px-5 rounded-xl  py-2 border bg-green-700  capitalize outline-none shadow-lg' style={{backgroundColor: 'green'}} onClick={() => setcolor("green")}>green</button>
          <button className='px-5 rounded-xl  py-2 border bg-blue-700 capitalize outline-none shadow-lg' style={{backgroundColor: 'blue'}} onClick={() => setcolor("blue")}>blue</button>
          <button className='px-5 rounded-xl  py-2 border bg-lime-700 capitalize outline-none shadow-lg' style={{backgroundColor: 'olive'}} onClick={() => setcolor("olive")}>olive</button>
          <button className='px-5 rounded-xl  py-2 border bg-gray-700 capitalize outline-none shadow-lg' style={{backgroundColor: 'gray'}} onClick={() => setcolor("gray")}>gray</button>
          <button className='px-5 rounded-xl  py-2 border bg-yellow-700 capitalize outline-none shadow-lg' style={{backgroundColor: 'yellow'}} onClick={() => setcolor("yellow")}>yellow</button>
          <button className='px-5 rounded-xl  py-2 border bg-pink-700 capitalize outline-none shadow-lg' style={{backgroundColor: 'pink'}} onClick={() => setcolor("pink")}>pink</button>
          <button className='px-5 rounded-xl  py-2 border bg-purple-700 capitalize outline-none shadow-lg' style={{backgroundColor: 'purple'}} onClick={() => setcolor("purple")}>purple</button>
          <button className='px-5 rounded-xl  py-2 border bg-purple-300 capitalize outline-none shadow-lg' style={{backgroundColor: 'lavender'}} onClick={() => setcolor("lavender")}>lavender</button>
          <button className='px-5 rounded-xl  py-2 border bg-white capitalize outline-none shadow-lg' style={{backgroundColor: 'white'}} onClick={() => setcolor("white")}>white</button>
          <button className='px-5 rounded-xl  py-2 border bg-black text-white capitalize outline-none shadow-lg' style={{backgroundColor: 'black'}} onClick={() => setcolor("black")}>black</button>
        </div>
      </div>
    </>
  )
}

export default App
