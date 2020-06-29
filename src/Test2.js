import React,{ Component} from 'react';
import './Home.css';
import './css/bootstrap.css';
import './css/font-awesome.min.css';
import './css/nice-select.css';
import './css/owl.carousel.min.css';
import './css/owl.theme.default.min.css';
import './css/unslider.css';
import './css/responsive.css';


class Test2 extends Component{
	state ={
		value: <button className="join-test3"><span className="fa fa-pencil"></span></button>,
		isInEditMode: false
	}
	changeEditMode = () => {
		this.setState({
			isInEditMode: !this.state.isInEditMode
		})
		
	}
updateComponentValue=() => {
	this.setState({
		isInEditMode: false,
		value: this.refs.theTextInput.value
	})
}

renderEditView = () => {
	return <div>
	<input type="text" 
	defaultValue={''} 
	ref="theTextInput"
	/>
	<button className="join-test33" onClick={this.changeEditMode}>Cancel</button>
	<button className="join-test33" onClick={this.updateComponentValue}>OK</button>
		</div>
	}





renderDefaultView = () => {
	return <div onDoubleClick={this.changeEditMode}>
		{this.state.value}
		</div>

}


render() {
	return this.state.isInEditMode ?
	this.renderEditView():
	this.renderDefaultView()
}

}

export default Test2;

