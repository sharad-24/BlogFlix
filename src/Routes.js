import React from 'react';
import Blog from './Blog';
import Home from './Home';
import Profile from './Profile';

import {BrowserRouter, Route, Switch } from 'react-router-dom';


function Routes() {

        return (

        <BrowserRouter>
              <Switch>
        <Route exact path="/Home" component= {Home} />
        <Route exact path="/Blog" component= {Blog} />
        <Route exact path="/Profile" component= {Profile} />
        </Switch>
 
        </BrowserRouter>


        	);
}
export default Routes;