import { response } from 'express'
import userdata from '../Modal/insertDataMode.js'
import { pool } from '../db.js'

export default async function insertData(req, res) {
    const{data,foreign_email }=req.body
    try {
        
        await pool.query(`insert into userdata(data,values, foreign_email)
            values($1,$2,$3)`,[data.data,data.values , foreign_email])
        res.status(200).json("data inserted successfully")
    }
    catch {
        res.status(500).json("error while inserting data")
    }
}




export  async function getData(req, res) {
   const usermail =  req.params.email
    try {
        const response = await pool.query(`SELECT * FROM userdata where foreign_email = $1 ORDER BY created_at DESC`,[usermail]);
        
        
       res.status(200).json(response.rows)
    }
    catch {
        console.log("Error while fetching ")
    }
}


export  async function deleteData(req, res) {
    console.log(req.params.id)
        try {
            const data = await pool.query(`DELETE FROM userdata WHERE _id = $1`,[req.params.id])
            res.json(data.rowCount)
        }
        catch {
            console.log("Error while fetching ")
        }
    }


export async function updateData(req,res){
    console.log(req.body)
    try {
     const response= await pool.query(`UPDATE userdata
    SET values = $1
    WHERE _id = $2
    RETURNING *`,[req.body.value, req.body.id])
        
        res.status(200).json(response)
        
    } catch (error) {
        res.send("error")
    }
}






