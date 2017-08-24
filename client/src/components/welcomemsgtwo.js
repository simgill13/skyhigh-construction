import React from 'react';
import {connect} from 'react-redux';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
// import { CSSTransitionGroup } from 'react-transition-group' // ES6
// import ImageGallery from 'react-image-gallery';
// import Home from './home';
// import FontAwesome from 'react-fontawesome';

import $ from 'jquery';




class WelcomeMsgTwo extends React.Component {
 
 
 componentDidMount() {

      $(function(){

      $(window).scroll(function() {

    if ($(this).scrollTop()>300)
     {
        $('.WelcomeMsgTwo').fadeOut();
     }
    else
     {
      $('.WelcomeMsgTwo').fadeIn();
     }
    }); 
         
    });
  
   }

    render() {
       
      return (
          <div className="WelcomeMsgTwo">
            
              <h6 className="Inspired welcomemesgsize"> Inspired</h6>
              <h6 className="byDesign welcomemesgsize "> By Living</h6>
            
           

          </div>
       

        )


    }
    
}







export default connect()(WelcomeMsgTwo);