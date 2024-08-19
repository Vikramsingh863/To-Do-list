import axios from "axios"

function check(){
    axios.get("http://localhost:5500/check",{
        withCredentials: true 
    })
}


export default function Check(){
    
    return(
        <>
        <div>Check</div>
        <button onClick={check}>request</button>
        </>
    )
}