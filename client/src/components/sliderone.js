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
              
              
            </div>
          </div>
        </div>
        <div className="item">
          <img className="img-responsive" src={"http://res.cloudinary.com/sds-images/image/upload/v1496601104/homedesign_qcg0xh.jpg"}  alt="homedesigh" /> 
          <div className="container">
            <div className="carousel-caption">
              <h1>Another example headline.</h1>
              
              
            </div>
          </div>
        </div>
        <div className="item">
          <img className="img-responsive" src={"http://res.cloudinary.com/sds-images/image/upload/v1496601104/homedesign_qcg0xh.jpg"}  alt="homedesigh" /> 
          <div className="container">
            <div className="carousel-caption">
              <h1>One more for good measure.</h1>
              <p>some stuff in writing here . a parrgraph explaining the picture or project. use text from email.</p>
              
            </div>
          </div>
        </div>
      </div>
      <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
        
        <span > <FontAwesome className='fa fa-chevron-left backiconse' size='1x' aria-hidden='true'/> </span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
        <span > <FontAwesome className='fa fa-chevron-right backiconse' size='1x' aria-hidden='true'/> </span>
        <span className="sr-only">Next</span>
      </a>
    </div>











          </div>
       

        )


    }
    
}







export default connect()(Sliderone);