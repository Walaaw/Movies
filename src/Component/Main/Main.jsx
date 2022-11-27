import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

export default function Main({userData,setuserData}) {
  let navigate= useNavigate()
  function logout() {
    localStorage.removeItem("token");
    setuserData(null);
    navigate('/login'); 
  }
  return (
    <>
    <Navbar userData={userData}  logout={logout}/>
    <Outlet/>
    </>
  )
}
