import React from 'react';
import {connect} from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import { CSSTransitionGroup } from 'react-transition-group' // ES6
import ImageGallery from 'react-image-gallery';
import Home from './home';
import FontAwesome from 'react-fontawesome';
import $ from 'jquery';






class Pror extends React.Component {
 
 componentDidMount() {

  
   }

    render() {
       
      return (
          <div className="Pror">
          <h1> this is from Project divder component </h1>
          

           
          </div>
       

        )


    }
    
}







export default connect()(Pror);