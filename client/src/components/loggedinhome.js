
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import { CSSTransitionGroup } from 'react-transition-group' // ES6
// import ImageGallery from 'react-image-gallery';
import Home from './home';
import FontAwesome from 'react-fontawesome';
import $ from 'jquery';
import {loginUser,LoggedOut} from '../actions/action';
import {hashHistory} from 'react-router';





class LoginHome extends React.Component {

	constructor(props) {
        super(props);
        this.state = {	
    	}; 
       this.logout = this.logout.bind(this)   
    }
 
 	componentDidMount() {
   	}


  logout(){
    this.props.dispatch(LoggedOut());
    hashHistory.push('/');
  }


    render() {
    	
       
      return (
        <div className="LoginHome">
          <h1> Welcome, You are now logged In -- under construction  </h1>
          <button onClick={this.logout}> Sign Out </button>  	
        </div>

        )


    }
    
}



const mapStateToProps = (state) => ({
  InvalidCred:state.InvalidCred,
  loggenIn:state.loggenIn
});



export default connect(mapStateToProps)(LoginHome);