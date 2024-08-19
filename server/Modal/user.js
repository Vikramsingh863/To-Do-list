import mongoose, { Schema } from 'mongoose'
const User = mongoose.Schema({
    Email:{
        required:true,
        type: String
    },
    Name:{
        required:true,
        type: String
    },
    Password:{
        required:true,
        type: String
    }

})
export default mongoose.model("Userdetail",User)