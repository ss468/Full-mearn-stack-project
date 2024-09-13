import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Addbutton from './components/Addbutton';
import 'bootstrap/dist/css/bootstrap.min.css';
import Noschedule from './components/noschedule';
import Scheduletable from './components/scheduletable';
import Modalwc from './components/modal';
import Container from './components/container';

import "./App.css"
import primeImage from './assets/prime.png';

import Home from './components/home';
import Otp from './components/otp';
import Login from './components/login';
import Signup from './components/sinup';
import axios from 'axios';
import Delete from './components/Delete';
import Schedule from './components/schedule';
import { Route,Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';


function App() {
       useEffect(()=>{
        axios.get("http://localhost:8000/home")
        
        .then(res=>console.log(res.data))
        .catch((error)=>console.log(error));
       },[]);
       
      // const [schedules,Setschedules]=useEffect("");
      // const schedules=[1,2,3];
      // const length=schedules.length
      

  return (
    <>
     


    <img src={primeImage} style={{ position: 'absolute',
          left: '0px',         
          top: '2px',          
          width: '200px',       
          height: 'auto'  }} />

    
       {/* {length===0?<Noschedule/>:<Schedule/>}
    
    
     <Modalwc/> */}
     <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/otp' element={<Otp/>}/>
      <Route path='/home' element={<Home/>}/>
     </Routes>
     
     

    </>
  )
}

export default App
