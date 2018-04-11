import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Select from 'react-select'

import CustomAlert from '../../components/CustomAlert'
import CustomLoader from '../../components/CustomLoader'
import Display from '../../components/Display'

import {searchTerms, shelfTitles} from '../../Constants'

import * as BooksAPI from '../../BooksAPI'

export default class SearchPage extends Component {

    state = {
        selectedOption: '',
        chosenOptions: searchTerms.map(item => { return {
            value: item,
            label: item
        }}),
        books: [],
        isLoading: true,
        queryUrl: window.location.pathname.split('/')[2],
        booksOnShelf: []
    }

    componentDidMount() {
        BooksAPI.getAll().then(books => {
            this.setState({
                booksOnShelf:books,
                isLoading:false
            })
        })
        if(this.state.queryUrl)
            this.searchBooks({value: this.state.queryUrl})
    }

    searchBooks = (selectedOption) => {
        this.setState({ selectedOption, isLoading: true })
        history.pushState({}, "", '/search/'+ selectedOption.value);
        BooksAPI.search(selectedOption.value).then(books => {      
            books = books.map(item => {
                let book = this.state.booksOnShelf.filter(e => e.id === item.id)[0]
                if(book)
                    item.shelf = book.shelf
                else
                    item.shelf = 'none'
                return item
            })
            console.log(books)
            this.setState({books: books, isLoading: false})
        }).catch(err =>{
            this.setState({isLoading: false})
            CustomAlert().error('Ocorreu um erro ao buscar os livros. Tente novamente em alguns instantes.')
        })
    }
    updateShelf = (book, shelf) => {
        this.setState({isLoading:true}) 
        BooksAPI.update(book, shelf).then(() => {
            this.setState({books: this.state.books.filter(e => e.id !== book.id), isLoading:false})
            let textShelf = shelfTitles.filter(e => e.key === shelf)[0].value
            CustomAlert().success('Moved to ' + textShelf + ' shelf.')
        })     
    }



    render() {
        const { selectedOption } = this.state
        const value = selectedOption && selectedOption.value
        
        return (
            <div>
                <CustomLoader loading={this.state.isLoading} />
                <div className="search-books">
                <div className="search-books-bar">
                <Link to='/' className="close-search">Close</Link>
                <div className="search-books-input-wrapper">
                    <Select
                        className='chosen'
                        name="query"
                        value={!value ? this.state.queryUrl : value}
                        onChange={this.searchBooks}
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