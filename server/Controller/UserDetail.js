import User from '../Modal/user.js'
import { v4 as uuid } from 'uuid';
import { setUser } from '../service/auth.js';
import { pool } from '../db.js';
export async function getSignup(req, res) { 

    try {
        
         const result= await pool.query('INSERT INTO userdetails ( name,email, password) VALUES ($1, $2, $3) RETURNING *',
      [req.body.Name, req.body.Email, req.body.Password])
        // console.log(result)
            res.status(200).json("data inserted successfully")
        }  
    catch {
        console.log("Error while saving data ")
    }
}


export async function getLogin(req, res) {

    try {  
        
        const result = await pool.query(`SELECT * FROM userdetails WHERE email = $1 AND password =$2 `,[req.body.Email, req.body.Password]);
        const rows = result.rows[0];
        
           const token=  setUser(rows)
            const senduser= {Name:rows.name, Email:rows.email}
            
        res.cookie("usertoken",token,{
            httpOnly:false ,
            sameSite: 'None' ,
            secure: true,
            expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)            
                  })

            res.cookie("userData",senduser,{
                httpOnly:false ,
                sameSite: 'None' ,
                secure: true,
                expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)            
                    })
        res.status(200).json({Name:rows.name, Email:rows.email});
    }
    catch (err) {
        res.status(500).json({ message: "error 500" })
    }
}


export async function getDatabyId(req,res){
    
    
    try {
        
        const user  = await User.findOne({_id:req.params.id}).select('-Password')
        if(!user){
            res.status(500).json("user not found")
        }
        res.status(200).json(user)
    } catch (error) {
     res.status(500).json("error while geting data by ID")   
    }
}