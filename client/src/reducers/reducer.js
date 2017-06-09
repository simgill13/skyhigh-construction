import {

  TOOGLE

} from '../actions/action';

const initialState = {
  toogle: true,
  image:'http://res.cloudinary.com/sds-images/image/upload/v1496601104/homedesign_qcg0xh.jpg'
};


console.log('REDUCER', TOOGLE)




export default (state = initialState, action) => {
	switch(action.type) {
      
		case TOOGLE:
		return Object.assign({}, state, {
		    toogle:false
		}) 






		default:
	    return state;
	}
}
