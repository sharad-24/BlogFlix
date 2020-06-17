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
import Sharad from './Nav';



import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import 'react-multi-carousel/lib/styles.css';

import {Bumbotron, Button, Carousel } from 'react-bootstrap'
class Profile extends Component{

        
        
        render(){
        return(

<div className="Profile">

<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
   <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Front page</title>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700,800,900" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700,900" rel="stylesheet" />
    <link rel="stylesheet" href="css/bootstrap.css" />
    <link rel="stylesheet" href="css/font-awesome.min.css" />
    <link rel="stylesheet" href="css/owl.carousel.min.css" />
    <link rel="stylesheet" href="css/owl.theme.default.min.css" />
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="responsive.css" />

<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
   
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />




</head>


<body className="colour">

<section>


 <div className="topnav">
 <div className="flex-container">
  
 
 
   <div><a href="#">Categories</a> </div>


   <div><a href="/Home">Home</a></div>
   <div><a href="/Edit">Log in</a></div>
   <div><a href="/About" className="active">About</a></div>

 
   
     <div><a href="/Blog" >BLOG</a></div>
                               <div> <a href="#">Contact</a></div>
                               <div> <a href="#" className="fa fa-search"></a> </div>
                             
 
  <a href="javascript:void(0);" className="icon" onclick="Sharad()"><i className="fa fa-bars"></i></a>
  </div>
</div>

</section>

        <div className="container-fluid">
        <div className="row">
<div className="col-xs-12 col-md-4 profile">
 <div className="thumbnail_container">
      <div className="thumbnail">
    <img src={require('./img/389-3894980_photo-kermit-the-frog-transparent.jfif')} className="" />
    </div>
    </div>
    <h5 className="sharad-profile">LOREM IPSUM</h5>
    <p className="text-p">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  <i className="fa fa-instagram sharad2-profile"></i>
<i className="fa fa-linkedin sharad2-profile"></i>
<i className="fa fa-github sharad2-profile"></i>
<i className="fa fa-facebook sharad2-profile"></i>

  </div>

  <div className="col-xs-12 col-md-8">
    <h5 className="sharad3-profile">MY BLOGS</h5>
    <div className="grid-container-profile">
      <div className="grid-item-profile">

        <img src={require('./img/389-3894980_photo-kermit-the-frog-transparent.jfif')} align="right" className="img2-profile" />
       
     

        <h6>Lorem ipsum dolor sit amet, consectetur adipisicing</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
        <button className="b2-profile">Read</button>

      </div>

      <div className="grid-item-profile">
        
        <img src={require('./img/389-3894980_photo-kermit-the-frog-transparent.jfif')} align="right" className="img2-profile" />
      
        
        <h6>Lorem ipsum dolor sit amet, consectetur adipisicing</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
        <button className="b2-profile">Read</button>

      </div>

      <div className="grid-item-profile">
      
        <img src={require('./img/389-3894980_photo-kermit-the-frog-transparent.jfif')} align="right" className="img2-profile" />
       
        <h6>Lorem ipsum dolor sit amet, consectetur adipisicing</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
        <button className="b2-profile">Read</button>

      </div>
  </div>

</div>
</div>
</div>

<section>

    <div className="container">
       


      <div className="row footer2">
    
  <div  className= "col-md-6 footer5">
  
  
 

</div>

   
</div>
</div>
</section>




<hr className=".col-xs-6 mx-auto pt-0.9 footer1"/>
<br />
<br/>

<section>
  <br />
    <div className="container-fluid">
       


      <div className="row align-items-center footer3">
    
  <div  className= "col-md-6 footer5">
    <h className="footer6">
     Terms of Use  |  Privacy Policy  |  Cookies
   </h>
  
 

</div>
<div className="col-md-3 col-md-offset-3">
  <a href="https://www.facebook.com/upesacm/" className="fa fa-facebook"></a>
<a href="https://twitter.com/upesacm?lang=en" className="fa fa-twitter"></a>
<a href="https://www.instagram.com/upesacm/?hl=en" className="fa fa-instagram"></a>
<a href="https://www.linkedin.com/company/upesacm/" className="fa fa-linkedin"></a>
</div>
   
</div>
</div>
</section>
<br />

<section>
  <div className="container-fluid">
       


        <div className="row  align-items-center footer3">
    <div className=" col-md-12 footer5">
    <h className="footer6">
     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure  dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur . Excepteur sint occaecat cupidatat non  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
   </h>
  </div>
</div>
  </div>
</section>
<br />
<br />


</body>

        </html>

</div>



        );
                
            
      }
    }
        
    

    

export default Profile;
