
import React from 'react';
import {connect} from 'react-redux';




class App extends React.Component {
   

 

    render() {
       
        return (

            <div className="app">
             <h1> Test </h1>
            </div>
        );
    }
}
   


export default connect()(App);
