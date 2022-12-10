import React from 'react'
import axios from 'axios';
import Joi from 'joi';
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
export default function Login(props) {
  const navegate= useNavigate()
 const [regerror, setregerror] = useState("")
 const [errors, seterrors] = useState(null);
 const [user,setuser]= useState(
  {
    email:"",
    password:""
    }
 )
 
console.log(props);
 function validdata(e){
  e.preventDefault();
  const schema= Joi.object({
    email: Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password: Joi.string().required().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
  })
 
  let errorresbonse=schema.validate(user,{abortEarly:false});
  if(errorresbonse.error===undefined){
    callapi();
  }
  else{
  let commingerrors=errorresbonse.error.details
  seterrors(commingerrors);
  }
 }
 function getUserData(e){
  let newonject={...user};
  let proberty=e.target.id
  newonject[proberty]=e.target.value;
  setuser(newonject);
  seterrors(null);
  setregerror('');
}
 async function callapi(){
  let {data}=await axios.post("https://sticky-note-fe.vercel.app/signin",user);
  let msg=data.message;
  if(msg==="success"){
    localStorage.setItem("token",data.token);
    navegate('/home');
    props.getloggeduser();
  }
  else{
    setregerror(msg);
  }
 }
 function setOneError(key) {
  if(errors!=null){
    for (let i = 0; i< errors.length; i++) {
      if(errors[i].context.key===key){
        return errors[i].message;
      }
     
    }
    return '';
  }
 }
 
  return (
    <>
    
    <div className=" w-50 mt-5 m-auto ">
      <h3 > Login Form</h3>
      {regerror===""?"":<div className='alert alert-danger'>{regerror}</div>}
      <form action="" onSubmit={validdata} >
        <label htmlFor="email" className='label-control'>email:</label>
        <input onChange={getUserData} type="email" id='email' placeholder='email'  className=' my-3 form-control bg-transparent text-white' />
        {setOneError('email')? <div className='alert alert-danger' > {setOneError('email')}</div>:''}
        <label htmlFor="password" className='label-control'>password:</label>
        <input onChange={getUserData} type="password" id='password' placeholder='password'  className=' my-3 form-control bg-transparent text-white' />
        {setOneError('password')? <div className='alert alert-danger' > {setOneError('password')}</div>:''}
        <button className='btn btn-outline-info mt-3 '> Login</button>
      </form>
    </div>
    </>
  )
}
