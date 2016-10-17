import AppDispatcher from '../AppDispatcher';
import { EventEmitter } from 'events';
import * as types from '../actions/ActionTypes';

let _searchResults = undefined;

class BeerStore extends EventEmitter {
  constructor() {
    super();


    AppDispatcher.register(action => {
      let {type, payload } = action;
      switch(type) {
        case(types.RECEIVE_SEARCH_RESULTS):

          _searchResults = payload;
          console.log('STOREpayload: ', payload)
          this.emit('CHANGE');
          break;
      }
    })
  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }

  getAllSearchResults() {
    return _searchResults;
  }


}

export default new BeerStore();
