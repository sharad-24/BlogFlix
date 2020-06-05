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
class Home extends Component{

        
        
        render(){
        return(

<div className="Home">

<html lang="en" className="colour">
 <meta charset="UTF-8" />
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




    <div className="wrapper">
        <header className="header">
            <div className="container">
                <div className="row">
                
                    <div className="col-md-12">
                        <div className="menu">
                            <ul>
                                <li className=""><a href="#">Log in</a></li>
                                  <li><a href="/Home">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Categories</a></li>
                                <li><a href="/Blog" >BLOG</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#"><i className="fa fa-search"></i></a></li>    
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        </div>
        
<Carousel>
  <Carousel.Item>
    <img
      className="slider-container "
      src={require('./img/Main image.png')}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="slider-container "
    src={require('./img/Main image.png')}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="slider-container "
      src={require('./img/Main image.png')}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<br />
<br />

<section>

<div className="grid-container_featured">
    <div className="grid-item1">FEATURED</div>
    <div className="grid-item colour2">

        <img src={require('./img/4b18374e62fe836fd9d8c5e899a49e60.jpg')} height="200px" width="150px" align="center" />
          
        <h4>Lorem&nbsp;ipsum</h4>

        <p>
          
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmor

        </p>
<button>
        <a href="/Blog" style={{color: "#FFFFFF"}} >Start</a>
</button>

    </div>
    <div className="grid-item colour2">


        <img src={require('./img/4b18374e62fe836fd9d8c5e899a49e60.jpg')} height="200px" width="150px" align="center" />
          
          <h4>Lorem&nbsp;ipsum</h4>

          <p>
          
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmor

          </p>

         <button>
        <a href="/Blog" style={{color: "#FFFFFF"}} >Start</a>
</button>


    </div>
    <div className=" grid-item grid-item3 colour2">

        <img src={require('./img/4b18374e62fe836fd9d8c5e899a49e60.jpg')} height="550px" width="150px" align="center" />
          
          <h4>Lorem&nbsp;ipsum</h4>

          <p>
          
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmor

          </p>

          <button>
        <a href="/Blog" style={{color: "#FFFFFF"}} >Start</a>
</button>

    </div>
    <div className="grid-item colour2">

        <img src={require('./img/4b18374e62fe836fd9d8c5e899a49e60.jpg')} height="200px" width="150px" align="center" />

          
          <h4>Lorem&nbsp;ipsum</h4>

          <p>
          
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmor

          </p>

   <button>
        <a href="/Blog" style={{color: "#FFFFFF"}} >Start</a>
</button>

    </div>
    <div className="grid-item colour2">
      
        <img src={require('./img/4b18374e62fe836fd9d8c5e899a49e60.jpg')} height="200px" width="150px" align="center" />
          
          <h4>Lorem&nbsp;ipsum</h4>

          <p>
          
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmor

          </p>

         <button>
        <a href="/Blog" style={{color: "#FFFFFF"}} >Start</a>
</button>

    </div>
    </div>



<div className="grid-container_latest">
  <div className="grid-item_latest1">LATEST</div>

  <div className="grid-item_latest colour2">

    <img src={require('./img/4b18374e62fe836fd9d8c5e899a49e60.jpg')} height="70px" width="150px" align="center" />
    
    <h4 >Lorem&nbsp;ipsum</h4>

          <p>
          
          Lorem ipsum dolor sit amet

          </p>

  </div>
  <div className="grid-item_latest colour2">

    <img src={require('./img/4b18374e62fe836fd9d8c5e899a49e60.jpg')} height="70px" width="150px" align="center" />
    
    <h4>Lorem&nbsp;ipsum</h4>

          <p>
          
          Lorem ipsum dolor sit amet

          </p>

  </div>
  <div className="grid-item_latest colour2">

    <img src={require('./img/4b18374e62fe836fd9d8c5e899a49e60.jpg')} height="70px" width="150px" align="center" />

    <h4>Lorem&nbsp;ipsum</h4>

          <p>
          
          Lorem ipsum dolor sit amet
          </p>
    

  </div>
  <div className="grid-item_latest colour2">

    <img src={require('./img/4b18374e62fe836fd9d8c5e899a49e60.jpg')} height="70px" width="150px" align="center" />

    <h4>Lorem&nbsp;ipsum</h4>

          <p>
          
          Lorem ipsum dolor sit amet

          </p>
    

  </div>

</div>





</section>


<section>

<div className="grid-container5 colour3">

    <div className="grid-item15 grid-item5">Popular Categories</div>

    <div className="grid-item5 grid33">
      

      <img src={require('./img/sydney-best-GETTY.webp')} align="left"/>

      <h3>lorem ipsum</h3>

      <h6>
        
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt

      </h6>

      <button className="button5">
        
        lorem

      </button>



    </div>

    <div className="grid-item25 grid-item5 grid33">
      

      <img src={require('./img/sydney-best-GETTY.webp')} align="left" />

      <h3>lorem ipsum</h3>

      <h6>
        
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt

      </h6>


      <button className="button5">
        
        lorem

      </button>


    </div>

    <div className="grid-item35 grid-item5 grid33">
      

      <img src={require('./img/sydney-best-GETTY.webp')} align="left" />

      <h3>lorem ipsum</h3>

      <h6>
        
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt

      </h6>

      <button className="button5">
        
        lorem

      </button>



    </div>

  </div>
</section>

<section className="joinus">
    <div className="row cont h-100">
        <div className="col-md-7 my-auto">
            <p className="headin">Join Our Community</p>
            <p className="head_cont">
                Lorem ipsum dolor sit amet, consectetur adipiscing  elit,
                sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua. 
                Ut enim ad minim veniam, quis  nostrud exercitation ullamco laboris nisi ut 
                aliquip ex  ea commodo consequat.
            </p>
        </div>
        <div className="col-md-4 my-auto">
            <form className="Login">
                <input className="box1" type="text" name="" placeholder="Name" /><br />
                <input className="box1" type="text" name="" placeholder="Email" /><br />
                <button className="join" type="button">Join</button>
            </form>
        </div>
    </div>
</section>

<section>
 <div className="Crible_block">
            
            <div className="row">
                <div className="col-md-4 pad_0 colour">
                                <img className="image2" src={require('./img/4-512.png')} />
                    <p className="Crible_para">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Repellat perspiciatis magnam quod delectus quisquam porro ullam veritatis ea aperiam ab!
                    </p>
                   <h1 className="Crible_head">  <img className="image" src={require('./img/circle-cropped.png')} /> Lorem ipsum
                   </h1>
                </div>
                <div className="col-md-4 pad_0 colour">
                    
                   <img className="image2" src={require('./img/4-512.png')} />
                    <p className="Crible_para">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Repellat perspiciatis magnam quod delectus quisquam porro ullam veritatis ea aperiam ab!
                    </p>
                     <h1 className="Crible_head">  <img className="image" src={require('./img/circle-cropped.png')} /> Lorem ipsum
                     </h1>
                </div>
                <div className="col-md-4 pad_0 colour">
                    <img className="image2" src={require('./img/4-512.png')} />
                    
                    <p className="Crible_para">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Repellat perspiciatis magnam quod delectus quisquam porro ullam veritatis ea aperiam ab!
                    </p> 
                    <h1 className="Crible_head">  <img className="image" src={require('./img/circle-cropped.png')} /> Lorem ipsum
                   
                    </h1>
                   
                </div>
            </div>
        </div>
        </section>


<br />






<hr className=".col-xs-6 mx-auto pt-0.9 footer1"/>


<section>
  <br />
    <div className="container">
       


      <div className="row align-items-center footer2">
    
  <div  className= "col-md-6 footer5">
    <h className="footer3 footer6">
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

<section>
  <div className="container footer4">
       


        <div className="row footer3">
    <div className="footer5">
    <h className="footer6">
     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure  dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur . Excepteur sint occaecat cupidatat non  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
   </h>
  </div>
</div>
  </div>
</section>
<br />
<br />

        </html>

</div>



        );
                
            
      }
    }
        
    

    

export default Home;