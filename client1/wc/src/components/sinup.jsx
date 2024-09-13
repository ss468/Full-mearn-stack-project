import { useState } from "react";
import "./login.css";
import { NavLink } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Signup = () => {
const [passshow,Setpassshow]=useState(false);
const [inputdata,Setinputdata]=useState({
    "fname":"",
    "passshow":"",
    "email":""
});

const handlechange=(e)=>{
  const {name,value}=e.target;
  Setinputdata({...inputdata,[name]:value})
}



const handleSubmit = (e)=>{
    e.preventDefault();
    const {fname,email,password} = inputdata;

    if(fname === ""){
      toast.error("Enter Your Name")
    }else if(email === ""){
      toast.error("Enter Your Email")
    }else if(!email.includes("@")){
      toast.error("Enter Valid Email")
    }else if(password === ""){
      toast.error("Enter Your Password")
    }else if(password.length < 6){
      toast.error("password length minimum 6 character")
    }else{
      toast.success("SIGNUP SUCCESSFULL!!!!");
    }
};
  return (
    <>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Sign Up</h1>
            <p style={{ textAlign: "center" }}>
              We are glad that you will be using Project Cloud to manage your
              tasks! We hope that you will get like it.
            </p>
          </div>
          <form>
            <div className="form_input">
              <label htmlFor="fname">Name</label>
              <input
                type="text"
                name="fname"
                id=""
                onChange={handlechange}
                placeholder="Enter Your Name"
              />
            </div>
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                onChange={handlechange}
                id=""
                placeholder="Enter Your Email Address"
              />
            </div>
            <div className="form_input">
              <label htmlFor="password">Password</label>
              <div className='two'>
              <input type= {!passshow ? "password":"text"} name="password" onChange={handlechange} id=""    placeholder='Enter Your password' />
              <div className='showpass' onClick={()=>Setpassshow(!passshow)} >
              {!passshow ? "show":"hide"}
              </div>
              </div>
            </div>
            <button className="btn" onClick={handleSubmit}>SIGNUP</button>
            <p>
              already have account??? <NavLink to="/login">LOGIN</NavLink>{" "}
            </p>
          </form>
        </div>
        <ToastContainer />
      </section>
    </>
  );
};
export default Signup;
