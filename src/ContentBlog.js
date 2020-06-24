import React, { Component } from 'react';
import './Home.css';
import Profile2 from './Profile2';
class ContentBlog extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: []
    }
  }

/*  getData(){
   
    return( <div>

      <Profile2/>


      </div>
      )
   
  }*/



  componentDidMount(){
    console.log('sharad');
    var tempArray=[];
    for(var i=0; i<5;i++)
    {
      tempArray.push(<Profile2/>);
    
  }

this.setState({
      data: [this.tempArray] 
    });

    return(
{tempArray}
    )

}
  render() {
    return(
      <div>
    {this.state.data}
    </div>
    )
  }
}
 
export default ContentBlog;