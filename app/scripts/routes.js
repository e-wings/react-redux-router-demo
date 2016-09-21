import React from 'react';
import { Router, Route, IndexRoute,hashHistory} from 'react-router';

import App from './containers/App'
import Home from './pages/home.jsx';
import AnotherPage from './pages/AnotherPage.jsx'
import NotFound from './pages/notFound.jsx';

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={ App }>
      <IndexRoute component={ Home }/>
      <Route path='home' component={ Home } />
      <Route path='another-page' component={ AnotherPage } />
      <Route path='*' component={NotFound}/>
    </Route>
  </Router>
);

export default routes;