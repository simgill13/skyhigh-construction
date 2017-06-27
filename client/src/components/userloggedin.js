
import React from 'react';
import {connect} from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
let imgone = 'http://res.cloudinary.com/sds-images/image/upload/v1496601104/homedesign_qcg0xh.jpg'
let imgtwo = 'http://res.cloudinary.com/sds-images/image/upload/v1496601110/homedesign2_qeh7qw.jpg'
import {toogle,hideLogin,LoggedOut} from '../actions/action';
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
import {hashHistory} from 'react-router';

class UserLoggedIn extends React.Component {
   
	constructor(props) {
    	super(props);   	
       	this.logout = this.logout.bind(this); 
    }
 	 

    componentDidMount() {
     

     
    }


    logout(){
       this.props.dispatch(LoggedOut());
    }

    render() {


    	
        return (
            <div>
                <div className="mainpic">

                  
                    <h1> User is Loggen In </h1>
                    <button onClick={this.logout}> Logout </button>
          		</div>

                <div>
                  
                       
                </div>
               
                



              
            </div>

        );
    }
}
   
const mapStateToProps = (state) => ({
	toogle:state.toogle,
	image:state.image,
    loggenIn:state.loggenIn,

});

export default connect(mapStateToProps)(UserLoggedIn);



