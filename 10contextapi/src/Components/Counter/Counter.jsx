import React from 'react'
import {useContext} from 'react'
import {CounterContext} from '../../Context/Contextcounter'
function Counter() {
    const countercountext = useContext(CounterContext)
    console.log(countercountext.setcount);
    return (
        <div>
            <button onClick={() => countercountext.setcount(countercountext.count + 1)}>Increment</button>
            <button onClick={() => countercountext.setcount(countercountext.count - 1)}>Decrement</button>
        </div>
    )
}

export default Counter