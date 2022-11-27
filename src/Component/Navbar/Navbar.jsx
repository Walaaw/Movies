import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar( {userData, logout}) {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light p-4 navbar-dark shadow-lg">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/home">Noxe</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
      {userData? <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/movie">Movies</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/tv">Tv Shows</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/people">People</Link>
        </li>
      </ul>:''}
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
      <li className="nav-item  ">
         <i className=" me-2 fa-brands fa-facebook-f"></i>
         <i className=" me-2 fa-brands fa-twitter"></i>
         <i className=" me-2 fa-brands fa-instagram"></i>
         <i className=" me-2 fa-brands fa-youtube"></i>
        </li>
        {userData?<> <li className="nav-item">
          <span class="nav-link cursol" to="/register" onClick={logout}>Logout</span>
        </li>
        <li className="nav-item">
          <Link class="nav-link" to="/profile"><div className='bg-info d-flex justify-content-center align-items-center px-2 py-1 text-dark rounded-circle'>{userData.first_name.slice(0,1)}</div></Link>
        </li></>:<>  <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link class="nav-link" to="/register">Register</Link>
        </li></>}
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

