import AppDispatcher from '../AppDispatcher';
import * as types from './ActionTypes';

const ServerActions = {
  receiveSearchResults(results, type) {
    AppDispatcher.dispatch({
      type: types.RECEIVE_SEARCH_RESULTS,
      payload: { results, type}
    });
    console.log('SERVERACTIONresults, type: ', results, type)
  },

};

export default ServerActions;
