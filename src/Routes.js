import React from 'react';
import Blog from './Blog';
import Home from './Home';
import Profile from './Profile';
import Edit from './Edit';
import New from './New';
import Login from './Login';
import Profile2 from './Profile2';
import Comment from './Comment';
import AllBlog from './AllBlog';


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
        <Route exact path="/Profile2" component= {Profile2} />
        <Route exact path="/Comment" component= {Comment} />
        <Route exact path="/AllBlog" component= {AllBlog} />
        </Switch>
 
        </BrowserRouter>


        	);
}
export default Routes;