import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Book from './Book'

import {shelfTitles} from '../../Constants'

export default class BookShelf extends Component{
    render(){
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelfTitles.filter(e => e.key === this.props.shelf)[0].value}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.filter(e => e.shelf === this.props.shelf || this.props.mode === "search").map(item => 
                            <Book key={item.id} item={item} openModal={this.props.openModal} updateShelf={this.props.updateShelf} mode={this.props.mode} />
                        )}
                        {
                            this.props.books.filter(e => e.shelf === this.props.shelf || this.props.mode === "search").length === 0  &&(
                                this.props.mode === "list" ? 
                                    (<p>There are no books in this section, <Link to='/search'>click here</Link> to add a book.</p>) :
                                    (<p>Nothing to show, try use the search input.</p>)
                        )
                        }                        
                    </ol>
                </div>
            </div>
        )
    }
}
