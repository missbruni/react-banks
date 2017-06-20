import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, IndexRedirect, browserHistory } from 'react-router';
import registerServiceWorker from './registerServiceWorker';

import Home from './pages/Home';
import Login from './pages/Login';
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/'>
      <IndexRoute component={Home} />
    </Route>
    <Route path='/login'>
      <Route path=':bankId' component={Login} />
    </Route>
  </Router>,
  document.getElementById('root')
);

registerServiceWorker();
