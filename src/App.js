import React from 'react';
import logo from './logo.svg';
import Routes from './Routes';
import './App.css';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <div className="App">
    <BrowserRouter>
    <Routes />
    </BrowserRouter>
    </div>
  );
}

export default App;
