import React from 'react';
import Blog from './Blog';
import Home from './Home';
import Profile from './Profile';
import Edit from './Edit';
import New from './New';
import Login from './Login';
import Test from './Test';
import ContentBlog from './ContentBlog';
import Profile2 from './Profile2';


import {BrowserRouter, Route, Switch } from 'react-router-dom';


function Routes() {

        return (

        <BrowserRouter>
              <Switch>
        <Route exact path="/Home" component= {Home} />
        <Route exact path="/Blog" component= {Blog} />
        <Route exact path="/Profile" component= {Profile} />
        <Route exact path="/Edit" component= {Edit} />
        <Route exact path="/New" component= {New} />
        <Route exact path="/Login" component= {Login} />
        
        <Route exact path="/ContentBlog" component= {ContentBlog} />
        <Route exact path="/Profile2" component= {Profile2} />
        </Switch>
 
        </BrowserRouter>


        	);
}
export default Routes;