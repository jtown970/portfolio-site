import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import Login from "./components/Login"
import Welcome from "./components/Welcome"
import project1 from "./components/ProjectOne"
import project2 from "./components/ProjectTwo"
import { useStore } from "react-redux"

const Routes = () => {
  return ( 
    <Switch>
      <Route exact path='/' component={Login} />
      <ProtectedRoute path='/welcome' component={Welcome} />
      <ProtectedRoute path='/project/1' component={project1} />
      <ProtectedRoute path='/project/2' component={project2} />
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