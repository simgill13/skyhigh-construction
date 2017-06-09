import React from 'react';
import {connect} from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import { CSSTransitionGroup } from 'react-transition-group' // ES6
import ImageGallery from 'react-image-gallery';
import Home from './home';
import FontAwesome from 'react-fontawesome';






class AboutUs extends React.Component {
 
 componentDidMount() {
  
   }

    render() {
       
      return (
          <div>
            
            <div className="row1">
              <div className="box1">
              </div>
              <div className="box2">
              </div>
              <div className="box3">
              </div>
            </div>
          </div>
       

        )


    }
    
}







export default connect()(AboutUs);