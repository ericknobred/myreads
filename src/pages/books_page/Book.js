import React, { Component } from 'react'

export default class Book extends Component{

    handlerSelectShelf = (element) => {
        this.props.updateShelf(this.props.item, element.target.value)
    }

    render(){
        return(
            
                <li draggable="true">
                    <div className="book">
                    <div className="book-top">
                        <div className="book-cover" onClick={() => this.props.openModal(this.props.item)} style={{ width: 128, height: 193, backgroundImage: 'url("'+this.props.item.imageLinks.thumbnail+'")' }}></div>
                        <div className="book-shelf-changer">
                        <select onChange={this.handlerSelectShelf}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading" selected={this.props.item.shelf === 'currentlyReading'} >Currently Reading</option>
                            <option value="wantToRead" selected={this.props.item.shelf === 'wantToRead'}>Want to Read</option>
                            <option value="read" selected={this.props.item.shelf === 'read'}>Read</option>
                            <option value="none" selected={this.props.item.shelf === 'none'}>None</option>
                        </select>
                        </div>
                    </div>
                    <div className="book-title">{this.props.item.title}</div>
                    <div className="book-authors">{this.props.item.authors.join(', ')}</div>
                    </div>
                </li>
        )
    }
}