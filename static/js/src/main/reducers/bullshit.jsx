export default function Reducer(
   state={
      fetching: false,
      fetched: false,
      isSiteChecked: false,
      site: [],
      error: null,
   }, action) {
   switch (action.type) {
      case "FETCH_SITE_PENDING": {
         return {...state, fetching: true}
         break;
      }
      case "FETCH_SITE_PENDING_REJECTED":{
         return {...state, fecthing: false, error: action.payload}
         break;
      }
      case "FETCH_SITE_FULFILLED": {
         return {
            ...state,
            fecthing: false,
            fetched: true,
            site: action.payload,
            }
         break;
      }
   }
   return state;
};
