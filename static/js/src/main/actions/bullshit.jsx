import api from '../../utilities/api';

export function post(value) {
   return function(dispatch) {
         console.log('nut')
         api.post('/api/checker/create',{
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
