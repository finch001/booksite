/**
 * Created by finch on 7/21/17.
 */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import App from './component/App';
import NotFound from './component/NotFound';

const Routes = (props) => (
  <Router {...props}>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route path="*" component={NotFound}/>
    </Switch>
  </Router>
);

export default Routes;