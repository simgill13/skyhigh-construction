import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';




import FontAwesome from 'react-fontawesome';
import $ from 'jquery';






class UserHomePics extends React.Component {
  constructor(props) {
    super(props);     
   
  }
   
 
   componentDidMount() { 
   }


    render() {
       
      return (
        <div className="UserHomePics">
          <div className="usertopheading">
           <h1 className="tsttext projectsummary"> <span className="userslaxh" > / </span> Current Status </h1>
          </div>
          <div className="userbottompics">

            <div className="userleftpics">
            </div>

            <div className="userrightpics">
            </div>

          </div>


        </div>

        )


    }
    
}







export default connect()(UserHomePics);