import React from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Project1 from './components/Project1';
import Header from './components/Header';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Login/>
      <Header/>
      <Welcome/>
      <Project1/>
      <Home/>
    </div>
  );
}

export default App;
