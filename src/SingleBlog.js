 import  React,{Component} from 'react';

import './Home.css';

class SingleBlog extends Component{

        
        
        render(){
        return(

<div className="SingleBlog">

 <div className="grid-item-categories">
  <div className="thumbnail_container-categories">
      <div className="thumbnail-categories">

        <img src={require('./img/389-3894980_photo-kermit-the-frog-transparent.jfif')} align="right" className="" />
       
    <button className="b2-categories">Read</button>

        <h6>Lorem ipsum dolor sit amet, consectetur adipisicing</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
         quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    
        tempor incididunt ut labore et dolore magna aliqu</p>
      
   </div>
     </div>
      </div>

      </div>



        );
                
            
      }
    }
        
    

    

export default SingleBlog;