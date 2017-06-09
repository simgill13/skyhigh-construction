
import React from 'react';
import {connect} from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
let imgone = 'http://res.cloudinary.com/sds-images/image/upload/v1496601104/homedesign_qcg0xh.jpg'
let imgtwo = 'http://res.cloudinary.com/sds-images/image/upload/v1496601110/homedesign2_qeh7qw.jpg'
import {toogle,hideLogin} from '../actions/action';
import Nav from './nav';
import WelcomeMsg from './welcomemsg';
import WelcomeMsgTwo from './welcomemsgtwo';
import WelcomeBtn from './welcomebtn';
import AboutUs from './aboutus';

class Home extends React.Component {
   
	constructor(props) {
    	super(props);   	
    
    	
    }
 	 



    render() {
    	
        return (
            <div>
                <div className="mainpic">
                    <Nav/> 
                    <div >
                         <img className="img-responsive" src={this.props.image} 
                         alt="homedesigh" />
                        <WelcomeMsg/>
                        <WelcomeMsgTwo/>
                        <WelcomeBtn/>
                    </div>
          		</div>
                <div>
                    <AboutUs/>
                </div>
            </div>

        );
    }
}
   
const mapStateToProps = (state) => ({
	toogle:state.toogle,
	image:state.image

});

export default connect(mapStateToProps)(Home);








