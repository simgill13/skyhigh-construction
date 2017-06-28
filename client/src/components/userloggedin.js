
import React from 'react';
import {connect} from 'react-redux';
import {toogle,hideLogin,LoggedOut} from '../actions/action';
import $ from 'jquery';
import {hashHistory} from 'react-router';
import LoggedInNav from './loggeninnav';
import UserGraphs from './usergraphs';
import FontAwesome from 'react-fontawesome';



class UserLoggedIn extends React.Component {
   
	constructor(props) {
    super(props);   	
    this.logout = this.logout.bind(this); 
  }
 	 

  componentDidMount() {
  }


  logout(){
    this.props.dispatch(LoggedOut());
  }

    render() {

        return (
            <div>
                <div className="mainpic">
                <LoggedInNav/>
                <UserGraphs/>
                  
                   
                    
          		</div>

                <div>
                  
                       
                </div>
               
              
            </div>

        );
    }
}
   
const mapStateToProps = (state) => ({
	toogle:state.toogle,
	image:state.image,
  loggenIn:state.loggenIn,

});

export default connect(mapStateToProps)(UserLoggedIn);



