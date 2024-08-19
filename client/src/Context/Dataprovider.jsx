
import { createContext, useState } from "react";

export const Datacontext = createContext(null)

export default function Dataprovider({children}){
    const [account, setAccount] = useState('')
    const [loginValue, setLoginValue] = useState(false)
    const [user, setUser] = useState()
    const [signUpValue, setSignUpValue] = useState(false)
    const [cookies, setCookies] = useState("")
    return(
        <Datacontext.Provider 
        value={{account, setAccount, user, setUser, loginValue, setLoginValue, signUpValue, setSignUpValue,cookies, setCookies}}>
            {children}

        </Datacontext.Provider>
        
    )
}