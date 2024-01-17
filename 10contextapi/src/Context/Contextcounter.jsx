import {useState} from "react";
// provider 
import {createContext} from "react";

// create contextapi
export const CounterContext = createContext(null)
// wrape all the stufs like function variable 
export const CounterProvider = (props) => {
    const [count, setcount] = useState(5)
    return (
        <CounterContext.Provider value={{count, setcount}}>
            {props.children}
        </CounterContext.Provider>
    )
}