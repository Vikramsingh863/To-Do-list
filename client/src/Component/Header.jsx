import {Box, styled, Container, Button} from '@mui/material'
import { Link } from 'react-router-dom'
import Login from './Login'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { useContext, useEffect } from 'react';
import { Datacontext } from '../Context/Dataprovider';
import { getDataById } from '../Services/api';
import axios from 'axios'
import Cookies from 'js-cookie';
export default function Header(){
    const {user, setUser,cookies}= useContext(Datacontext)
    const {loginValue, setLoginValue} =useContext(Datacontext)
    const {signUpValue, setSignUpValue} = useContext(Datacontext)
    
    
    function logOut(){
        // axios.get(`${URL}/cookies`,{
        //     withCredentials: true
        // }).then(()=>{
        //     setUser('')
        // })
        // .catch((err)=>console.log(err))  
        Cookies.remove('usertoken')
        Cookies.remove('userData')
        setUser('')
    }
   
    function setValueLogin(){
        setLoginValue(true)
    }
    function setValueSign(){
        setSignUpValue(true)
    }

    // useEffect(()=>{
    //     if(cookies){
    //     const fetchData = async () => {
    
    //   const response=  await getDataById(cookies)
    //   setUser(response)
    //     }
    //     fetchData();}
    // },[cookies])
   
    return(
        <>  
  
         <AppBar component="nav">
            
         <Toolbar >
            <IconButton >
                
                
                <Link to='/'>Home</Link></IconButton>
                <IconButton>  <Link to='/about'>About</Link></IconButton>
                <IconButton>  <Link to='/contact'>To-do List</Link></IconButton>
                <IconButton>  <Link to='/Check'>Check</Link></IconButton>
                {user&&user?
                <div>{user?.Name} <button onClick={logOut}>log out</button></div>
                :
                <>
                    <button onClick={setValueSign}>Sign Up</button>
                    <button onClick={setValueLogin}>Login</button>
                </>
                }
                
            </Toolbar>
            </AppBar>
            <Container style={{ marginTop: '85px' }}>
        
      </Container>
        </>
    )
}