import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import Landing from "./components/Landing"
import Home from "./components/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { useStore } from "react-redux"

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Landing} />
      <ProtectedRoute path='/Home' component={Home} />
      {/* <ProtectedRoute path='/Popup/:post_id' component={Header} />
      <ProtectedRoute path='/Profile' component={Profile} /> */}
    </Switch>
  )
}

const ProtectedRoute = (props) => {
  const {
    user: { user },
  } = useStore().getState()

  if (user.email === "") {
    return <Redirect to='/' />
  } else {
    return <Route {...props} />
  }
}

export default Routes