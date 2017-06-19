
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import { CSSTransitionGroup } from 'react-transition-group' // ES6
// import ImageGallery from 'react-image-gallery';
import Home from './home';
import FontAwesome from 'react-fontawesome';
import $ from 'jquery';
import {loginUser} from '../actions/action';
import {hashHistory} from 'react-router';





class LoginHome extends React.Component {

	constructor(props) {
        super(props);
        this.state = {	
    	};    
    }
 
 	componentDidMount() {
   	}



    render() {
    	
       
      return (
        <div className="LoginHome">
          <h1> Welcome, You are now logged In  </h1>  	
        </div>

        )


    }
    
}







export default connect()(LoginHome);