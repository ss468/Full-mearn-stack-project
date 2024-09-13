import { useState } from "react";
import "./login.css";
import { NavLink } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
    const [email,Setemail]=useState("");
    console.log(email);


    const sendotp=(e)=>{
        e.preventDefault();

        if (email === ""){
            toast.error("ENTER YOUR EMAIL!!!!");
        }else if(!email.includes("@")){
            toast.error("ENTER VALID EMAIL !!!!");
        }else{
        
            toast.success("LOGIN SUCCESSFULL");
        }
    }
  return (
    <>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Welcome Back, Log In</h1>
            <p>Hi, we are you glad you are back. Please login.</p>
          </div>
          <form>
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id=""
                onChange={(e)=>Setemail(e.target.value)}
                placeholder="Enter Your Email Address"
              />
            </div>
            <button className="btn" onClick={sendotp} >
              Login
              
            </button>
            <p>donot have account??? <NavLink to="/signup">SIGN UP</NavLink> </p>
                
           
            
          </form>
        </div>
        <ToastContainer/>
      </section>
    </>
  );
};
export default Login;
