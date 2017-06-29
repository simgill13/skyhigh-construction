import {

  TOOGLE,
  INVALID_CRED,
  LOGGED_IN,
  LOGGED_OUT,
  VALID_CRED,
  CLICKED_PROJECTIONS,
  CLICKED_DASH

} from '../actions/action';

const initialState = {
	test:"this is reduver test",
  toogle: true,
  image:'http://res.cloudinary.com/sds-images/image/upload/v1496601104/homedesign_qcg0xh.jpg',
  InvalidCred:false,
  loggenIn:false,
  dashboard:true,
  hello:"true"
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

		case CLICKED_PROJECTIONS:
		return Object.assign({}, state, {
		    dashboard:false
		}) 

		case CLICKED_DASH:
		return Object.assign({}, state, {
		    dashboard:true
		})


		default:
	    return state;
	}
}
