import React from 'react'
import ReactDOM from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css';

import { Home } from './pages/Home';
import { Post } from './pages/Post';

/**
 * TODO
 * configurar React Router e passar o post slug por URL
 */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Post />
  </React.StrictMode>,
)
