
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import { CSSTransitionGroup } from 'react-transition-group' // ES6
// import ImageGallery from 'react-image-gallery';
import Home from './home';
import FontAwesome from 'react-fontawesome';
import $ from 'jquery';






class Nav extends React.Component {
 
 componentDidMount() {

      $(function(){

      $(window).scroll(function() {

    if ($(this).scrollTop()>0)
     {
        $('.navBar').fadeOut();
     }
    else
     {
      $('.navBar').fadeIn();
     }
    }); 
         
    });
  
   }

    render() {
       
      return (
        <div className="navBar">
           <FontAwesome className='fa fa-viacoin navIcon' size='3x' aria-hidden='true'/><h2 className="navText"> SkyHigh </h2>
          <ul className="navList" >
            <li className="navElements"> <Link to={'/Login'}>Log In</Link> </li>
            <li className="navElements"> Contact Us </li>
            <li className="navElements navServices"> Services </li>
          </ul>
        </div>

        )


    }
    
}







export default connect()(Nav);