
import React from 'react';
import {connect} from 'react-redux';
// import {Link} from 'react-router';
import {hashHistory} from 'react-router';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
// import { CSSTransitionGroup } from 'react-transition-group' // ES6
// import ImageGallery from 'react-image-gallery';
// import Home from './home';
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
           <FontAwesome className='fa fa-viacoin navIcon' name="icon" size='3x' aria-hidden='true'/><h2 className="navText"> SkyHigh </h2>
          <ul className="navList" >
            <li  className="navElements navloginbutton">
              <button onClick={(event)=>{
                hashHistory.push('login');
              }}className="navloginbuttonlink"> Log In </button> 
            </li>
            <a href="#contactus"><li className="navElements contactservices"> Contact Us </li></a>
            <a href="#aboutus"><li className="navElements navServices"> Services </li></a>
          </ul>
        </div>

        )


    }
    
}







export default connect()(Nav);