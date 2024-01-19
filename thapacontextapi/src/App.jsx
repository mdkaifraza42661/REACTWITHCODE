import {useContext, useState} from 'react'

import './App.css'
import {ContextApp} from './Context/Context.jsx'

function App() {
  // const [count, setCount] = useState(0)
  const myname = useContext(ContextApp)
  // console.log(myname);
  return (
    <>
      {myname}
    </>
  )
}

export default App
