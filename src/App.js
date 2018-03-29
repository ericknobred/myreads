import React from 'react'
import { Route } from 'react-router-dom'
import Alert from 'react-s-alert'


import 'react-select/dist/react-select.css'
import 'react-s-alert/dist/s-alert-default.css'
import 'react-s-alert/dist/s-alert-css-effects/bouncyflip.css'

import SearchPage from './pages/search_page/SearchPage'
import BooksPage from './pages/books_page/BooksPage'

import './App.css'

class BooksApp extends React.Component {

  
  render() {
    return (
      <div className="app">
          <Route path='/search' component={SearchPage} />
          <Route exact path='/' component={BooksPage} />
          <Alert stack={{limit: 3, spacing: 20}} />
      </div>
    )
  }
}

export default BooksApp
