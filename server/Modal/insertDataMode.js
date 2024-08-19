import mongoose, {Schema} from "mongoose";
const userData= mongoose.Schema({
    data:{
        type:String,
        required:true,
    },
    id:{
        type:String,
        required:true
    }
})
export default mongoose.model("userdata",userData)
