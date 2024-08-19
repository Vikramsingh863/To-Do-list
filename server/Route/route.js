import express from 'express'
import { getSignup, getLogin, getDatabyId } from '../Controller/UserDetail.js'
import { restrictToLoggedinUserOnly } from '../middleware/auth.js'
// import {insertData, , deleteData, }  from '../Controller/insertData.js'
import insertData,{getData, deleteData,updateData} from '../Controller/insertData.js'
const route  = express.Router()
// route.get('/',(req,res)=>{
//     res.send("hello")
// }) 
route.post('/user',getSignup)
route.post('/login',getLogin)
// route.get('/getDatabyId/:id',getDatabyId)
route.post('/insert',insertData)
route.get('/get/:email',getData)
route.delete('/delete/:id',deleteData)
route.patch('/update',updateData)


// route.get('/cookies',(req,res)=>{
//     res.clearCookie("userData",{
//         httpOnly:false ,
//                 sameSite: 'None' ,
//                 secure: true,
//     })
//     res.end()
// })
route.get('/check',restrictToLoggedinUserOnly,(req,res)=>{
    res.json("authorized")
})

export default route