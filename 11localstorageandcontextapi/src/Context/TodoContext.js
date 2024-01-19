import {createContext, useContext} from "react";

export const TodocreateContext = createContext();

export const usetodo = () => {
    return (
        useContext(TodocreateContext)
    )
}
export const TodoProvide = TodocreateContext.Provider