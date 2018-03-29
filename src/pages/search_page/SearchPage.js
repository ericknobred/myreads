import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

import CustomLoader from '../components/CustomLoader'
import Display from '../components/Display'
import {searchTerms} from '../../Constants'
import * as BooksAPI from '../../BooksAPI'

export default class SearchPage extends Component {

    state = {
        selectedOption: '',
        chosenOptions: searchTerms.map(item => { return {
            value: item,
            label: item
        }}),
        books: [],
        isLoading: false
    }

    
    handleChange = (selectedOption) => {
        this.setState({ selectedOption, isLoading: true })
        BooksAPI.search(selectedOption.value).then(books => {
            this.setState({books: books, isLoading: false})
            console.log(this.state.books)
        })
    }

    updateShelf = (book, shelf) => {
        this.setState({isLoading:true}) 
        BooksAPI.update(book, shelf).then(() => {
            this.setState({books: this.state.books.filter(e => e.id !== book.id), isLoading:false})
        })     
    }

    render() {
        const { selectedOption } = this.state
        const value = selectedOption && selectedOption.value
        return (
            <div>
                <CustomLoader isLoading={this.state.isLoading} />
                <div className="search-books">
                <div className="search-books-bar">
                <Link to='/' className="close-search">Close</Link>
                <div className="search-books-input-wrapper">
                    <Select
                        className='chosen'
                        name="query"
                        value={value}
                        onChange={this.handleChange}
                        placeholder="Search by title or author options"
                        options={this.state.chosenOptions}
                    />
                </div>
                </div>
                <div className="search-books-results">
                <ol className="books-grid">
                    <Display books={this.state.books} shelfs={["search"]} updateShelf={this.updateShelf} mode="search" />
                </ol>
                </div>
            </div>
          </div>
        )
    }
}