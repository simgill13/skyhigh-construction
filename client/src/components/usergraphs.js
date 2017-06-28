import React from 'react';
import {connect} from 'react-redux';
import {} from '../actions/action';
import $ from 'jquery';
import {Doughnut} from 'react-chartjs-2';
import Bargraph from  './bargraph';
import FontAwesome from 'react-fontawesome';





class UserGraphs extends React.Component {
   
	constructor(props) {
    super(props);
    this.state = {
      data:{
        labels: [
          'Materials Stock',
          'Employies Working',
          'Setbacks'
        ],
      datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
        '#d6ad7a',
        '#7ad6ad',
        '#7aa3d6'
        ],
        hoverBackgroundColor: [
        '#d6ad7a',
        '#7ad6ad',
        '#7aa3d6'
        ]
      }]
      }
    };   	 
  }
 	 

  componentDidMount() {

  }


  

    
  render() {
    return (
      <div className="graphmain">
        <div className="graphtop">
          <div className="graphleft">
            
            <Doughnut data={this.state.data} />
          </div>

           <div className="graphright">
            <h1 className="welcometext"> Welcome Demo </h1>
            <h3 className="Pmtext"> Your Project Manager </h3>
            <p> Sim Gill</p>
            <FontAwesome className='fa fa-facebook-square gfacebookicon ' size='1x' aria-hidden='true'/>
            <FontAwesome className='fa fa-twitter-square gtwittericon ' size='1x' aria-hidden='true'/>
            <FontAwesome className='fa fa-instagram finstagramicon ' size='1x' aria-hidden='true'/>
            <h3 className="Pmtext"> Your Budget </h3>
            <p> <span> $ </span> 1,350,000 </p>
           
          </div>

        </div>
      </div>
    );
  }




}
   
const mapStateToProps = (state) => ({


});

export default connect(mapStateToProps)(UserGraphs);