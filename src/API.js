import axios from 'axios';
import ServerActions from './actions/ServerActions';

const API = {
  searchBeer() {
    axios.get(`/api/beer/search`)
      .then(res =>
         ServerActions.receiveSearchResults(res.data))
      .catch(console.error);
  }
}
  export default API;
