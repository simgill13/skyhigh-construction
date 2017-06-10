import React from 'react';
import {connect} from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import { CSSTransitionGroup } from 'react-transition-group' // ES6
import ImageGallery from 'react-image-gallery';
import Home from './home';
import FontAwesome from 'react-fontawesome';
import $ from 'jquery';






class WhatWeDo extends React.Component {
 
 componentDidMount() {

  
   }

    render() {
       
      return (
          <div className="WhatWeDoComponent">
            <div className="wwdMainContainerleft">
              <div className="innerleft">
                <div className="innermostleft">
                </div>
                <div className="innermostright">
                </div>
              </div>
              
            </div>
             <div className="wwdMainContainerright">
             <img className="whatwedoPic" src={"http://res.cloudinary.com/sds-images/image/upload/v1497040298/homedesign3_lndyy7.jpg"} 
                         alt="homedesigh" />
            </div>
          
          </div>
       

        )


    }
    
}





const mapStateToProps = (state) => ({
  toogle:state.toogle,
  image:state.image

});

export default connect()(WhatWeDo);