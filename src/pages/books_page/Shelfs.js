import React, { Component } from 'react'

import BookShelf from './BookShelf'

export default class Shelfs extends Component{
    render(){
        console.log(this.props.shelfs)
        return (
            <div>
                {
                    this.props.shelfs.map((item,index) => {
                        return <BookShelf key={index} books={this.props.books} shelf={item} openModal={this.props.openModal} />
                    })
                } 
            </div>
        )
    }
}