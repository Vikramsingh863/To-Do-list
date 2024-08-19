
import { useEffect, useRef } from "react"
import axios from 'axios'
import { sendData, fetchData } from "../Services/api";
import { useContext, useState } from "react";
import { Datacontext } from "../Context/Dataprovider";
import { Todolist } from "./todoList";
import { updateDatareq } from "../Services/api";
import { Box, styled } from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export default function Contact() {
    const inputRef = useRef({
        data: '',
        values: ""
    });
    const { user } = useContext(Datacontext)
    const [todoList, settodoList] = useState({})
    const [res, setResp] = useState({})
    const [input, setInput] = useState()

    const Inputbox = styled('input')`
border 50px solid red;
    margin-top:100px;
    width:40%;
    // display: block;
`

    const Container = styled(Box)`
    margin-left:20px;
    
`
    const OuterBox = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items:center ;
    justify-content: center ;
    

`
    const InnerBox = styled(Box)`

`
const Buttonstyle = styled(Button)`
    width: 50%;
    height:60px;
`
const Textfield = styled(Box)`
    display: flex;
    align-item:center;
    justify-content:center;
    margin:10px;
    width:60%;
    gap:10px;
`
    const insertData = async (e) => {
        const { name, value } = e.target;
        inputRef.current[name] = value;

    }

    const sendInsertedData = async (e) => {


        const response = await sendData({ data: inputRef.current, foreign_email: user.Email })
        setResp(response)
        //     inputRef.current = {data:'',
        //         values:""
        // }
    }

    // const updateData = async (input, e) => {
    //     console.log(e)
    //     if (!e || e.key == "Enter") {
    //         
    //         setInput('')
    //         // inputRef.current.value = ""
    //     }
    // }
    useEffect(() => {
        const fetching = async () => {
            if (user) {

                const data = await fetchData(user.Email)

                data?.data && settodoList(data.data)
            }
        }
        fetching()
    }, [user, res])


    return (
        <Container>
            <OuterBox>
                <Textfield>
                    <label htmlFor="textfield" name="">Title</label>
                    <TextField
                        required
                        id="textfield"
                        fullWidth
                        name="data"
                        label="Title"
                        onChange={insertData}
                    />
                </Textfield>
                <Textfield>
                    <label htmlFor="data" name="">Data</label>
                    <TextField
                    fullWidth
                        id="data"
                        label="Multiline Data"
                        multiline
                        maxRows={4}
                        variant="filled"
                        onChange={insertData}
                        name="values"
                    />
                </Textfield>
                <Buttonstyle variant="outlined" size="large" onClick={sendInsertedData} > Add Into The List</Buttonstyle>

            </OuterBox>
            <Todolist todoList={todoList} setResp={setResp} setInput={setInput} input={input} />

        </Container>
    )
}