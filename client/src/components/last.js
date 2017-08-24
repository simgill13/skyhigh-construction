import React from 'react';
import {connect} from 'react-redux';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
// import { CSSTransitionGroup } from 'react-transition-group' // ES6
// import ImageGallery from 'react-image-gallery';
// import Home from './home';
import FontAwesome from 'react-fontawesome';
import $ from 'jquery';






class Last extends React.Component {
 
 componentDidMount() {
  $(function() {
 

});
  
   }

    render() {
       
      return (
          <div id="contactus" className="lastcomponent">
            <div className="lasttopwriting"> 
                <h1 className="lastcomtext"> LET'S HEAR FROM YOU </h1>
            </div>
            <div className="bottomlastcomponentdiv">
              <div className="bottomlastleftcomponentdiv bottonlastdivs">
                <div className="clockinconDiv">
                  <FontAwesome className='fa fa-clock-o clockicon' name='clock' size='4x' aria-hidden='true'/>
                </div>
                <div className="clockicontext">
                  <h1 >Working Hours </h1>
                  <p className="clockicontexttwo">Mon - Fri 8am to 5pm </p>
                  <p className="clockicontexttwo">Sat 8am to 12pm </p>
                  <p className="clockicontexttwo">Sun Closed </p>

    
                </div>
              </div>


              <div className="bottomlastrightcomponentdiv bottonlastdivs">
                <div className="clockinconDiv">
                  <FontAwesome className='fa fa-building-o clockicon' name='building' size='4x' aria-hidden='true'/>
                </div>
                <div className="clockicontext">
                  <h1 className="locatedat">Located At </h1>
                  <p className="clockicontexttwo">2100 Main St </p>
                  <p className="clockicontexttwo">Los Angeles  </p>
                  <p className="clockicontexttwo">CA,91020 </p>

    
                </div>
              </div>

            </div>
           
          </div>
       

        )


    }
    
}







export default connect()(Last);