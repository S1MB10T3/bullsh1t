import api from '../../utilities/api';

export function post(value) {
   return function(dispatch) {
      if(value == null || value == ''){
         api.post('/api/checker/')
            url: value
            .then((response) => {
               dispatch({type: "FETCH_SITE_FULFILLED", payload: response.data})
            })
            .catch((err) => {
               dispatch({type: "FETCH_SITE_ERROR", payload: err})
            })
          }
      }
}
