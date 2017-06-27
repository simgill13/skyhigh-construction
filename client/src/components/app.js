
import React from 'react';
import {connect} from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import { CSSTransitionGroup } from 'react-transition-group' // ES6
// import ImageGallery from 'react-image-gallery';
import Home from './home';
import UserLoggedIn from './userloggedin';
let imgone = 'http://res.cloudinary.com/sds-images/image/upload/v1496601104/homedesign_qcg0xh.jpg'
let imgtwo = 'http://res.cloudinary.com/sds-images/image/upload/v1496601110/homedesign2_qeh7qw.jpg'





class App extends React.Component {
 
 componentDidMount() {
  
   }

    render() {
    	let loggedin;
    	if(this.props.loggenIn === true){
    		loggedin = <UserLoggedIn/>
    	}

    	let loggedout;
    	if(this.props.loggenIn === false){
    		loggedout = <Home/>
    	}
       
        return (

            <div className="app">
            	{loggedin}
               {loggedout}	
            </div>
        );
    }
    
}
   




const mapStateToProps = (state) => ({
  InvalidCred:state.InvalidCred,
  loggenIn:state.loggenIn
});


export default connect(mapStateToProps)(App);












//animation example 

 // <ReactCSSTransitionGroup transitionName = "example" 
 //              transitionAppear={true}
 //              transitionAppearTimeout={5000}
 //               transitionEnterTimeout = {5000} transitionLeaveTimeout = {5000}>
 //               <h1> hellp </h1>
 //            </ReactCSSTransitionGroup>
