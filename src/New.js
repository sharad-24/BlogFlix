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
import Test from './Test';

import Sharad from './Nav';

import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import 'react-multi-carousel/lib/styles.css';

import {Bumbotron, Button, Carousel } from 'react-bootstrap'
class New extends Component{

        
        
        render(){
        return(

<div className="New main colour">

 
    <body className="colour">
<section>


 <div className="topnav">
 <div className="flex-container">
  
 
 
   <div><a href="#">Categories</a> </div>


   <div><a href="/Home">Home</a></div>
   <div><a href="/Profile">About</a></div>
   <div><a href="/Edit" className="active">Log in</a></div>

 
   
     <div><a href="/Blog" >BLOG</a></div>
                               <div> <a href="#">Contact</a></div>
                               <div> <a href="#" className="fa fa-search"></a> </div>
                             
 
  <a href="javascript:void(0);" className="icon" onclick="Sharad()"><i className="fa fa-bars"></i></a>
  </div>
</div>

</section>


<div className="container-fluid">
<div className="row">

<div className="col-md-12">

<h1 className="blog-test"> CREATE NEW BLOG </h1>

</div>
</div>
</div>
<div className="container-fluid">
<div className="row">

<div className="col-md-1">
<p className="new1" > Add a title </p>
</div>
<div className="col-md-4">
<div className="new1">
<Test/>

</div>
</div>
</div>
</div>

<div className="container-fluid">
<div className="row">

<div className="col-md-1">
<p className="new1" > Add a title </p>
</div>
<div className="col-md-4">
<div className="new1">
<Test/>

</div>
</div>
</div>
</div>

    <div className="container-fluid grid-container-new">
    <div className="row">
    <div className="col-md-1">
    </div>
      <div className="col-md-10 grid-item-new">

       
     

        <h6>Lorem ipsum dolor sit amet, consectetur adipisicing</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
        </div>

      </div>
       <button className="join-new" type="button">CREATE</button>
      </div>
   


<hr className=".col-xs-6 mx-auto pt-0.9 footer1"/>
<br />
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
  <br />
  <br />
</section>


</body>



</div>



        );
                
            
      }
    }
        
    

    

export default New;