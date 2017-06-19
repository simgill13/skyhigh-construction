import {

  TOOGLE,
  INVALID_CRED,
  LOGGED_IN,
  LOGGED_OUT,
  VALID_CRED

} from '../actions/action';

const initialState = {
  toogle: true,
  image:'http://res.cloudinary.com/sds-images/image/upload/v1496601104/homedesign_qcg0xh.jpg',
  InvalidCred:false,
  loggenIn:false
};


console.log('REDUCER', TOOGLE)




export default (state = initialState, action) => {
	switch(action.type) {
      
		case TOOGLE:
		return Object.assign({}, state, {
		    toogle:false
		}) 

		case INVALID_CRED:
		return Object.assign({}, state, {
		    InvalidCred:true
		}) 
		case LOGGED_IN:
		return Object.assign({}, state, {
		    loggenIn:true
		})
		case LOGGED_OUT:
		return Object.assign({}, state, {
		    loggenIn:false
		})
		case VALID_CRED:
		return Object.assign({}, state, {
		    InvalidCred:false
		})  





		default:
	    return state;
	}
}
