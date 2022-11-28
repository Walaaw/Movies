import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Register() {
 const navegate= useNavigate()
 const [regerror, setregerror] = useState("")
 const [errors, seterrors] = useState(null);
 const [user,setuser]= useState(
  {
    first_name:"",
    last_name:"",
    age:"",
    email:"",
    password:""
    }
 )
 function getUserData(e){
  let newonject={...user};
  let proberty=e.target.id
  newonject[proberty]=e.target.value;
  setuser(newonject);
  seterrors(null);
  setregerror('');
}
 function validdata(e){
  e.preventDefault();
  const schema= Joi.object({
    first_name:Joi.string().required().alphanum().min(3).max(20),
    last_name:Joi.string().required().alphanum().min(3).max(20),
    age: Joi.number().required().min(20).max(80),
    email: Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password: Joi.string().required().pattern(new RegExp('^[a-zA-Z0-9]{8,30}$'))
  })
 
  let errorresbonse=schema.validate(user,{abortEarly:false});
  if(errorresbonse.error===undefined){
    callapi()
  }
  else{
  let commingerrors=errorresbonse.error.details
  seterrors(commingerrors);
  console.log(commingerrors);
  console.log(errors);
  }
 }
 async function callapi(){
  let resbonse=await axios.post("https://route-egypt-api.herokuapp.com/signup",user);
  let msg=resbonse.data.message;
  if(msg==="success"){
    navegate('/home')
  }
  else{
    setregerror(msg);
  }
 }
 function setOneError(key){
  if(errors!=null){
    for(let i=0 ;i<errors.length;i++){
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
      <h3 > Registration Form</h3>
      {regerror===""?"":<div className='alert alert-danger'>{regerror}</div>}
      <form action="" onSubmit={validdata} >
        <label htmlFor="first_name" className='label-control'>first_name:</label>
        <input onChange={getUserData} type="text" id='first_name' placeholder='first_name'  className=' my-3 form-control bg-transparent text-white' />
        {setOneError('first_name')?<div className=' alert alert-danger'>{ setOneError("first_name")}</div>:''}
        <label htmlFor="last_name" className='label-control'>last_name:</label>
        <input onChange={getUserData} type="text" id='last_name' placeholder='last_name'  className=' my-3 form-control bg-transparent text-white' />
        {setOneError('last_name')?<div className=' alert alert-danger'>{ setOneError("last_name")}</div>:''}
        <label htmlFor="age" className='label-control'>age:</label>
        <input onChange={getUserData} type="number" id='age' placeholder='age'  className=' my-3 form-control bg-transparent text-white' />
        {setOneError('age')?<div className=' alert alert-danger'>{ setOneError("age")}</div>:''}
        <label htmlFor="email" className='label-control'>email:</label>
        <input onChange={getUserData} type="email" id='email' placeholder='email'  className=' my-3 form-control bg-transparent text-white' />
        {setOneError('email')?<div className=' alert alert-danger'>{ setOneError("email")}</div>:''}
        <label htmlFor="password" className='label-control'>password:</label>
        <input onChange={getUserData} type="password" id='password' placeholder='password'  className=' my-3 form-control bg-transparent text-white' />
        {setOneError('password')?<div className=' alert alert-danger'>password required and must be 8 character at least</div>:''}
        <button className='btn btn-outline-info mt-3 '> register</button>
      </form>
    </div>
    </>
  )
}
