import base64 from 'base-64';
import {hashHistory} from 'react-router';


export const TOOGLE = 'TOOGLE';
export const toogle = () => ({
  type: TOOGLE
})


export const HIDE_LOGIN = 'HIDE_LOGIN';
export const hideLogin = () =>({
  type: HIDE_LOGIN,
})

export const INVALID_CRED = 'INVALID_CRED';
export const InvalidCred = () =>({
  type: INVALID_CRED,
})
export const VALID_CRED = 'VALID_CRED';
export const validCred = () =>({
  type: VALID_CRED,
})

export const LOGGED_IN = 'LOGGED_IN';
export const LoggedIn = () =>({
  type: LOGGED_IN,
})

export const LOGGED_OUT = 'LOGGED_OUT';
export const LoggedOut = () =>({
  type: LOGGED_OUT,
})


export const loginUser = (email, password) => dispatch => {
  const encodedLoginInfo = base64.encode(`${email.toLowerCase()}:${password}`)
  return fetch(`/api/usersky/validate/${email}`, {
    headers: {
        "Authorization": "Basic " + encodedLoginInfo,
    },
    // credentials: 'same-origin',
  })
  .then(response => {
   return response.json() 
  })
  .then(json => {
  	console.log('returned login obj', json) 
     dispatch(validCred())
    dispatch(LoggedIn())
  	hashHistory.push('/');
  })
  .catch(err => {
    if(err){
      console.log(" invalid credentials")
      dispatch(InvalidCred())
    }

    console.log(err);
   
  })
}