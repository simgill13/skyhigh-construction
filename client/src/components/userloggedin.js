
import React from 'react';
import {connect} from 'react-redux';
import {LoggedOut} from '../actions/action';
// import $ from 'jquery';
// import {hashHistory} from 'react-router';
import LoggedInNav from './loggeninnav';
import UserGraphs from './usergraphs';
// import FontAwesome from 'react-fontawesome';
import UserHomePics from './usershomepics';
import Bargraph from './bargraph';



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

      let usergraphs;
      if(this.props.dashboard === true){
        usergraphs = <UserGraphs/>
      }

      let userhomepics;
      if(this.props.dashboard === true){
        userhomepics =  <UserHomePics/>
      }

      let bargraph;
      if(this.props.dashboard === false){
        bargraph = <Bargraph/>
      }


        return (
            <div>
                <div className="mainpic">
                <LoggedInNav/>
                {usergraphs}
                {userhomepics}
                {bargraph}
                   
                    
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
  dashboard:state.dashboard,

});

export default connect(mapStateToProps)(UserLoggedIn);



