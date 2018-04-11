import React, { Component } from 'react'
import PropTypes from 'prop-types'

import BookShelf from './BookShelf'

class Display extends Component{
    render(){
        return (
            <div>
                {
                    this.props.shelfs.map((item,index) => {
                        return <BookShelf key={index} books={this.props.books} shelf={item} openModal={this.props.openModal} updateShelf={this.props.updateShelf} mode={this.props.mode} />
                    })
                } 
            </div>
        )
    }
}


Display.propTypes = {
    books: PropTypes.array.isRequired,
    shelfs: PropTypes.array.isRequired,
    mode: PropTypes.string.isRequired,
    openModal: PropTypes.func,
    updateShelf: PropTypes.func.isRequired
}

export default Display
