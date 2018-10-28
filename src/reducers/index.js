import { combineReducers } from 'redux';
import search from './searchResultsReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  search,
  ajaxCallsInProgress
});

export default rootReducer;
