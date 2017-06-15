
import React from 'react';
import {connect} from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
let imgone = 'http://res.cloudinary.com/sds-images/image/upload/v1496601104/homedesign_qcg0xh.jpg'
let imgtwo = 'http://res.cloudinary.com/sds-images/image/upload/v1496601110/homedesign2_qeh7qw.jpg'
import {toogle,hideLogin} from '../actions/action';
import Nav from './nav';
import WelcomeMsg from './welcomemsg';
import WelcomeMsgTwo from './welcomemsgtwo';
import WelcomeBtn from './welcomebtn';
import AboutUs from './aboutus';
import Divider from './divider';
import WhatWeDo from './whatwedo';
import Pror from './projectdivider';
import Sliderone from './sliderone';
import ContactUs from './contactus';
import Last from './last';
import $ from 'jquery';

class Home extends React.Component {
   
	constructor(props) {
    	super(props);   	
    
    	
    }
 	 

    componentDidMount() {
        $(function() {

        $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
        event.preventDefault();
        $('html, body').animate({
         scrollTop: target.offset().top
       }, 1000, function() {
         var $target = $(target);
         $target.focus();
         if ($target.is(":focus")) {
           return false;
         } else {
           $target.attr('tabindex','-1');
           $target.focus();
         };
       });
     }
   }
 });


        });
  
    }



    render() {
    	
        return (
            <div>
                <div className="mainpic">
                    <Nav/> 
                    <div className="video-spot" >
                         {/*<img className="img-responsive" src={this.props.image} 
                         alt="homedesigh" /> */}
                        <WelcomeMsg/>
                        <WelcomeMsgTwo/>
                        <WelcomeBtn/>
                    </div>
          		</div>

                <div>
                    <AboutUs/>
                     <Divider/>
                    <WhatWeDo/>
                    <Pror/>
                    <Sliderone/>
                    <ContactUs/>
                    <Last/>
                       
                </div>
               
                



              
            </div>

        );
    }
}
   
const mapStateToProps = (state) => ({
	toogle:state.toogle,
	image:state.image

});

export default connect(mapStateToProps)(Home);








