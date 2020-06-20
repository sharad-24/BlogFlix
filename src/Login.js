import  React,{Component} from 'react';
import './Home.css';
import './css/bootstrap.css';
import './css/font-awesome.min.css';

import './css/owl.theme.default.min.css';
import './css/responsive.css';



import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import 'react-multi-carousel/lib/styles.css';

import {Bumbotron, Button, Carousel } from 'react-bootstrap'
import Background from './img/creative-classic-blue-screensaver_23-2148430319.jpg';

var sectionStyle = {
  width: "100%",
  height: "812px",
  backgroundImage: "url(${ Background })"
};

class Login extends Component{

        
        
        render(){
        return(

<div className="Login">




    <body className="login1">



 <section style={ sectionStyle }>

      <div className="container-fluid grid-container-new-login">
    <div className="row">
    <div className="col-md-4">
    </div>
      <div className="col-md-4 grid-item-new-login">

       <div className="col-md-12">

     <h6 className="login2">BLOGFLIX</h6>
       </div> 
<div className="col-md-12">
     <h6 className="login3"> Log In</h6>
   </div> 
    
       <form>
  <div className="form-group">
   
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    
  </div>
  <div className="form-group">
    
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
  
    <button className="join-login" type="button">Continue</button>
</form>
        </div>
          <div className="col-md-4">
    </div>

      </div>
      
      </div>
   
      </section>
   














</body>

    

</div>



        );
                
            
      }
    }
        
    

    

export default Login;