import React, { Component} from 'react';
import SearchDisplay from './SearchDisplay';
import BeerActions from '../actions/BeerActions';

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.search = this.search.bind(this);
  }

  search() {

    let term = 'random';

    BeerActions.searchBeer(term, null);

  }

  render() {
    return (
      <div>
        <div className="row">
          <br />
          <div className="col-lg-6">
            <div className="input-group">
              <span
                className="input-group-addon"
                id="basic-addon1">Random Beer</span>
              <span className="input-group-btn">
                <button
                  className="btn btn-info"
                  onClick={this.search}
                  type="button">
                  <span className="glyphicon glyphicon-search"></span>
                </button>
              </span>
            </div>
          </div>
        </div>
        <SearchDisplay />

        <div>

        </div>
      </div>
    );
  }
}
