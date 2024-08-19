import { getUser } from "../service/auth.js";
export async function restrictToLoggedinUserOnly(req,res,next) {
    const userUid = req.cookies.usertoken;
    
    if(!userUid)
        
        
        return res.status(200).json("login to user first")
    const user = getUser(userUid)
    console.log(user)
    if(!user)
        return res.status(200).json("user not found")
    req.userData = user;
    next();

}

