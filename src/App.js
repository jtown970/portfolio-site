import React from 'react';
import './App.css';
import routes from './routes.js'
import Welcome from './components/Welcome';
import Project1 from './components/ProjectOne';
import Header from './components/Header';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Login/>
      {routes}
      {/* <Header/> */}
      {/* <Welcome/> */}
      {/* <Project1/> */}
      {/* <Home/> */}
    </div>
  );
}

export default App;
