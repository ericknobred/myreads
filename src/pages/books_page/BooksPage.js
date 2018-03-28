import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import * as BooksAPI from '../../BooksAPI'
import CustomLoader from '../components/CustomLoader'

import ViewDescriptionModal from './ViewDescriptionModal'
import Shelfs from './Shelfs'

const shelfsDisplay = [
    'currentlyReading',
    'wantToRead',
    'read'
]

export default class BooksPage extends Component {

    state = {
        books: [],
        isLoading: true,
        isModalOpen: false,
        modalContent: {}
    }

    constructor(props){
        super(props);
        
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
                            <Shelfs books={this.state.books} shelfs={shelfsDisplay} openModal={this.openModal} />
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