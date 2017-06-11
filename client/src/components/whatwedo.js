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
                  <div className='wwdicon'>
                    <FontAwesome className='fa fa-coffee  ' size='2x' aria-hidden='true'/>
                  </div>
                  <div className='wwdtext'>
                    <h4 className='wwdintrotext'> Introduce</h4> 

                  </div>
                  <p className='wwdbottomparatext'> We discuss our game plan. </p>  
                </div>
                <div className="innermostright">
                 <div className='wwdicon'>
                    <FontAwesome className='fa fa-laptop' size='2x' aria-hidden='true'/>
                  </div>
                  <div className='wwdtext'>
                    <h4 className='wwdintrotext'> Design</h4>
                    
                  </div> 
                   <p className='wwdbottomparatext'> We present our Designs. </p> 
                </div>
                <div className="innermostleft">
                  <div className='wwdicon'>
                    <FontAwesome className='fa fa-globe ' size='2x' aria-hidden='true'/>
                  </div>
                  <div className='wwdtext'>
                    <h4 className='wwdintrotext'> experiment</h4>
                   
                  </div> 
                  <p className='wwdbottomparatext'> We research for eco friendly materials. </p> 

                </div>
                <div className="innermostright">
                  <div className='wwdicon'>
                    <FontAwesome className='fa fa-trophy  ' size='2x' aria-hidden='true'/>
                  </div>
                  <div className='wwdtext'>
                    <h4 className='wwdintrotext'> Deliver</h4>
                   
                  </div> 
                  <p className='wwdbottomparatext'> We Deliver!. </p> 
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