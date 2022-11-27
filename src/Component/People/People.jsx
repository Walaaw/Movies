import React, { useContext} from 'react'
import { AppContext } from '../../Context/Context'
import homeStyle from './People.module.css'
export default function Home() {
let {allperson}= useContext(AppContext)

    return (
    <>
    {allperson? <div className=" container">
      
      <div className="row">
      <div className="col-md-4 d-flex align-items-center">
         <div className={homeStyle.item}>
         <h3 className=' w-50'> Trending people to watch Right now</h3>
         <p className='  text-muted'>Most watched series by weak</p>
         </div>
        </div>
        {allperson.filter((person)=>person.profile_path!==null).slice(0,16).map((person,idx)=>
        <div key={idx} className="col-md-2">
       <div className={homeStyle.person}>
            <figure>
              <img src={'https://image.tmdb.org/t/p/w500'+ person.profile_path} alt="img" className='w-100 rounded' />
              <figcaption className=' text-white text-center p-2'>{person.name}</figcaption>
            </figure>
        </div>
        </div> )}
      </div>
    </div>: <div className="loadingScreen vh-100 d-flex justify-content-center align-items-center">
    <i className="fa-solid fa-spinner fa-spin fa-2x"></i>
    </div>}
    </>
  )
}
