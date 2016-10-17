import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import uuid from 'uuid';

import BeerStore from '../stores/BeerStore';
import BeerActions from '../actions/BeerActions';

export default class SearchDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: BeerStore.getAllBeerSearchResults()

    };
console.log('t1112121212his.state: ', this.state)
    this._onChange = this._onChange.bind(this);

   }

  componentWillMount() {
    let {term} = 'beer';
    BeerStore.startListening(this._onChange);
    BeerActions.searchAllBeer(term, null);
  }

  componentWillUnmount() {
    BeerStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      results: BeerStore.getAllBeerSearchResults()

    });
      console.log('results: ', results);
  }



  render() {
    const {results} = this.state;
    console.log('DISPLAYRESULTS',results);

    return (


        <div>
          <div className="row">
            <hr />

            <div>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <td>Random Results</td>
                  </tr>
                </thead>
                <tbody>
                  {results.map((current, index) => (
                    <tr>

                      <td>

                        Name :{current.results.data.name}
                      </td>
                      <td className="stats"><br/>
                        <b>IsOrganic? </b>{current.results..data.glass.createDate}<br />
                        <b>Style </b>{curesults.data.name}<br />
                        <b>UpdateDate </b>{current.results.data.style.updateDate}

                      </td>
                      <td className="results-text">
                        <img src={results.data.labels.icon}/>
                      </td>
                      <td>
                        <br />
                        <button

                          className="btn btn-info">
                          <span className="glyphicon glyphicon-heart"></span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </div>
      );
    }
  }
