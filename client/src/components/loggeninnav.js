import React from 'react';
import {connect} from 'react-redux';
// import {Link} from 'react-router';
import {LoggedOut,clickedProjections,clickedDash} from '../actions/action';



import FontAwesome from 'react-fontawesome';
import $ from 'jquery';






class LoggedInNav extends React.Component {
  constructor(props) {
    super(props);     
    this.logout = this.logout.bind(this); 
    this.projections = this.projections.bind(this); 
    this.dashbord = this.dashbord.bind(this); 

  }
   
 
 componentDidMount() {

      
  
   }

   projections(){
    console.log(this.props.dashbord)
    console.log(this.props.test)
    console.log(this.props.hello)

     $(".dbtwunderline").css("border-bottom", "none");
     $(".projectionstext").css("border-bottom", "1px solid #DFBF98");
     this.props.dispatch(clickedProjections());
   }

   dashbord(){
    $(".dbtwunderline").css("border-bottom", "1px solid #DFBF98");
     $(".projectionstext").css("border-bottom", "none");
     this.props.dispatch(clickedDash());
   }

   logout(){
    this.props.dispatch(LoggedOut());
  }

    render() {
       
      return (
        <div className="loggedInnavBar">
          <div className="loggedInrightside">
          <ul className="loggedInnavList" >
            <li  onClick={this.dashbord} className="dashboardtext dashboardtextword dbtwunderline"> Dashboard  </li>
             <FontAwesome className='fa fa-viacoin dashboardtext logginInIcon' name='viacoin' size='5x' aria-hidden='true'/>
            <li onClick={this.projections} className="dashboardtext projectionstext "> Projections </li>
            
          </ul>
          <button className="dashboardtext logoutbutton " onClick={this.logout}> Logout </button>
          </div>
        </div>

        )


    }
    
}


const mapStateToProps = (state) => ({

  dashboard:state.dashboard,
  test:state.test,
  hello:state.hello

});



export default connect(mapStateToProps)(LoggedInNav);




