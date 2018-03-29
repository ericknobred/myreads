import React, { Component } from 'react'

export default class Book extends Component{

    handlerSelectShelf = (element) => {
        this.props.updateShelf(this.props.item, element.target.value)
    }

    componentWillMount(){
        if(!this.props.item.authors)
            this.props.item.authors = ["Anonymous"]        
        if(!this.props.item.imageLinks.thumbnail)
            this.props.item.imageLinks.thumbnail = 'http://via.placeholder.com/123x193'
    }

    render(){
        return(
             <li draggable="true">
                <div className="book">
                    <div className="book-top">
                        <div className={"book-cover "+ (this.props.openModal ? "book-openModal" : "")} onClick={() => (this.props.openModal ? this.props.openModal(this.props.item): false)} style={{ width: 128, height: 193, backgroundImage: 'url("'+this.props.item.imageLinks.thumbnail+'")' }}></div>
                        <div className="book-shelf-changer">
                        <select defaultValue={this.props.item.shelf} onChange={this.handlerSelectShelf}>
                            <option value="search" disabled>{this.props.mode === "list" ? "Move to..." : "Add to..."}</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
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
