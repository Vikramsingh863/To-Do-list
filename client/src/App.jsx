import {BrowserRouter, Routes, Route} from "react-router-dom"
import About from "./Component/About";
import Home from "./Component/Home";
import Header from "./Component/Header"
import Contact from "./Component/contact";
import { Auth0Provider } from '@auth0/auth0-react';
import { createContext } from "react";
import Dataprovider from "./Context/Dataprovider";
import { useContext } from 'react';
import { Datacontext } from "./Context/Dataprovider";
import Login from "./Component/Login";
import SignUp from "./Component/signup";
import IconButton from '@mui/material/IconButton';
import axios from "axios";
import Protected from "./Component/Protacted";
import Check from "./Component/Check";
function App(){
const clientId= '205688264647-h04om6jv0sj4kdj15g9lc61ctpfuiqjc.apps.googleusercontent.com';
const {account, setAccount}= useContext(Datacontext)
//     account&&console.log(account)
function cookie(){
axios.get("http://localhost:5500/cookie",{
  withCredentials: true
})
}
    return(
        
        <BrowserRouter>
        <Auth0Provider
    domain="dev-u7limhtz8sys331g.us.auth0.com"
    clientId="IV1ULzHgaI6fjKzEjvwa6aMJpMSibyJF"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
         <Header/> 

          
            <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/About' element={<Protected Component={About}/>}/>
            <Route path='/Contact' element={<Protected Component={Contact}/>}/>
            <Route path ='/Check' element={<Check/>}/>
            </Routes>
            <Login/>
            <SignUp/>
            
        </Auth0Provider>
        </BrowserRouter>
        
    )
}
export default App;
