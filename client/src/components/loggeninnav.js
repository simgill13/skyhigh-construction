import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {LoggedOut} from '../actions/action';



import FontAwesome from 'react-fontawesome';
import $ from 'jquery';






class LoggedInNav extends React.Component {
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
        <div className="loggedInnavBar">
          <div className="loggedInrightside">
          <ul className="loggedInnavList" >
            <li  className="dashboardtext"> Dashboard  </li>
             <FontAwesome className='fa fa-viacoin dashboardtext ' size='3x' aria-hidden='true'/>
            <li className="dashboardtext"> Projections </li>
            
          </ul>
          <button className="dashboardtext logoutbutton" onClick={this.logout}> Logout </button>
          </div>
        </div>

        )


    }
    
}







export default connect()(LoggedInNav);