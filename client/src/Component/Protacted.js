import { useState, useEffect } from "react";
import Login from "./Login";
import Home from "./Home";
import Cookies from 'js-cookie';
import { useContext } from "react";
import { Datacontext } from "../Context/Dataprovider";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";



export default function Protected(props) {
    const { Component } = props
    const {loginValue, setLoginValue} =useContext(Datacontext)
    // const [cookies, setCookies]= useContext(Datacontext)
    const navigate = useNavigate()
    useEffect(() => {
        const cookie = Cookies.get("userData")
        
        if(!cookie)
            {navigate('/')
        setLoginValue(true)}
        
    }, []);
    
        return(
        <>
            
            <Component />
        </>)
    
}