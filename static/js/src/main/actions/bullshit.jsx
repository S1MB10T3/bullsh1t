import api from '../../utilities/api';

export function get(value) {
   return function(dispatch) {
      if(value == null || value == ''){
         api.get('/api/items/')
            .then((response) => {
               dispatch({type: "FETCH_SITE_FULFILLED", payload: response.data})
            })
            .catch((err) => {
               dispatch({type: "FETCH_SITE_ERROR", payload: err})
            })
      }else {
         api.get('/api/items/?q='+value)
            .then((response) => {
               dispatch({type: "FETCH_SITE_FULFILLED", payload: response.data})
            })
            .catch((err) => {
               dispatch({type: "FETCH_SITE_ERROR", payload: err})
            })
      }
      }
}
