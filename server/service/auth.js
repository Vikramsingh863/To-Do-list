import jwt from "jsonwebtoken";
const secret = '#*7dua9973jie'
export function setUser(user){
  return jwt.sign(user, secret)
}

export function getUser(token){
    if(!token) return null;
   return jwt.verify(token, secret)
}

