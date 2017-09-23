import { combineReducers } from 'redux';

import BullshitReducer from './bullshit';

const allReducers = combineReducers({
   bullshit: BullshitReducer,
});

export default allReducers;
