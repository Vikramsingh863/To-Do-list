import express from 'express'
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import {pool} from './db.js'

import route from './Route/route.js';
dotenv.config();
import cors from 'cors'
import cookieParser from 'cookie-parser';


const PORT = 5500||process.env.PORT;
const app = express();
app.use(cors({
  origin: "http://localhost:3000",
  credentials:true,
  // allowedHeaders: 'Content-Type,Authorization' 
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/',route)
app.listen(PORT,()=>{
  console.log("server is running")
})
