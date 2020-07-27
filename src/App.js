import React from 'react';
import './App.css';
import Landing from './components/Landing';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <Landing/>
      <Home/>
    </div>
  );
}

export default App;
