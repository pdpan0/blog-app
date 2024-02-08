import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import { Home } from './pages/Home';
import { Post } from './pages/Post';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/post/:slug">
          <Post />
        </Route>
        <Route path="*">
          <Home />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
)
