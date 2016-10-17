import React, { Component } from 'react';
import {Link} from 'react-router';

export default class Layout extends Component {
  render() {
    return (
      <div className="container">
        <span className="text-center"
          id="page-title">Beer App
        </span>
        <div className="row">
          <ul className="nav nav-tabs">
            <li role="presentation">
              <Link to="/"
                className=
                {this.props.location.pathname === '/' ? 'btn btn-info' : null}>
                Random Beer
              </Link>
            </li>
            <li role="presentation">
              <Link to="/beer"
                activeClassName="btn btn-info">All Beers
              </Link>
            </li>
          </ul>
        </div>
        {this.props.children}
      </div>
    );
  }
}
