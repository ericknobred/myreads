import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'

import './App.css'

import SearchPage from './pages/search_page/SearchPage'
import BooksPage from './pages/books_page/BooksPage'

class BooksApp extends React.Component {

  constructor(props){
    super(props)
    BooksAPI.getAll().then(books => console.log(books))
    
  }

  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    
  }

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
