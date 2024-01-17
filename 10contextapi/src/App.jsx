// import {useState} from 'react'

import './App.css'
import Counter from './Components/Counter/Counter'
import {useContext} from 'react'
import {CounterContext} from './Context/Contextcounter'

function App() {
  // const [count, setCount] = useState(0)
  const counterstate = useContext(CounterContext)

  return (
    <>
      <h1>Context Api Count is {counterstate.count}</h1>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </>
  )
}

export default App
