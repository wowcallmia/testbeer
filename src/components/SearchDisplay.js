import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import uuid from 'uuid';

import BeerStore from '../stores/BeerStore';
import BeerActions from '../actions/BeerActions';

export default class SearchDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: BeerStore.getAllSearchResults()

    };

    this._onChange = this._onChange.bind(this);

   }

  componentWillMount() {
    BeerStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    BeerStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      results: BeerStore.getAllSearchResults()

    });
      console.log('results: ', results);
  }



  render() {
    const {results} = this.state;
    console.log(results);


    return (


        <div>
          <div className="row">
            <hr />
            {results ?
              <div>
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <td>Random Results</td>
                    </tr>
                  </thead>
                  <tbody>

                    <tr>

                      <td>

                        Name :{results.data.name}
                      </td>
                      <td className="stats"><br/>
                        <b>IsOrganic? </b>{results.data.glass.createDate}<br />
                        {/* <b>Style </b>{results.data.style.name}<br /> */}
                        <b>UpdateDate </b>{results.data.style.updateDate}

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
                  </tbody>
                </table>
              </div>
            : '...'  }
              </div>
              </div>
      );
    }
  }
