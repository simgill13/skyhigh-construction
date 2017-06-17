
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import { CSSTransitionGroup } from 'react-transition-group' // ES6
// import ImageGallery from 'react-image-gallery';
import Home from './home';
import FontAwesome from 'react-fontawesome';
import $ from 'jquery';






class Login extends React.Component {

	constructor(props) {
        super(props);
        this.state = {	
    	};    
    }
 
 	componentDidMount() {
   	}

 	sim(email,password){
	 	console.log('hi')
	 	console.log(email)
	 	console.log(password)
 	}

    render() {
    	console.log(this.state.email)
       
      return (
        <div className="LoginComponent">
          <div className="Login">
          	<div className="LoginText">
          		<h1> Login ---under construction </h1>
          	</div>
          	<div className="Logininput">
          	      <form onSubmit={(event) => {
                      event.preventDefault();
                      const email = event.target.email.value;
                      const password = event.target.password.value;
                      this.sim(email,password)              
                  }} className="search-form" >
                    <input name="email" type="text" placeholder=" email" required></input><br/>
                    <input name="password" type="text" placeholder=" password" required></input><br/>
                    <button type="submit" >enter</button>
                  </form>
          	</div>
          </div>
        </div>

        )


    }
    
}







export default connect()(Login);