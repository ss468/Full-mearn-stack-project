import Noschedule from "./noschedule";
import Schedule from "./schedule";
import Modalwc from "./modal";


import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./home.css"



import { useState } from "react";
import axios from "axios";

const Home = () => {

  const [numberofschedules,Setnumberofschedules]=useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:8000/home`)
      .then((response) => {
        Setnumberofschedules(response.data.allwc.length);
        
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        alert("Error in getting data");
        
      });
  }, [numberofschedules]);
  const length=numberofschedules;

  return (
    <>
    <div className="login">

      
      <NavLink to="/login"><button type="button" className="btn btn-primary">LOGIN</button></NavLink>
      <NavLink to="/signup"><button type="button" className="btn btn-primary">SIGNUP</button></NavLink>
      
    </div>
      
      {length === 0 ? <Noschedule /> : <Schedule />}

      <Modalwc />
    </>
  );
};
export default Home;
