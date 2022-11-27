import React, { useContext} from 'react'
import { Link } from 'react-router-dom';
import { AppContext } from '../../Context/Context';
import homeStyle from './tv.module.css'

export default function Tv() {
  let {alltvs}= useContext(AppContext)

    return (
    <>
    {alltvs!==null ? <div className=" container">
      <div className="row">
      <div className="col-md-4 d-flex align-items-center">
         <div className={homeStyle.item}>
         <h3 className=' w-50'> Trending tv to watch now</h3>
         <p className='  text-muted'>Most watched series by weak</p>
         </div>
        </div>
        {alltvs.slice(0,16).map((tv,idx)=><div key={idx} className="col-md-2">
       <Link to={`/details/tv/${tv.id}`}>
       <div className={homeStyle.tv}>
            <figure className='position-relative'>
              <img src={'https://image.tmdb.org/t/p/w500'+ tv.poster_path} alt="img" className='w-100 rounded' />
              <figcaption className=' text-white text-center p-2'>{tv.name}</figcaption>
              <div className='p-2 rounded position-absolute top-0 end-0  bg-info text-black'>{tv.vote_average.toFixed(1)}</div>
            </figure>
        </div>
       </Link>
        </div> )}
      </div>
    </div>: <div className="loadingScreen vh-100 d-flex justify-content-center align-items-center">
    <i className="fa-solid fa-spinner fa-spin fa-2x"></i>
    </div>}
    </>
  )
}
