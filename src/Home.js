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
class Home extends Component{

        
        
        render(){
        return(

<div className="Home colour">

<html className="main colour">
 


<section>


 <div className="topnav">
 <div className="flex-container">
  
 
 
   <div><a href="/AllBlog">Categories</a> </div>


   <div><a href="/Login">Log in</a></div>
   <div><a href="/Profile">About</a></div>
   <div><a href="/Home" className="active">Home</a></div>

 
   
     <div><a href="/Blog" >BLOG</a></div>
                               <div> <a href="/Edit">Contact</a></div>
                               <div> <a href="#" className="fa fa-search"></a> </div>
                             
   </div>
  <a href="javascript:void(0);" className="icon" onclick="Sharad()"><i className="fa fa-bars"></i></a>

</div>

</section>

        
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

<section className="">
<div className="container-fluid">
<div className="row">
<div className="col-md-8 test2 element">
<table>

<div className="grid-container_featured">
    <div className="grid-item1">FEATURED</div>
    <div className="grid-item colour2">

        <img src={require('./img/4b18374e62fe836fd9d8c5e899a49e60.jpg')}height="200px" width="200px" align="center" />
        <br />
        <br />
        <button className="button7">
        <a href="/Blog" style={{color: "#FFFFFF"}} >Subscribe</a>
</button>
           <br />
        <br />
        <h4>Lorem&nbsp;ipsum</h4>

        <p>
        <div className="b">
          
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmor
</div>
        </p>
<button className="button6">
        <a href="/Blog" style={{color: "#FFFFFF"}} >Start</a>
</button>

    </div>
    <div className="grid-item colour2">


        <img src={require('./img/4b18374e62fe836fd9d8c5e899a49e60.jpg')} height="200px" width="200px" align="center" />
          
         <br />
        <br />
        <button className="button7">
        <a href="/Blog" style={{color: "#FFFFFF"}} >Subscribe</a>
</button>
           <br />
        <br />
        <h4>Lorem&nbsp;ipsum</h4>

        <p>
          
            <div className="b">
          
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmor
</div>

        </p>

         <button className="button6">
        <a href="/Blog" style={{color: "#FFFFFF"}} >Start</a>
</button>


    </div>
    <div className=" grid-item grid-item3 colour2">

        <img src={require('./img/4b18374e62fe836fd9d8c5e899a49e60.jpg')} height="550px" width="220px" align="center" />
          
               <br />
        <br />
        <button className="button7">
        <a href="/Blog" style={{color: "#FFFFFF"}} >Subscribe</a>
</button>
           <br />
        <br />
        <h4>Lorem&nbsp;ipsum</h4>

        <p>
          
            <div className="b">
          
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmor
</div>

        </p>

          <button className="button6">
        <a href="/Blog" style={{color: "#FFFFFF"}} >Start</a>
</button>

    </div>
    <div className="grid-item colour2">

        <img src={require('./img/4b18374e62fe836fd9d8c5e899a49e60.jpg')} height="200px" width="200px" align="center" />

          
               <br />
        <br />
        <button className="button7">
        <a href="/Blog" style={{color: "#FFFFFF"}} >Subscribe</a>
</button>
           <br />
        <br />
        <h4>Lorem&nbsp;ipsum</h4>

        <p>
          
            <div className="b">
          
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmor
</div>

        </p>

   <button className="button6">
        <a href="/Blog" style={{color: "#FFFFFF"}} >Start</a>
</button>

    </div>
    <div className="grid-item colour2">
      
        <img src={require('./img/4b18374e62fe836fd9d8c5e899a49e60.jpg')} height="200px" width="200px" align="center" />
          
               <br />
        <br />
        <button className="button7">
        <a href="/Blog" style={{color: "#FFFFFF"}} >Subscribe</a>
</button>
           <br />
        <br />
        <h4>Lorem&nbsp;ipsum</h4>

        <p>
          
            <div className="b">
          
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmor
</div>

        </p>

         <button className="button6">
        <a href="/Blog" style={{color: "#FFFFFF"}} >Start</a>
</button>

    </div>
    </div>
</table>
</div>
<div className="col-md-4">

<div className="grid-container_latest colour">
  <div className="grid-item_latest1">LATEST</div>

  <div className="grid-item_latest colour">

    <img src={require('./img/4b18374e62fe836fd9d8c5e899a49e60.jpg')} height="70px" width="150px" align="center" />
    
    <h4 >Lorem&nbsp;ipsum</h4>

          <p>
          
          Lorem ipsum dolor sit amet

          </p>

  </div>
  <div className="grid-item_latest colour">

    <img src={require('./img/4b18374e62fe836fd9d8c5e899a49e60.jpg')} height="70px" width="150px" align="center" />
    
    <h4>Lorem&nbsp;ipsum</h4>

          <p>
          
          Lorem ipsum dolor sit amet

          </p>

  </div>
  <div className="grid-item_latest colour">

    <img src={require('./img/4b18374e62fe836fd9d8c5e899a49e60.jpg')} height="70px" width="150px" align="center" />

    <h4>Lorem&nbsp;ipsum</h4>

          <p>
          
          Lorem ipsum dolor sit amet
          </p>
    

  </div>
  <div className="grid-item_latest colour">

    <img src={require('./img/4b18374e62fe836fd9d8c5e899a49e60.jpg')} height="70px" width="150px" align="center" />

    <h4>Lorem&nbsp;ipsum</h4>

          <p>
          
          Lorem ipsum dolor sit amet

          </p>
    

  </div>

</div>
</div>
</div>
</div>




</section>



<section className="test2">
<table>
<div className="grid-container5 colour3">

    <div className="grid-item15 grid-item5">Popular Categories</div>
    <div className="container">
<div className="row">
    <div className=".col-md-12 grid-item5 grid33">
      

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
    </div>
<div className="row">
    <div className=".col-md-12 grid-item25 grid-item5 grid33" align="center">
      

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
    <div className="row">

    <div className=".col-md-12 grid-item35 grid-item5 grid33">
      

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
    </div>

  </div>
  </table>
</section>

<section className="joinus">
    <div className="row cont h-100">
        <div className="col-md-8 my-auto">
       <p className="headin2" >BECOME NEWSLETTER</p>
            <p className="headin">Join Our Community Today and Stay Updated!!</p>
            <p className="headin2" >receive our newsletter now</p>
            
           
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
                <div className="col-md-4 colour">
                                <img className="image2" src={require('./img/4-512.png')} />
                    <p className="Crible_para">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Repellat perspiciatis magnam quod delectus quisquam porro ullam veritatis ea aperiam ab!
                    </p>
                   <h1 className="Crible_head">  <img className="image" src={require('./img/circle-cropped.png')} /> Lorem ipsum
                   </h1>
                </div>
                <div className="col-md-4 colour">
                    
                   <img className="image2" src={require('./img/4-512.png')} />
                    <p className="Crible_para">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Repellat perspiciatis magnam quod delectus quisquam porro ullam veritatis ea aperiam ab!
                    </p>
                     <h1 className="Crible_head">  <img className="image" src={require('./img/circle-cropped.png')} /> Lorem ipsum
                     </h1>
                </div>
                <div className="col-md-4 colour">
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



<br />

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
</section>
<br />
<br />

        </html>

</div>



        );
                
            
      }
    }
        
    

    

export default Home;