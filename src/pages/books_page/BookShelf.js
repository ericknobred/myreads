import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Book from './Book'

const shelfTitles = [
    {key: 'currentlyReading', value:'Currently Reading'},
    {key: 'wantToRead', value:'Want to Read'},
    {key: 'read', value:'Read'}
]

export default class BookShelf extends Component{
    render(){
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelfTitles.filter(e => e.key === this.props.shelf)[0].value}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.filter(e => e.shelf === this.props.shelf).map(item => 
                            <Book key={item.id} item={item} openModal={this.props.openModal} updateShelf={this.props.updateShelf} />
                        )}
                        {
                            this.props.books.filter(e => e.shelf === this.props.shelf).length === 0 &&(
                           <p>There are no books in this section, <Link to='/search'>clique here</Link> to add a book.</p>
                        )
                        }                        
                    </ol>
                </div>
            </div>
        )
    }
}
