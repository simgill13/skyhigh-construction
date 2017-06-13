import React from 'react';
import {connect} from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import { CSSTransitionGroup } from 'react-transition-group' // ES6
// import ImageGallery from 'react-image-gallery';
import Home from './home';
import FontAwesome from 'react-fontawesome';
import $ from 'jquery';






class Sliderone extends React.Component {
 
 componentDidMount() {

  
   }

    render() {
       
      return (
          <div className="Sliderone">
         
            
          
           <div id="myCarousel" className="carousel slide" data-ride="carousel">
      
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner" role="listbox">
        <div className="item active">
          <img className="img-responsive" src={"http://res.cloudinary.com/sds-images/image/upload/v1496601104/homedesign_qcg0xh.jpg"}  alt="homedesigh" /> 
          <div className="container">
            <div className="carousel-caption">
              <h1>Example headline.</h1>
              <p>Note: If you're viewing this page via a <code>file://</code> URL, the "next" and "previousy properly due to web browser security rules.</p>
              <p><a className="btn btn-lg btn-primary" href="#" role="button">Sign up today</a></p>
            </div>
          </div>
        </div>
        <div className="item">
          <img className="img-responsive" src={"http://res.cloudinary.com/sds-images/image/upload/v1496601104/homedesign_qcg0xh.jpg"}  alt="homedesigh" /> 
          <div className="container">
            <div className="carousel-caption">
              <h1>Another example headline.</h1>
              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              <p><a className="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
            </div>
          </div>
        </div>
        <div className="item">
          <img className="img-responsive" src={"http://res.cloudinary.com/sds-images/image/upload/v1496601104/homedesign_qcg0xh.jpg"}  alt="homedesigh" /> 
          <div className="container">
            <div className="carousel-caption">
              <h1>One more for good measure.</h1>
              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              <p><a className="btn btn-lg btn-primary" href="#" role="button">Browse gallery</a></p>
            </div>
          </div>
        </div>
      </div>
      <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>











          </div>
       

        )


    }
    
}







export default connect()(Sliderone);