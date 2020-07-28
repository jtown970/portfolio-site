import React from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Header from './components/Header';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Login/>
      <Header/>
      <Welcome/>
      <Home/>
    </div>
  );
}

export default App;
