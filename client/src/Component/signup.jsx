import React from 'react';
import { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { submitdata, getData } from '../Services/api';
import { useContext } from 'react';
import { Datacontext } from '../Context/Dataprovider';

export default function SignUp(){
 const {setSignUpValue, signUpValue} = useContext(Datacontext)
    
    // const handleClickOpen = () => {
    //   setSignUpValue(true);
    // };
  
    const handleClose = () => {
      setSignUpValue(false);
    };
    // const loginDilogClose = () => {
    //   setloginD(false);
    // };  
    return(
        <>
        <Dialog
        open={signUpValue}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            
            
            submitdata(formJson)

            handleClose();
          },
        }}
      >
        <DialogTitle>Signup</DialogTitle>
        <DialogContent>
          <DialogContentText>
            All fields are mandatory
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="Name"
            label="Name "
            type="text"
            fullWidth
            variant="standard"
          />
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
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Sign Up</Button>
        </DialogActions>
      </Dialog> 
        </>

    )
}