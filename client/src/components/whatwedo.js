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
  $(function() {
  $('.innermostleft1').hover(function() {
    $('.coffeeIcon').css('color', '#DFBF98');
    $('.BPtext1').css('color', '#464646');
  }, function() {
    // on mouseout, reset the background colour
    $('.coffeeIcon ').css('color', '#464646');
     $('.BPtext1').css('color', '#AAAAAA');
  });

 $('.innermostright1').hover(function() {
    $('.laptopicon').css('color', '#DFBF98');
    $('.BPtext2').css('color', '#464646');
  }, function() {
    // on mouseout, reset the background colour
    $('.laptopicon ').css('color', '#464646');
     $('.BPtext2').css('color', '#AAAAAA');
  });


 $('.innermostleft2').hover(function() {
    $('.globeicon').css('color', '#DFBF98');
    $('.BPtext3').css('color', '#464646');
  }, function() {
    // on mouseout, reset the background colour
    $('.globeicon ').css('color', '#464646');
     $('.BPtext3').css('color', '#AAAAAA');
  });


  $('.innermostright2').hover(function() {
    $('.trophyicon').css('color', '#DFBF98');
    $('.BPtext4').css('color', '#464646');
  }, function() {
    // on mouseout, reset the background colour
    $('.trophyicon ').css('color', '#464646');
     $('.BPtext4').css('color', '#AAAAAA');
  });

});
  
   }

    render() {
       
      return (
          
          <div className="WhatWeDoComponent">
            <div className="wwdMainContainerleft">
              <div className="innerleft">
                <div className="innermostleft innermostleft1 ">
                  <div className='wwdicon'>
                    <FontAwesome className='fa fa-coffee  coffeeIcon ' size='2x' aria-hidden='true'/>
                  </div>
                  <div className='wwdtext'>
                    <h4 className='wwdintrotext coffeeIcon'> Introduce</h4> 

                  </div>
                  <p className='wwdbottomparatext BPtext1'> We discuss our game plan. </p>  
                </div>
                <div className="innermostright innermostright1">
                 <div className='wwdicon'>
                    <FontAwesome className='fa fa-laptop laptopicon' size='2x' aria-hidden='true'/>
                  </div>
                  <div className='wwdtext'>
                    <h4 className='wwdintrotext laptopicon'> Design</h4>
                    
                  </div> 
                   <p className='wwdbottomparatext BPtext2'> We present our Designs. </p> 
                </div>
                <div className="innermostleft innermostleft2">
                  <div className='wwdicon'>
                    <FontAwesome className='fa fa-globe globeicon ' size='2x' aria-hidden='true'/>
                  </div>
                  <div className='wwdtext'>
                    <h4 className='wwdintrotext globeicon'> experiment</h4>
                   
                  </div> 
                  <p className='wwdbottomparatext BPtext3'> We research for eco friendly materials. </p> 

                </div>
                <div className="innermostright innermostright2">
                  <div className='wwdicon'>
                    <FontAwesome className='fa fa-trophy trophyicon ' size='2x' aria-hidden='true'/>
                  </div>
                  <div className='wwdtext'>
                    <h4 className='wwdintrotext trophyicon'> Deliver</h4>
                   
                  </div> 
                  <p className='wwdbottomparatext BPtext4'> We Deliver final product! </p> 
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