import React from 'react'

export default function Login() {
  return (
    <div className="login-container">
      <div className="left">
        <div className="about-text">
          <h1>Current <span className="span-info">Stack</span></h1>
          {/* <h2 className="title">Full Stack</h2> */}
          {/* <hr className="line-break"/> */}
          <div className="stack">
            <ul>
              <li>Postgres</li>
              <li>React</li>
              <li>Express</li>
              <li>Node</li>
            </ul>
          </div>
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
        <div className="about-info">
          <p className="login-text">About <span className="span-login">Jason Towner</span></p>
          <p className="about-bio">Hey my name is Jason Towner I'm a 26 year old Full Stack web developer. <br/>I made the switch to programing when I was 24 after working in restaurants for 13 yep started bussing table at 11.  I feel in love with coding when I first saw that I could build something that would alow people from all over the world to use something I was able to build.</p>
        </div>
      </div>
    </div>
  )
}
