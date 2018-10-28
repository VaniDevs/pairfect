// import pairPerfectApi from '../../api/pairPerfectApi';
import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadSearchResultsSuccess(results) {
  return {type: types.LOAD_SEARCH_RESULTS_SUCCESS, results};
}

// Functions below handle asynchronous calls.
// Each returns a function that accepts a dispatch.
// These are used by redux-thunk to support asynchronous interactions.
export function searchFor(value) {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    //return pairPerfectApi.search(value).then(courses => {
      dispatch(loadSearchResultsSuccess([]));
    //}).catch(error => {
      //throw(error);
    //});
  };
}
