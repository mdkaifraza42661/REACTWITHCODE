import {createContext, useContext} from "react";

export const ContextApp = createContext()


// We create provider function 

export const AppProvider = ({children}) => {
    return (
        <ContextApp.Provider value={"Kaif raza"}>
            {children}
        </ContextApp.Provider>
    )
}


// we need to create comsuner

// Context(wharehouse)
// Provider ()
// consumer()




// 1) phelai ek context create karo CreateContext use kr k
// 2) fir ek function bano jo ki wrape ho ga wo varible sy jo varible banatha createContext mai whai varible.provider yaha value v pass hoga sth mai
// 3) fir jaha wrap krna ha function wha wrap kr do or fir same providor function sy tho ek thrha sy conection bn jae ga dono ki between jisy data easy transfar ho jae ga
// 4) or us file mai ja k wha createContext ko import kr use kro 