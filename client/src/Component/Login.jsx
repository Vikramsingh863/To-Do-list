import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

import { useContext,useEffect } from 'react';
import { Datacontext } from '../Context/Dataprovider';

import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { submitdata, getData } from '../Services/api';
import Cookies from 'js-cookie';






export default function Login(){
  const {cookies, setCookies} = useContext(Datacontext)
    const {loginValue, setLoginValue} =useContext(Datacontext)
    const {user, setUser} = useContext(Datacontext)
  
    useEffect(() => {
      const userData = Cookies.get("userData");
      if(userData){
        
      const data = JSON.parse(userData.split("j:")[1])
      
      setUser(data)}
    }, []);

    const loginDilogOpen = () => {
      setLoginValue(true);
    };
  
    const loginDilogClose = () => {
      setLoginValue(false);
    };


    
      
    return(
        <>
      
        <Dialog
        open={loginValue}
        onClose={loginDilogClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            
             getData(formJson).
             then((data)=>{
              setUser(data)
             })
            .
            catch(()=>{
              console.log("error")
            })
            loginDilogClose();
          },
        }}
      >
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <DialogContentText>
            All Field are mandatory to fill
          </DialogContentText>
          
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="Email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="Password"
            label="Password"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={loginDilogClose}>Cancel</Button>
          <Button type="submit">Login</Button>
        </DialogActions>
      </Dialog>

        
        </>

    )
}