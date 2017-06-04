import {

  

} from '../actions/action';

const initialState = {
  test: "test from reducer"
};







export default (state = initialState, action) => {
	switch(action.type) {
      
		default:
	    return state;
	}
}
