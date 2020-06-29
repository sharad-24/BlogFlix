import  React,{Component} from 'react';
import Slider from 'infinite-react-carousel';
import './Home.css';
import SingleBlog from './SingleBlog';



class AllBlog extends Component{   
constructor(props){
    super(props);
    this.state = {
      data: []
    }
  }


  componentDidMount(){
   
    var tempArray=[];
    var n=5;
    for(var i=0; i<n;i++)
    {
      tempArray.push(<SingleBlog/>);
    
  }

this.setState({
      data: tempArray
    });


}

        render(){
        return(

<div className="Categories main colour">

<div className="container-fluid">
<div className="row">
<div className="col-md-12">
   <div className="grid-container-categories">
    <div>
     {this.state.data}
      </div>
      
  </div>

</div>
</div>
</div>
</div>


        );
                
            
      }
    }
        
    

    

export default AllBlog;