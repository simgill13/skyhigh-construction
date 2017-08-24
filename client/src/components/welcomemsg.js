
import React from 'react';
import {connect} from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
// import { CSSTransitionGroup } from 'react-transition-group' // ES6
// import ImageGallery from 'react-image-gallery';
// import Home from './home';
// import FontAwesome from 'react-fontawesome';






class WelcomeMsg extends React.Component {
 
 componentDidMount() {
  
   }

    render() {
       
      return (
        <ReactCSSTransitionGroup transitionName="example" 
              transitionAppear={true}
              transitionAppearTimeout={5000}
               transitionEnterTimeout={5000} transitionLeaveTimeout={5000}>
          <div className="WelcomeMsg ">
            <div className="topTag">
              <h6 > If you can dream it, we can create it</h6>
            </div>
          </div>
        </ReactCSSTransitionGroup>

        )


    }
    
}







export default connect()(WelcomeMsg);




