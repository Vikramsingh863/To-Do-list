
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, styled } from '@mui/material';
import { useRef, useState } from 'react';
import { DeleteData } from '../Services/api';
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { updateDatareq } from '../Services/api';
export const Todolist=({todoList, setResp, setInput, input})=>{
    
  
    

   
const Items = styled(Box)`
    display:flex;
    color:red;
    gap:10px;
    cursor: pointer;
    margin:20px 0px 0px 10px;
    


`
const Container = styled(Box)`
     display: grid;
     
     align-items:center;
     
margin-top:20px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 5fr));
  gap: 10px;

  
  
` 
    


   async function deleteData(id){
      const response= await DeleteData(id)
      console.log(response)
      setResp(response)

    }

    async function updateData(id, setInput){
        setInput(id)
     }

            function AlertDialog(e) {
                const [open, setOpen] = React.useState(false);
            
                const handleClickOpen = () => {
                setOpen(true);
                };
            const Buttonstyle = styled(Button)`
                width: 100%; 
                // height:50px;          
  white-space: nowrap;    
  overflow: hidden;       
  text-overflow: ellipsis;
  border: 1px solid #ccc; 
            `
                const handleClose = () => {
                setOpen(false);
                setUpdate(false)
                };

                const [update, setUpdate] = useState('')
                updateData=()=>{
                    setUpdate(true)
                }
                return (
                    <React.Fragment>
                    <Buttonstyle variant="outlined" onClick={handleClickOpen} fullWidth >
                    {e.e.data}
                    </Buttonstyle>
                    <Dialog
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                        component: 'form',
                        onSubmit: async(event) => {
                            
                            
                            // console.log(e.e)
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries(formData.entries());
                        const response = await updateDatareq(formJson.text, e.e._id)
                        setResp(response)
                        
                        handleClose();
                        setUpdate(false)
                        },
                    }}
                    >
                    <DialogTitle>{e.e.data}</DialogTitle>

                    <DialogContent>
                    { !update?
                        <DialogContentText>{e.e.values}                </DialogContentText>
                        :
                        <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="text"
                        //   defaultValue={e.e.values}
                        
                        type="text"
                        fullWidth
                        variant="standard"
                        />}
                    </DialogContent>
                    <DialogActions>

                        {!update?<Button onClick={updateData}>Update</Button>:
                        <Button type="submit">Submit</Button>}
                    </DialogActions>
                    </Dialog>
                </React.Fragment>
                );
            }
            
 
    return(
        <> 
        <Container >
            {todoList.length>0&&
            
                todoList.map((e)=>{
                    
                    return(
                    <Items id={e._data}  key={e._id}>
                        
                        <AlertDialog e={e}/>
                        {/* <div   style={{display:"none" }}>{e._id}</div> */}
                         <DeleteIcon  onClick={()=>deleteData(e._id)}/>
                        {/* <button onClick={()=>updateData(e._id, setInput)}>Update</button> */}
                    </Items>
                    
                    )
                })
            }
        </Container>
            
        </>
        
    )
}