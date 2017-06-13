import React from 'react';
import {connect} from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import { CSSTransitionGroup } from 'react-transition-group' // ES6
// import ImageGallery from 'react-image-gallery';
import Home from './home';
import FontAwesome from 'react-fontawesome';
import $ from 'jquery';






class Divider extends React.Component {
 
 componentDidMount() {

  
   }

    render() {
       
      return (
          <div className="Divider">
            <div className="whatwedo">
            <h3 className="whatwedoText"> WHAT WE DO </h3>
            </div>
            <div className="DividerBar">
            </div>
          </div>
       

        )


    }
    
}







export default connect()(Divider);