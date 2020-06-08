import React from 'react';
import logo from './logo.svg';
import Routes from './Routes';

import {BrowserRouter, Route, Switch } from 'react-router-dom';
import {Bootstrap, Grid, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Slider from 'infinite-react-carousel';
import './Home.css';
import './css/bootstrap.css';
import './css/font-awesome.min.css';
import './css/nice-select.css';
import './css/owl.carousel.min.css';
import './css/owl.theme.default.min.css';
import './css/unslider.css';
import './css/responsive.css';

import { useMediaQuery } from 'react-responsive'



import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import 'react-multi-carousel/lib/styles.css';

import {Bumbotron, Button, Carousel } from 'react-bootstrap'

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
