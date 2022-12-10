import React from 'react'
import style from './profile.module.css'
export default function Profile(props) {
  return (
    <>

<div className={`container-fluid  ${style.profile}`}>
<section className='jk'>
<div className="col d-flex justify-content-center align-items-center mt-5">
            <div className=' fs-1 bg-light text-dark my-5 p-4 py-3 rounded-circle'>
                {props.userData.first_name.slice(0,1)}
            </div>
        </div>
</section>
</div>
  <div className=" container my-5">
  <div className="row">
  
        <h2 className='text-info text-center'>{`Hello${props.userData.first_name}${props.userData.last_name} `}</h2>
        <div className='text-center text-info fs-4 fw-bold p-3'>
            <p> {`Your name: ${props.userData.first_name}${props.userData.last_name}`}</p>
            <p> {`Your Email: ${props.userData.email}`}</p>
            <p> {`Your Age: ${props.userData.age}`}</p>
        </div>
    </div>
   </div>
 
  
    
    </>
  )
}
