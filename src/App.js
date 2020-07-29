import React, { useEffect } from "react"
import './App.css';
import Routes from './routes.js'
// import Welcome from './components/Welcome';
// import Project1 from './components/ProjectOne';
import Header from './components/Header';
import Login from './components/Login';
import axios from "axios"
import { loginUser } from "./ducks/userReducer.js"
import { connect } from "react-redux"

function App(props) {
  useEffect(() => {
    axios
      .get("/auth/user")
      .then((res) => {
        props.loginUser(res.data)
      })
      .catch((err) => console.log(err))
  }, [props])

  return (
    <div className="App">
      {/* <Login/> */}
      <Header/>
      <Routes/>
      {/* <Welcome/> */}
      {/* <Project1/> */}
      {/* <Home/> */}
    </div>
  );
}

const mapStateToProps = (reduxState) => reduxState

export default connect(mapStateToProps, { loginUser })(App)
