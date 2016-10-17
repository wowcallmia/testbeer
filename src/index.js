import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import ViewAll from './components/ViewAll'
import Layout from './components/Layout';
import Search from './components/Search';



import './stores/BeerStore';

render(
  <div>
    <div id="background"></div>
    <div id="content">
      <Router history={browserHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Search} />
          <Route path="/Beer" component={ViewAll} />
        </Route>
      </Router>
    </div>
  </div>,
  document.getElementById('root')
);
