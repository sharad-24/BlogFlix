import  React,{Component} from 'react';

import './Home.css';
import './css/bootstrap.css';
import './css/font-awesome.min.css';
import './css/nice-select.css';
import './css/owl.carousel.min.css';
import './css/owl.theme.default.min.css';
import './css/unslider.css';
import './css/responsive.css';
import Comment from './Comment';
import Sharad from './Nav';
import Test2 from './Test2';



class Blog extends Component{

 constructor(props){
    super(props);
    this.state = {
      data: []
    }
  }


  componentDidMount(){
   
    var tempArray=[];
    var n=4;
    for(var i=0; i<n;i++)
    {
      tempArray.push(<Comment/>);
    
  }

this.setState({
      data: tempArray
    });


}
        
		
		
		render(){
		return(

<div className="Blog main colour">



<section>


 <div className="topnav">
 <div className="flex-container">
  
 
 
   <div><a href="/Edit">Categories</a> </div>


   <div><a href="/Login">Log in</a></div>
   <div><a href="/Profile">About</a></div>
   <div><a href="/Blog" className="active">Blog</a></div>

 
   
     <div><a href="/Home" >Home</a></div>
                               <div> <a href="#">Contact</a></div>
                               <div> <a href="#" className="fa fa-search"></a> </div>
                             
   </div>
  <a href="javascript:void(0);" className="icon" onclick="Sharad()"><i className="fa fa-bars"></i></a>

</div>

</section>

        <section className="test2">
        <table>
         <div className="bg-text-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="bg-text">
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </table>
        </section>

     
<div className="container-fluid">
<div className="row">
<div className="col-xs-12 col-md-1">
</div>

<div className="col-xs-12 col-md-8">
 <button className="button8">
        <a href="/Blog" style={{color: "#FFFFFF"}} >Subscribe</a>
</button>
<br/>
<br/>
<br/>
  <h1 className="blog-test">Lorem Ipsum Dolor</h1>
  <br/>
<br/>
<br/>
  
  <p className="blog-test"> By lorem</p>


  <p className="content-blog">
    
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    <br />
    <br />
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam

    </p>

   

<div className="thumbnail1_container">
      <div className="thumbnail1">
      <img src={require('./img/post-image6.jpg')} alt=""/>
      
  </div>
  </div>
  <div className="thumbnail1_container">
      <div className="thumbnail1">
      <img src={require('./img/post-image7.jpg')} />
  </div>
  </div>







  <p className="content-blog content22-blog">
    
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo

  </p>

<img src={require('./img/post-image1.jpg')} width="100%" height="300px" />

  <p className="content-blog">
    
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo

  </p>

<div className="thumbnail1_container">
      <div className="thumbnail1">
      <img src={require('./img/post-image6.jpg')} alt=""/>
      
  </div>
  </div>
  <div className="thumbnail1_container">
      <div className="thumbnail1">
      <img src={require('./img/post-image7.jpg')} />
  </div>
  </div>


  <p className="content-blog content22-blog">
    
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo

  </p>
<div className="col-md-12">
<h1 className="blog-test"> SHARE
  <i className="fa fa-instagram sharad2-blog"></i>
<i className="fa fa-linkedin sharad2-blog"></i>
<i className="fa fa-github sharad2-blog"></i>
<i className="fa fa-facebook sharad2-blog"></i>
<i className="fa fa-twitter sharad2-blog"></i>
<i className="fa fa-youtube sharad2-blog"></i>
</h1>
</div>
<br/>
<div className="col-md-12">
<h1 className=" blog-test3"> COMMENTS </h1>
</div>

<div className="container-fluid">
<div className="row">

<div className="col-md-2">
<p className="new1" >Add Comment</p>
</div>
</div>
</div>
<div className="container-fluid">
<div className="row">
<div className="col-md-12">
<div className="grid-item-blog1">

<Test2/>
</div>
</div>


<div className="col-md-12">

     
  <div>
     {this.state.data}
      </div>
     
      </div>



</div>
</div>
</div>


 




<div className="col-xs-12 col-md-2">
    
    <div className="aside1-blog">
 <div className="thumbnail2_container">
      <div className="thumbnail2">
      
    <img src={require('./img/389-3894980_photo-kermit-the-frog-transparent.jfif')} />
</div>
</div>
    <h3>Lorem</h3>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo

    </p>

  
     




    </div>

    <div className="aside2-container-blog">

      <h3> Popular </h3>

      <div className="aside2-item-blog">
        
        <img src={require('./img/post-image9.jpg')} />
        <h4>Lorem ipsum dolor sit</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>

      </div>
      <div className="aside2-item-blog">
        
        <img src={require('./img/post-image5.jpg')} />
        <h4>Lorem ipsum dolor sit</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>

      </div>
      <div className="aside2-item-blog">
        
        <img src={require('./img/post-image6.jpg')} />
        <h4>Lorem ipsum dolor sit</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>

      </div>

    </div>

</div>
</div>
</div>







<br />
<br />

<section className="">

<h1>MORE LIKE THIS</h1>
<div className="container-fluid">
<div className="row">

  <div className="col-md-3 grid-item3-blog">
  <img src={require('./img/pexels-photo-1034662.jpeg')}className="displayed-blog"/>

   <button className="button9">
        <a href="/Blog" style={{color: "#FFFFFF"}} >Subscribe</a>
</button>
<br/>
<br/>
<br/>
      <p className="p1">Lorem ipsum</p>
    <p className="p2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt</p>
    <button>
        
        lorem

    </button>

  </div>
  <div className="col-md-3 grid-item3-blog">
    <img src={require('./img/pexels-photo-1034662.jpeg')} className="displayed-blog" />
     <button className="button9">
        <a href="/Blog" style={{color: "#FFFFFF"}} >Subscribe</a>
</button>
<br/>
<br/>
<br/>
      <p className="p1">Lorem ipsum</p>
    <p className="p2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt</p>
    <button>
        
        lorem

    </button>

  </div>
  <div className="col-md-3 grid-item3-blog">  
    <img src={require('./img/pexels-photo-1034662.jpeg')} className="displayed-blog" />
     <button className="button9">
        <a href="/Blog" style={{color: "#FFFFFF"}} >Subscribe</a>
</button>
<br/>
<br/>
<br/>
    <p className="p1">Lorem ipsum</p>
    <p className="p2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt</p>
    <button>
        
        lorem

    </button>

  </div>
</div>
</div>
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
<br/>
<br/>

<hr className=".col-xs-6 mx-auto pt-0.9 footer1"/>



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
   
</div>



		)
                
			
	  }
	}
		
	

	

export default Blog;