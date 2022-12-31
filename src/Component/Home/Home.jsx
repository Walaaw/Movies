
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../Context/Context';
import Slider from '../Slider/Slider';
import homeStyle from './Home.module.css'

export default function Home() {
 
   let {allmovies,alltvs,allperson}= useContext(AppContext)
    return (
    <>
    <Slider/>
    {allmovies!==null && alltvs!==null &&allperson? <div className=" container">
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
