import React from 'react';
import {connect} from 'react-redux';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
// import { CSSTransitionGroup } from 'react-transition-group' // ES6
// import ImageGallery from 'react-image-gallery';
// import Home from './home';
import FontAwesome from 'react-fontawesome';
import $ from 'jquery';






class ContactUs extends React.Component {
 
 componentDidMount() {
  $(function() {
  $('.box1').hover(function() {
    $('.iconcolor1').css('color', '#464646');
  }, function() {
    // on mouseout, reset the background colour
    $('.iconcolor1').css('color', '#DFBF98');
  });

 $('.box2').hover(function() {
    $('.iconcolor2').css('color', '#464646');
  }, function() {
    // on mouseout, reset the background colour
    $('.iconcolor2').css('color', '#DFBF98');
  });

 $('.box3').hover(function() {
    $('.iconcolor3').css('color', '#464646');
  }, function() {
    // on mouseout, reset the background colour
    $('.iconcolor3').css('color', '#DFBF98');
  });



});
  
   }

    render() {
       
      return (
          <div className="ourteamcomponent">
            <h3 className="ourteam"><span className="blackslash"> /</span>Our Team </h3>
            <div className="ourTeamMainDiv">
              <div className="member"> 
                <div className="memberPic">
                </div>
                <h3> Sim Gill </h3>
                <p>  Project Manager </p>
                <p> Over 5 years of extensive experience working as a project manager </p>
                <div className="memberIcons">
                <FontAwesome className='fa fa-envelope-o memicon' name='envelope' size='2x' aria-hidden='true'/>
                <FontAwesome className='fa fa-facebook-official memicon' name='facebook' size='2x' aria-hidden='true'/>
                <FontAwesome className='fa fa-instagram memicon' name='itagram' size='2x' aria-hidden='true'/>
                </div>
              </div>
              
              <div className="member rightmemberdiv"> 
                <div className="memberPic">
                </div>
                <h3> Name </h3>
                <p> Role </p>
                <p> Over 5 years of extensive experience working as a project manager </p>
                <div className="memberIcons">
                 <FontAwesome className='fa fa-envelope-o memicon' name='envelope' size='2x' aria-hidden='true'/>
                <FontAwesome className='fa fa-facebook-official memicon' name='facebook' size='2x' aria-hidden='true'/>
                <FontAwesome className='fa fa-instagram memicon' name='instagram' size='2x' aria-hidden='true'/>
                </div>
              </div>
              

            </div>
          </div>
       

        )


    }
    
}







export default connect()(ContactUs);