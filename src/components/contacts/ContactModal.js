import React, { Component } from 'react';

import { Consumer } from '../../context';
import Modal from '../layout/Modal';

class ContactModal extends Component {
  closeModal = (dispatch, e) => {
    console.log(e.target);
    if (
      e.target.classList.contains('modal-position') ||
      e.target.classList.contains('modal-close')
    ) {
      // toggling showModal state
      dispatch({ type: 'toggle', payload: 'openContact' });
    }
  };
  render() {
    return (
      <Consumer>
        {value => {
          const { openContact, currentContact, dispatch } = value;
          return (
            <Modal
              toggle={openContact}
              close={this.closeModal.bind(this, dispatch)}
            >
              {state => {
                return (
                  <div className='modal-position'>
                    <div className='modal-content-type-2'>
                      <span className='close-btn modal-close'>×</span>
                      <div className='modal-head '>
                        <span className='head-text'>
                          {currentContact && currentContact.name}
                          {/* {openContact ? currentContact.name : null} */}
                        </span>
                      </div>
                      <button className='modal-delete-btn'>Delete Post</button>
                    </div>
                  </div>
                );
              }}
            </Modal>
          );
        }}
      </Consumer>
    );
  }
}

export default ContactModal;
