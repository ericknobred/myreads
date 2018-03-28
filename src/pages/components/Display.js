import React, { Component } from 'react'

import BookShelf from './BookShelf'

export default class Display extends Component{
    render(){
        return (
            <div>
                {
                    this.props.shelfs.map((item,index) => {
                        return <BookShelf key={index} books={this.props.books} shelf={item} openModal={this.props.openModal} updateShelf={this.props.updateShelf} />
                    })
                } 
            </div>
        )
    }
}