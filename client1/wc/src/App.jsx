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


import axios from 'axios';
import Delete from './components/Delete';
import Schedule from './components/schedule';


function App() {
       useEffect(()=>{
        axios.get("http://localhost:8000/home")
        
        .then(res=>console.log(res.data))
        .catch((error)=>console.log(error));
       },[]);
       
      // const [schedules,Setschedules]=useEffect("");
      const schedules=[1,2,3];
      const length=schedules.length
      

  return (
    <>
    <img src={primeImage} style={{ position: 'absolute',
          left: '0px',         
          top: '2px',          
          width: '200px',       
          height: 'auto'  }} />

     {/* <Container> */}
       {length===0?<Noschedule/>:<Schedule/>}
     {/* </Container> */}
    
    
     <Modalwc/>
     
     

    </>
  )
}

export default App
