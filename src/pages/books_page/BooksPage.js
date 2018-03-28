import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loader'
import Modal from 'react-modal'

import * as BooksAPI from '../../BooksAPI'

const customStylesModal = {
    content : {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '80%'
    },
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.4)'
    }
  }

  const customStylesLoader = {
    lines: 13,
    length: 20,
    width: 10,
    radius: 30,
    scale: 1.00,
    corners: 1,
    color: '#000',
    opacity: 0.25,
    rotate: 0,
    direction: 1,
    speed: 1,
    trail: 60,
    fps: 20,
    zIndex: 2e9,
    top: '50%',
    left: '50%',
    shadow: true,
    hwaccel: false,
    position: 'absolute' 
  }

Modal.setAppElement('#root')

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

    showDescription = (id) => {
        let book = this.state.books.filter(e => e.id === id)[0]
        this.openModal(book)
    }

    openModal = (item) => {
        this.setState({modalContent: item, isModalOpen: true})
    }

    closeModal = () => {
        this.setState({modalContent: {}, isModalOpen: false})
    }

    renderShelf = (shelf) => {
        return this.state.books.filter(e => e.shelf === shelf).map(item => this.renderBook(item))
    }

    renderBook = (item) => {
        return (
            <li key={item.id}>
                <div className="book">
                <div className="book-top">
                    <div className="book-cover" onClick={() => this.showDescription(item.id)} style={{ width: 128, height: 193, backgroundImage: 'url("'+item.imageLinks.thumbnail+'")' }}></div>
                    <div className="book-shelf-changer">
                    <select>
                        <option value="none" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                    </div>
                </div>
                <div className="book-title">{item.title}</div>
                <div className="book-authors">{item.authors.join(', ')}</div>
                </div>
            </li>
        )
    }

    renderWidgets(){
        return (
            <div>
                <Loader 
                    loaded={!this.state.isLoading} 
                    options={customStylesLoader}
                    className="spinner" />
                <Modal
                    isOpen={this.state.isModalOpen}                    
                    style={customStylesModal}
                    contentLabel={this.state.modalContent.title}>
                    <h1>{this.state.modalContent.title}</h1>
                    <p>{this.state.modalContent.description}</p>
                    <br />
                    <button className='modal-close' onClick={this.closeModal}>Close</button>
                </Modal>
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
                    <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {this.renderShelf('currentlyReading')}
                        </ol>
                    </div>
                    </div>
                    <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {this.renderShelf('wantToRead')}
                        </ol>
                    </div>
                    </div>
                    <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {this.renderShelf('read')}
                        </ol>
                    </div>
                    </div>
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