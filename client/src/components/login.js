
import React from 'react';
import {connect} from 'react-redux';
// import {Link} from 'react-router';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
// import { CSSTransitionGroup } from 'react-transition-group' // ES6
// import ImageGallery from 'react-image-gallery';
// import Home from './home';
// import FontAwesome from 'react-fontawesome';
// import $ from 'jquery';
import {loginUser} from '../actions/action';
// import {hashHistory} from 'react-router';
// import * as Cookies from 'js-cookie';




class Login extends React.Component {

	constructor(props) {
        super(props);
        this.state = {	
    	};    
    }
 
 	componentDidMount() {
    


   	}

 	sim(email,password){

	 	console.log(email)
	 	console.log(password)

    // this is where the asyn action will be called 
    this.props.dispatch(loginUser(email,password));
    // const cookie = Cookies.get('accessToken');
    // console.log(cookie)
   

 	}

    render() {

      // if(this.props.loggenIn===true){
        
      //   hashHistory.push('/');
      // }
    	
      let errMsg;
      if(this.props.InvalidCred ===true){
        errMsg="Please check your Credentials"
      }
       
      return (
        <div className="LoginComponent">
          <div className="Login">
          	<div className="LoginText">
          		<h1 className="logintexttitle"> Let's go to the dashboard</h1>
          	</div>

          	<div className="Logininput">
          	      <form onSubmit={(event) => {
                      event.preventDefault();
                      const email = event.target.email.value;
                      const password = event.target.password.value;
                      this.sim(email,password)              
                  }} className="search-form" >
                    <p className="logintext"> email - demo@gmail.com</p>
                    <p className="logintext"> password - demo </p>
                    <input className="inputemail" name="email" type="text" placeholder=" email" required></input><br/>
                    <input  className="inputemail" name="password" type="text" placeholder=" password" required></input><br/>
                    
                    <button className="inputbutton"><span className="inputbuttontext"> Enter </span></button>
                  </form>
                  {errMsg}
          	</div>
          </div>
        </div>

        )


    }
    
}



const mapStateToProps = (state) => ({
  InvalidCred:state.InvalidCred,
  loggenIn:state.loggenIn
});



export default connect(mapStateToProps)(Login);







