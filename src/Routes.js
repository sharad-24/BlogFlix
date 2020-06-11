import React from 'react';
import Blog from './Blog';
import Home from './Home';
import Profile from './Profile';
import Edit from './Edit';


import {BrowserRouter, Route, Switch } from 'react-router-dom';


function Routes() {

        return (

        <BrowserRouter>
              <Switch>
        <Route exact path="/Home" component= {Home} />
        <Route exact path="/Blog" component= {Blog} />
        <Route exact path="/Profile" component= {Profile} />
        <Route exact path="/Edit" component= {Edit} />
        </Switch>
 
        </BrowserRouter>


        	);
}
export default Routes;