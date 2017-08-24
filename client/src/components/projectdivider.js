import React from 'react';
import {connect} from 'react-redux';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
// import { CSSTransitionGroup } from 'react-transition-group' // ES6
// // import ImageGallery from 'react-image-gallery';
// import Home from './home';
// import FontAwesome from 'react-fontawesome';
// import $ from 'jquery';
// import Sliderone from './sliderone';





class Pror extends React.Component {
 
 componentDidMount() {

  
   }

    render() {
       
      return (
        <div className="theprorcomponent">
          <div className="Pror" id="explore">
            <div className="projectTextline">
                <h1 className="projectsText"> <span className="blackslash"> / </span> Projects </h1>
            </div>
            <div className="buttonsDiv">
              <button className="actbuttons"> Project 1 </button>
              <button className="actbuttons"> Project 2 </button>
              <button className="actbuttons dontshowbuttons"> Project 3 </button>
              <button className="actbuttons dontshowbuttons"> Project 4 </button>
            </div>
          
            
           
          </div>

        </div>
       

        )


    }
    
}







export default connect()(Pror);