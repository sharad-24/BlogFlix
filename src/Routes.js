import React from 'react';
import Blog from './component/Blog';
import Home from './Home';

import {BrowserRouter, Route, Switch } from 'react-router-dom';


function Routes() {

        return (

        <BrowserRouter>
              <Switch>
        <Route exact path="/Home" component= {Home} />
        <Route exact path="/Blog" component= {Blog} />
        </Switch>
 
        </BrowserRouter>


        	);
}
export default Routes;