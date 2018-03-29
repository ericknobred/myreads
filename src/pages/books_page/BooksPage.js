import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import * as BooksAPI from '../../BooksAPI'
import CustomLoader from '../components/CustomLoader'
import Display from '../components/Display'
import ViewDescriptionModal from '../components/ViewDescriptionModal'
import {shelfsDisplay} from '../../Constants'

export default class BooksPage extends Component {

    state = {
        books: [],
        isLoading: true,
        isModalOpen: false,
        modalContent: {}
    }

    constructor(props){
        super(props)
        
        BooksAPI.getAll().then(books => {
            this.setState({
                books:books,
                isLoading:false
            })
        })
    }

    openModal = (item) => {
        this.setState({modalContent: item, isModalOpen: true})
    }

    closeModal = () => {
        this.setState({modalContent: {}, isModalOpen: false})
    }

    renderWidgets(){
        return (
            <div id='widgets'>
                <CustomLoader isLoading={this.state.isLoading} />
                <ViewDescriptionModal
                    isOpen={this.state.isModalOpen}                    
                    book={this.state.modalContent}
                    closeModal={this.closeModal}/>
            </div>

        )
    }

    updateShelf = (book, shelf) => {
        this.setState({isLoading:true}) 
        BooksAPI.update(book, shelf).then(() => {
            let newBooks = this.state.books.map(item => {
                if(item.id === book.id)
                    item.shelf = shelf
                return item
            })        
            this.setState({books: newBooks,isLoading:false})
        })        
    }

    render() {
        return (
            <div className='books'>
                {this.renderWidgets()}
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">
                        <div>
                            <Display books={this.state.books} shelfs={shelfsDisplay} openModal={this.openModal} updateShelf={this.updateShelf}  mode="list" />
                        </div>
                    </div>
                    <div className="open-search">
                        <Link to='/search'>Add a book</Link>
                    </div>
                </div>
            </div>
        );
    }
}