
import React from 'react';
import {connect} from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import { CSSTransitionGroup } from 'react-transition-group' // ES6
// import ImageGallery from 'react-image-gallery';
import Home from './home';
let imgone = 'http://res.cloudinary.com/sds-images/image/upload/v1496601104/homedesign_qcg0xh.jpg'
let imgtwo = 'http://res.cloudinary.com/sds-images/image/upload/v1496601110/homedesign2_qeh7qw.jpg'





class App extends React.Component {
 
 componentDidMount() {
  
   }

    render() {
       
        return (

            <div className="app">
               <Home />
            </div>
        );
    }
    
}
   


export default connect()(App);



//animation example 

 // <ReactCSSTransitionGroup transitionName = "example" 
 //              transitionAppear={true}
 //              transitionAppearTimeout={5000}
 //               transitionEnterTimeout = {5000} transitionLeaveTimeout = {5000}>
 //               <h1> hellp </h1>
 //            </ReactCSSTransitionGroup>
