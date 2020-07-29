import React, { useEffect } from "react"
import './App.css';
import Routes from './routes.js'
import Header from './components/Header';
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
      <Header/>
      <Routes/>
    </div>
  );
}

const mapStateToProps = (reduxState) => reduxState

export default connect(mapStateToProps, { loginUser })(App)
