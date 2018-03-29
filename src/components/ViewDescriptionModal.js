import React, { Component } from 'react'



import Modal from 'react-modal'
const customStylesModal = {
    content : {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '80%',
      maxHeight: '500px',
      
    },
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.4)',
        overflowY: 'hidden'
    }
  }

Modal.setAppElement('#root')
export default class ViewDescriptionModal extends Component {

   render() {
        return (
            <Modal
                isOpen={this.props.isOpen}                    
                style={customStylesModal}
                contentLabel={this.props.book.title}
                onRequestClose={this.props.closeModal}>                    
                <h1>{this.props.book.title}</h1>
                <p>{this.props.book.description}</p>
                <br />
                <button className='modal-close' onClick={this.props.closeModal}>Close</button>
            </Modal>
        )
    }
}