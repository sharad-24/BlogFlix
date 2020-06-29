 import  React,{Component} from 'react';

import './Home.css';

class Profile2 extends Component{

        
        
        render(){
        return(

<div className="Profile2">

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
        
    

    

export default Profile2;