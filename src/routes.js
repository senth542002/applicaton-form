import React from 'react'
import { Route, IndexRoute, Router, browserHistory } from 'react-router'
import App from './App'
import ApplicationForm from './components/views/application/ApplicationForm'
import SearchForm from './components/views/search/SearchForm'
import SubmissionSuccess from './components/views/success/SubmissionSuccess'
import HomeForm from './components/views/home/HomeForm'
import ViewApplicationForm from './components/views/application/ViewApplicationForm'

export default (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={HomeForm} />
      <Route path='success' component={SubmissionSuccess} />
      <Route path='/create' component={ApplicationForm} />
      <Route path='/search' component={SearchForm} />
      <Route path='viewApplication' component={ViewApplicationForm} />
      <Route path='*' component={HomeForm} />
    </Route>
  </Router>
)
