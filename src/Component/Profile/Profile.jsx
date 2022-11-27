import React from 'react'
import style from './profile.module.css'
export default function Profile({userData}) {
  return (
    <>

<div className={`container-fluid  ${style.profile}`}>
<section className='jk'>
<div className="col d-flex justify-content-center align-items-center mt-5">
            <div className=' fs-1 bg-light text-dark my-5 p-4 py-3 rounded-circle'>
                {userData.first_name.slice(0,1)}
            </div>
        </div>
</section>
</div>
  <div className=" container my-5">
  <div className="row">
  
        <h2 className='text-info text-center'>{`Hello${userData.first_name}${userData.last_name} `}</h2>
        <div className='text-center text-info fs-4 fw-bold p-3'>
            <p> {`Your name: ${userData.first_name}${userData.last_name}`}</p>
            <p> {`Your Email: ${userData.email}`}</p>
            <p> {`Your Age: ${userData.age}`}</p>
        </div>
    </div>
   </div>
 
  
    
    </>
  )
}
