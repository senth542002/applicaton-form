import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router'
import { browserHistory } from 'react-router'
import routes from './routes'
import './index.css'
//import App from './App'
import * as serviceWorker from './serviceWorker'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'

ReactDOM.render(
  //<App />, document.getElementById('root')
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('root')
)

serviceWorker.unregister()
