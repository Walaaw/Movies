import React, { useContext} from 'react'
import { Link } from 'react-router-dom';
import { AppContext } from '../../Context/Context';
import homeStyle from './Movie.module.css'

export default function Movie() {
  let{allmovies}= useContext(AppContext)
    return (
    <>
    {allmovies!==null ?<div className=" container">
      <div className="row mt-5">
        <div className="col-md-4 d-flex align-items-center">
         <div className={homeStyle.item}>
         <h3 className=' w-50'> Trending movies to watch now</h3>
         <p className='  text-muted'>Most watched movies by weak</p>
         </div>
        </div>
        {allmovies.slice(0,16).map((movie,idx)=><div key={idx} className="col-md-2">
        <Link to={'/details/movie/'+ movie.id}>
        <div className={homeStyle.movie}>
            <figure className='position-relative'>
              <img src={'https://image.tmdb.org/t/p/w500'+ movie.poster_path} alt="img" className='w-100 rounded shadow' />
              <figcaption className >
                <p className='h-50 p-2 text-center  text-white' >{movie.title}</p>
              </figcaption>
              <div className='vote p-2 rounded position-absolute top-0 end-0  bg-info text-black'>{movie.vote_average.toFixed(1)}</div>
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
