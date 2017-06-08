import React from 'react';
import {connect} from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import { CSSTransitionGroup } from 'react-transition-group' // ES6
import ImageGallery from 'react-image-gallery';
import Home from './home';
import FontAwesome from 'react-fontawesome';






class WelcomeMsgTwo extends React.Component {
 
 componentDidMount() {
  
   }

    render() {
       
      return (
          <div className="WelcomeMsgTwo">
            <div >
              <h6 className="Inspired"> Inspired</h6>
              <h6 className="byDesign"> By Design</h6>
            </div>
           

          </div>
       

        )


    }
    
}







export default connect()(WelcomeMsgTwo);