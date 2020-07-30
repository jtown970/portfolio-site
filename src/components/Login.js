import React, { useState } from "react"
import axios from "axios"
import { registerUser, loginUser } from "../ducks/userReducer"
import { connect } from "react-redux"

function Login(props) {
  const [email, setEmail] = useState("")
  const [full_name, setFullname] = useState("")
  const [reg, setReg] = useState(false)
  // const [btnText, setBtnText] = useState('Login')

  function toggleReg(){
    setReg(!reg)
    // setBtnText('Register')
  }


  function register() {
    axios
      .post("/auth/register", { full_name, email})
      .then((res) => {
        props.registerUser(res.data)

        props.history.push("/welcome")
      })
      .catch((err) => {
        alert("Could not register.")
      })
  }

  function login() {
    axios
      .post("/auth/login", { email })
      .then((res) => {
        props.loginUser(res.data);
        props.history.push("/welcome");
      })
      .catch((err) => {
        alert("Username or password incorrect");
      });
  }

  return (
    <div className="login-container">
      <div className="left">
        <div className="about-text">
          <h1>Jason Towner</h1>
          <h2 className="title">Full Stack Developer</h2>
          {/* <hr className="line-break"/> */}
        </div> 
        <div className="letter-j">
          <svg width="145" height="174" viewBox="0 0 145 174" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="145" height="30" fill="#484A4D"/>
            <rect x="20" y="143" width="67" height="30" fill="#484A4D"/>
            <path d="M56.8731 143.365L56 29.2296L85.9991 29.0001L86.8722 143.135L56.8731 143.365Z" fill="#484A4D"/>
            <path d="M0.873108 173.365L0.388012 109.952L30.3871 109.722L30.8722 173.135L0.873108 173.365Z" fill="#484A4D"/>
          </svg>
        </div>
      </div>
      
      <div className="right">
        <div className="letter-t">
          <svg width="160" height="178" viewBox="0 0 160 178" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M65.1357 177.698L64 29.2296L93.9991 29.0001L95.1349 177.468L65.1357 177.698Z" fill="#1E90FF"/>
            <path d="M0 0H160V30H0V0Z" fill="#1E90FF"/>
          </svg>
        </div>
        <div className="login-info">
          {reg === false ? (
            <p className="login-text">Enter email to <span className="span-login">Login</span></p>

          ) : <p className="login-text">Enter below to <span className="span-login">Register</span></p> }
          {reg === true ? (
          <input 
            className="login-email" 
            placeholder="Name" 
            type='text'
            value={full_name}
            onChange={(e) => setFullname(e.target.value)}
          /> 
          ) : null}
          <input 
            className="login-email" 
            placeholder="email"
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {reg === false ? (
            <div>
              <button className="login-btn" onClick={() => login()}>Login</button>
              <span className="register-btn-span">
                <p onClick={() => toggleReg()} className="register-btn">Register</p>
              </span> 
            </div>
          ) : 
          <div>
          <button className="login-btn" onClick={() => register()}>Register</button>
            <span className="register-btn-span">
              <p onClick={() => toggleReg()} className="reg-btn register-btn">Login</p>
            </span> 
          </div>
          }
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (reduxState) => reduxState

const mapDispatchToProps = { registerUser, loginUser }

export default connect(mapStateToProps, mapDispatchToProps)(Login)
