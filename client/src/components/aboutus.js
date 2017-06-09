import React from 'react';
import {connect} from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import { CSSTransitionGroup } from 'react-transition-group' // ES6
import ImageGallery from 'react-image-gallery';
import Home from './home';
import FontAwesome from 'react-fontawesome';
import $ from 'jquery';






class AboutUs extends React.Component {
 
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
          <div className="AboutUsComponent">
            <h3 className="AboutusText"><span className="blackslash"> /</span>About Us </h3>
            <div className="row1">
              <div className="box1 color">
                <FontAwesome className='fa fa-handshake-o iconcolor1 ' size='3x' aria-hidden='true'/>
                <h3 className="boxtext" > Mission </h3>
                <p> Some text explaining what the mission statement is </p>
              </div>
              <div className="box2 color">
               <FontAwesome className='fa fa-star-o iconcolor2 ' size='3x' aria-hidden='true'/>
                <h3 className="boxtext"> Vision </h3>
                <p> Some text explaining what the mission statement is </p>

              </div>
              <div className="box3 color">
               <FontAwesome className='fa fa-briefcase iconcolor3' size='3x' aria-hidden='true'/>
                <h3 className="boxtext"> Work </h3>
                <p> Some text explaining what the mission statement is </p>

              </div>
              
            </div>
          </div>
       

        )


    }
    
}







export default connect()(AboutUs);