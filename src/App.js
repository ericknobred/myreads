import React from 'react'
import { Route } from 'react-router-dom'

import './App.css'

import SearchPage from './pages/search_page/SearchPage'
import BooksPage from './pages/books_page/BooksPage'

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        
          <Route path='/search' component={SearchPage} />
        
          <Route exact path='/' component={BooksPage} />
        
      </div>
    )
  }
}

export default BooksApp
