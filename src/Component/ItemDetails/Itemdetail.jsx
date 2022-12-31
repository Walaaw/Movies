import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import itemstyle from './itemdstaikls.module.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function Itemdetail() {

     const {media,id} =useParams()
     const [details,setdatails]= useState(null);
     const [desc, setdesc] = useState(null);
     const [samilier,setsamilier]=useState([])
     
    async function getItemDetails() {
        let{data}= await axios.get(`https://api.themoviedb.org/3/${media}/${id}?api_key=e6d013bb3c08e23abee2783567ef34a7&language=en-US`)
       setdatails(data);
       setdesc(data.genres) ;

    }
  
    async function getsaimiliar() {
     let {data}=  await axios.get(`https://api.themoviedb.org/3/${media}/${id}/similar?api_key=e6d013bb3c08e23abee2783567ef34a7&language=en-US&page=1`)
     setsamilier(data.results)
      console.log(data.results);
    }
 useEffect(() => {
   getItemDetails();
   getsaimiliar();

 }, [])
 const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
}
  return (
  <>
  {details? <div className=" container">
    <div className="row my-5">
        <div className="col-md-5">
            <div className="item">
                <img src={'https://image.tmdb.org/t/p/w500'+ details.poster_path}
                className="w-100 h-100"  alt="img" />
            </div>
        </div>
        <div className="col-md-7">
            <div className={itemstyle.item} >
            <h1 className='p-2'> {details.name} {details.original_title}</h1>
            <p className='p-2'>{details.overview}</p>
            {desc?.map((ele,idx)=> <button key={idx} className=' btn btn-outline-info p-2 m-2'> {ele.name}</button>)}
            <div className=' mt-3'>
            <span className='text-info p-2 fs-4'> Rate :</span> <i className="fa-solid fa-star fa-2x p-3"></i>
            <span className='p-1 fs-5'>{details.vote_average}</span>
            </div>
            <div className=' mt-3'>
            <span className='text-info p-2 fs-4'> Vote count :</span> 
            <span className='p-1 fs-5'>{details.vote_count}</span>
            </div>
            <div className=' mt-3'>
            <span className='text-info p-2 fs-4'> Popularity :</span> 
            <span className='p-1 fs-5'>{details.revenue}{details.popularity}</span>
            </div>
           
            <div className=' mt-3'>
            <span className='text-info p-2 fs-4'> Release Date :</span> 
            <span className='p-1 fs-5'>{details.release_date} {details.last_air_date}</span>
            </div>
            </div>
        </div>
    </div>
  </div>:<div className="loadingScreen vh-100  d-flex justify-content-center align-items-center">
    <i class="fa-solid fa-spinner fa-spin fa-2x"></i>
    </div>}
 {samilier?<div className='container'>
  <div className='row mt-5 mb-5'>
  <h3 className=' text-info p-3 m-2'> Related with:</h3>
  <Carousel responsive={responsive}>
  {samilier.map((same,idx)=> <div key={idx} >
      <div className='item '>
        <figure>
        <img src={'https://image.tmdb.org/t/p/w500'+ same.backdrop_path} alt='same' className='w-100 rounded'/>
        < p className='text-center text-info p-2'> {same.name}{same.original_title}</p>
        </figure>
      </div>
    </div>)}
</Carousel>

  </div>
 </div>:<div className="loadingScreen vh-100  d-flex justify-content-center align-items-center">
    <i class="fa-solid fa-spinner fa-spin fa-2x"></i>
    </div>}
  </>
  )
}
