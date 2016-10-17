import API from '../API';
import AppDispatcher from '../AppDispatcher';
import * as types from '../actions/ActionTypes';

const BeerActions = {
  searchBeer: API.searchBeer,
  searchAllBeer: API.searchAllBeer,
  clearStore () {
    AppDispatcher.dispatch({
      type: types.CLEAR_STORE,
      payload: { types }
    });
  }

}

export default BeerActions;
