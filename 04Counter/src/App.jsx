import {useState} from 'react'

import './App.css'

function App() {
  let [Counter, setCounter] = useState(15)
  // let [Countersub, setCountersub] = useState({Counter})
  // console.log(Countersub);

  // let Counter = 5
  const updatevalue = () => {
    // Counter = Counter + 1
    if(Counter < 20) {
      // setCounter(0)
      setCounter(Counter + 1)
      // value not update
      setCounter(Counter + 1)
      setCounter(Counter + 1)
      setCounter(Counter + 1)
      setCounter(Counter + 1)
      setCounter(Counter + 1)
      // arrow funtion inside value update
      setCounter(Counter => Counter + 1)
      setCounter(Counter => Counter + 1)
      setCounter(Counter => Counter + 1)
      setCounter(Counter => Counter + 1)



    }
    // console.log(Counter = Counter + 1);
    // console.log("upvalue", Math.random());
  }
  const decvalue = () => {
    if(Counter > 0) {

      setCounter(Counter - 1)
    }
    // console.log(Countersub - 1)
    // setCountersub(Countersub - 1)
    // console.log(Counter = Counter - 1);
    // console.log("lowvalue", Math.random());
  }

  return (
    <>
      <h1>Chai or code</h1>
      <h2>update value:{Counter}</h2>
      <button onClick={updatevalue}>Add Value</button>
      <button onClick={decvalue}>subs Value</button>
    </>
  )
}

export default App
