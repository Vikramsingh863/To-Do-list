
import axios from 'axios';
const URL = "http://localhost:5500";

export async function submitdata(formdata){
    
     axios.post(`${URL}/user`,formdata)
      .then((res)=>console.log(res))
      .catch((err)=>console.log(err))
}




export async function getData(data) {
  try {
    const response = await axios.post(`${URL}/login`, data, {
      withCredentials: true
    });
    
    return response.data; 
  } catch (err) {
    console.error(err);
    throw err; 
  }
}

export async function getDataById(data) {
  try {
    // const response = await axios.get(`${URL}/getDatabyId/${data}`);
    
    // return response.data; 
  } catch (err) {
    console.error(err);
    throw err; 
  }
}




export async function sendData(data) {
  try {
    console.log(data)
    const response = await axios.post(`${URL}/insert`,data);
   return response;
  } catch (error) {
    console.log("input field is blank")
  }
   
}

export async function fetchData(email) {
  
  try {
    const response = await axios.get(`${URL}/get/${email}`);
  return response;
  console.log(response)
  } catch (error) {
    console.log("error while fetching in client side")
  }
  
}

export async function DeleteData(id) {
  console.log(id)
  try {
    const response = await axios.delete(`${URL}/delete/${id}`);
  return response;
  
  } catch (error) {
    console.log("error while fetching in client side")
  }
  
}

export async function updateDatareq(value,id) {
  console.log(value, id)
  try {
    const response = await axios.patch(`${URL}/update`,{id, value});
  return response;
  console.log(response)
  } catch (error) {
    console.log("error while fetching in client side")
  }
  
}

