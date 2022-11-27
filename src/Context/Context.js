
import React, { createContext } from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

 export const AppContext= createContext();
 export default function CreatContextComponent(props) {
    const[allmovies,setallmovies] =useState(null);
    const[alltvs,setalltvs] =useState(null);
    const[allperson,setallperson] =useState(null);
  
    async function getmovie(){
      let {data}= await axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=e6d013bb3c08e23abee2783567ef34a7')
      
         let movies=data.results
         setallmovies(movies)
    }
    async function gettv(){
      let {data}= await axios.get('https://api.themoviedb.org/3/trending/tv/week?api_key=e6d013bb3c08e23abee2783567ef34a7')
      
         let tvs=data.results
         setalltvs(tvs)
    }
    async function getPerson(){
      let {data}= await axios.get('https://api.themoviedb.org/3/trending/person/week?api_key=e6d013bb3c08e23abee2783567ef34a7')
      
         let persons=data.results
         setallperson(persons)
    }
    useEffect(() => {
      getmovie();
      gettv();
      getPerson();
    }, [])
    
    return (
        <AppContext.Provider value={{ allmovies:allmovies,alltvs:alltvs,allperson:allperson }}>
        {props.children}
        </ AppContext.Provider>
   
  )
}
