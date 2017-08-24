import React from 'react';
import {connect} from 'react-redux';
// import {Link} from 'react-router';




// import FontAwesome from 'react-fontawesome';
import $ from 'jquery';






class UserHomePics extends React.Component {
  // constructor(props) {
  //   super(props);     
   
  // }
   
 
    componentDidMount() {
    $(function(){
      cycle();  
      $('body :not(.nav), i:not(.ion-navicon)').click(function(){
      });

      function cycle(){
        var hello = [
        '"Lorem ipsum dolor sit amet, luctus amet rutrum, commodo, ac in tellus sit elit leo. Integer amet maecenas semper pretium.Lorem ipsum dolor sit amet, luctus amet rutrum, commodo, ac in tellus sit elit leo. Integer amet maecenas semper pretium"',
        '"Inceptos a, malesuada potenti lacus et dolores. Aliquam in tristique pellentesque expedita dolor urna"',
        
        
      ]
        var x = 0;
        setInterval(language, 3000);
        function language(){
          $('.hello').fadeOut(1000, function(){
            $(this).text(hello[x + 1]);
            $(this).fadeIn(1000);
            x++;        
            if (x > hello.length - 2) {
              x = -1;
            }
          }
        )};
      }
      
    });
  }


    render() {
       
      return (
        <div className="UserHomePics">
          <div className="usertopheading">
           <h1 className="tsttext projectsummary"> <span className="userslaxh" > / </span> Current Status </h1>
          </div>
          <div className="userbottompics">
            <div className="bottominner">
              <div className="userleftpics">
                <div className="uleftTopRow">
                  <div className="topleftsleftdiv">
                  </div>
                  <div className="topleftsrightdiv">
                  </div>
                </div>
                <div className="uleftbottompRow">
                  <div className="bottomrowleftdiv">
                  </div>
                  <div className="bottomrowrightdiv">
                  </div>
                </div>
              </div>

              <div className="userrightpics">
              <h3 className="liveupdatestext"> Live Updates </h3>
              <p className="hello"> </p>
              </div>
            </div>
          </div>


        </div>

        )


    }
    
}







export default connect()(UserHomePics);