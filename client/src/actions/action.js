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






export const loginUser = (email, password) => dispatch => {
  const encodedLoginInfo = base64.encode(`${email.toLowerCase()}:${password}`)
  return fetch(`/api/usersky/validate/${email}`, {
    headers: {
        "Authorization": "Basic " + encodedLoginInfo,
    },
    // credentials: 'same-origin',
  })
  .then(response => {
    if(!response){
      alert('invalid credentials')
    }
    return response.json();
    
  })
  .then(json => {
  	console.log('returned login obj', json) 
  	hashHistory.push('/LoginHome');

  	

  })
  .catch(err => {
    
    console.log(err);
   
  })
}