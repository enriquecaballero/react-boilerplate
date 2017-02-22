/* @flow */

import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store from '../store/';
import {
  HelloWorld
} from '../components/';

console.info (location);

require ('font-awesome/less/font-awesome.less');

const App = ({ children }: any): any => children;

export default function () {
  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path={location.pathname} component={App}>
          <IndexRoute component={HelloWorld} />
        </Route>
      </Router>
    </Provider>
  );
}
