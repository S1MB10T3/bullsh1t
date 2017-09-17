import api from '../../utilities/api';

export function post(value) {
   return function(dispatch) {
         api.post('/api/checker/',{
            url: value
            })
            .then( function (response)  {
               console.log('response');
               dispatch({type: "FETCH_SITE_FULFILLED", payload: response.data})
            })
            .catch( function (err)  {
               console.log('jawn broke');
               dispatch({type: "FETCH_SITE_ERROR", payload: err})
            })
          }
   }
