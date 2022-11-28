import React, { useEffect, useState } from 'react'
import { createHashRouter, RouterProvider} from "react-router-dom";
import Home from './Component/Home/Home';
import Register from './Component/Register/Register';
import Login from './Component/Login/Login';
import Main from './Component/Main/Main';
import Tv from './Component/Tv/Tv'
import Itemdetail from './Component/ItemDetails/Itemdetail';
import jwtDecode from 'jwt-decode';
import Profile from './Component/Profile/Profile';
import Movie from './Component/Movie/Movie';
import People from './Component/People/People'
import NotFound from './Component/NotFound/NotFound';
export default function App() {
const [userData, setuserData] = useState(null);
function ProtectedRoute(props){
  if(userData===null){
     return <Login/>
  }
  else{
    return <>
     {props.children}
    </>
  }
}
  function getloggeduser() {

    let incodedata=localStorage.getItem("token");
    let decodeddata=jwtDecode(incodedata);
    setuserData(decodeddata);
  }
console.log(userData);


useEffect(() => {
  checkReload();
}, [userData])
  function checkReload() {
    if(localStorage.getItem('token')!=null && userData==null){
      getloggeduser();
    }
  }
 
  const router=createHashRouter([{path:'' , element:<Main setuserData={setuserData} userData={userData}/>,
  children:[
    {path:"",element:   <ProtectedRoute> <Home/> </ProtectedRoute>    },
    {path:"home",element:   <ProtectedRoute> <Home/> </ProtectedRoute>    },
    {path:"movie",element:   <ProtectedRoute> <Movie/> </ProtectedRoute>    },
    {path:"tv",element:   <ProtectedRoute><Tv/> </ProtectedRoute>    },
    {path:"People",element:   <ProtectedRoute><People/> </ProtectedRoute>    },
    {path:"profile",element:  <Profile userData={userData}/>    },
    {path:"register",element:<Register/>},
    {path:"login",element:<Login getloggeduser={getloggeduser}/>},
    {path:'details', element:<Itemdetail/> ,children:[
      {path:':media' ,children:[{path:':id'}]}
    ]},
    {path:'*',element:<NotFound/>}
  ]}])

  return (
   <>
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
   </>
  )
}
