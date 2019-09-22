import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import App from './App';
import ApplicationForm from './components/views/application/ApplicationForm';
import SubmissionSuccess from './components/views/success/SubmissionSuccess';

export default (
<Router history={browserHistory}>
  <Route path='/' component={App}>
    <IndexRoute component={ApplicationForm} />
    <Route path='success' component={SubmissionSuccess} />
    <Route path='*' component={ApplicationForm} />
  </Route>
 </Router>
);