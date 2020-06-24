 import  React,{Component} from 'react';
import Slider from 'infinite-react-carousel';
import './Home.css';
import './css/bootstrap.css';
import './css/font-awesome.min.css';
import './css/nice-select.css';
import './css/owl.carousel.min.css';
import './css/owl.theme.default.min.css';
import './css/unslider.css';
import './css/responsive.css';
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import 'react-multi-carousel/lib/styles.css';

import {Bumbotron, Button, Carousel } from 'react-bootstrap'
class Profile extends Component{

        
        
        render(){
        return(

<div className="Profile">








 <div className="grid-item-profile">

        <img src={require('./img/389-3894980_photo-kermit-the-frog-transparent.jfif')} align="right" className="img2-profile" />
       
     

        <h6>Lorem ipsum dolor sit amet, consectetur adipisicing</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
        <button className="b2-profile">Read</button>

      </div>

      </div>



        );
                
            
      }
    }
        
    

    

export default Profile;