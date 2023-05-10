import React, { useState } from "react";
import Cookies from "universal-cookie";
import axios from "axios";

import Signimage from "../assets/signup.jpg";
import Signup from '../lotti/Signup'
import SignIn from '../lotti/SignIn'

const initialState={
  fullName:'',
  username:'',
  phoneNumber:'',
  avatarURL:'',
  password:'',
  confirmPassword:'',

}
const Auth = () => {
  const[form,setForm]=useState(initialState);
  const [isSignup, setIsSignup] = useState(true);

  const handlechange=(e)=>{
    setForm({...form, [e.target.name]: e.target.value});
    // console.log(form);
  }
  const switchmode=()=>{
   setIsSignup((prevIsSignup)=>!prevIsSignup)
  }

  const handlesubmit=(e)=>{
    e.preventDefault();
    console.log(form)
  }
  return (
    <>

  
    <div className="auth__form-container">
    <div className="he" style={{
      display:"inline",
      position:"fixed",
      display:"flex",
     alignItems:"center",
     justifyContent:"center",
     alignContent:"center",
     background:"#000f14",
     width:"100%"
    }}>

    <h3
    style={{color:"white",fontFamily:"monospace",fontWeight:"bolder",fontSize:"20px"
    }}
    >MediChat</h3>
    </div>
      <div className="auth__form-container_fields">
        <div className="auth__form-container_fields-content">
          <p>{isSignup ? "Sign Up" : "Sign In"}</p>
          <form action="" onSubmit={handlesubmit}>
            {
              isSignup && (
                <>
                  <div className="auth__form-container_fields-content_input">
                    <label htmlFor="fullName">Full Name</label>
                    <input type="text"
                    name="fullName"
                    placeholder="Full Name"
                    onChange={handlechange}
                    required
                    style={{color:"white"}}
                    />
                  </div>
                </>
              )
            }
            <div className="auth__form-container_fields-content_input">
                    <label htmlFor="username">Username</label>
                    <input type="text"
                    name="username"
                    placeholder="Username"
                    onChange={handlechange}
                    required
                    style={{color:"white"}}
                    />
                  </div>
                  {
              isSignup && (
                <>
                  <div className="auth__form-container_fields-content_input">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input type="text"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    onChange={handlechange}
                    required
                    style={{color:"white"}}
                    />
                  </div>
                </>
              )
            }
            {
              isSignup && (
                <>
                  <div className="auth__form-container_fields-content_input">
                    <label htmlFor="avatarURL">Avatar URL</label>
                    <input type="text"
                    name="avatarURL"
                    placeholder="Avatar URL"
                    onChange={handlechange}
                    required
                    style={{color:"white"}}
                    />
                  </div>
                </>
              )
            }
            <div className="auth__form-container_fields-content_input">
                    <label htmlFor="password">Password</label>
                    <input type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handlechange}
                    required
                    style={{color:"white"}}
                    />
                  </div>
                  {
              isSignup && (
                <>
                  <div className="auth__form-container_fields-content_input">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    onChange={handlechange}
                    required
                    style={{color:"white"}}
                    />
                  </div>
                </>
              )
            }
            <div className="auth__form-container_fields-content_button">
              <button>
                {
                  isSignup? "Sign Up":"Sign In"
                }
              </button>
            </div>
          </form>
          <div className="auth__form-container_fields-account">
            <p style={{color:'white'}}>
              {
                isSignup?'Already have an account?':"Dont't have an account?"
              }
              <span onClick={switchmode} style={{color:"#7fadfc",marginLeft:"5px",padding:"7px",border:".5px solid #7fadfc", borderRadius:"6px"}}>
                {
                  isSignup?'Sign In':'Sign Up'
                }
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="auth__form-container_image" style={{alignItems:"center",marginLeft:"00px",justifyContent:"center"}}>
        {/* <img src={Signimage} alt="sign in" /> */}
        <span>

        {
          isSignup ? <Signup/>:<SignIn/>
        }
        </span>
      </div>
    </div>
    </>
  );
};

export default Auth;
