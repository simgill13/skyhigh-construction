import React from 'react';
import {connect} from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import { CSSTransitionGroup } from 'react-transition-group' // ES6
// import ImageGallery from 'react-image-gallery';
import Home from './home';
import FontAwesome from 'react-fontawesome';
import $ from 'jquery';






class WelcomeBtn extends React.Component {
 
 componentDidMount() {

      $(function(){

      $(window).scroll(function() {

    if ($(this).scrollTop()>0)
     {
        $('.WelcomeBtnComponent').fadeOut();
     }
    else
     {
      $('.WelcomeBtnComponent').fadeIn();
     }
    }); 
         
    });
  
   }

    render() {
       
      return (
          <div className="WelcomeBtnComponent">
            <div >
             <a href="#explore"> <button className="WelcomeBtn"> Explore </button></a>
            </div>
          </div>
       

        )


    }
    
}







export default connect()(WelcomeBtn);