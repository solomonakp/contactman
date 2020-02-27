import React, { Component } from 'react';

// consumer
import { Consumer } from '../context';

// importing sass
import './component-styles/modal.scss';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static openModal() {
    const modal = document.querySelector('.my-modal');
    const animate = new Promise(resolve => {
      // getting modal card
      const modalCard = modal.firstElementChild.firstElementChild;
      // setting modal display
      modal.style.display = 'block';
      // animating modal
      modal.style.animation = 'modal-in 250ms forwards';
      // returning modal card as resolve
      resolve(modalCard);
    });
    animate.then(modalCard => {
      // transition card in
      modalCard.classList.add('card-in');
    });
  }

  // modal close func
  static modalClose = () => {
    const modal = document.querySelector('.my-modal');
    // animation promise
    const animate = new Promise(resolve => {
      // getting modal card
      const modalCard = modal.firstElementChild.firstElementChild;
      // transition  modal card out
      modalCard.classList.remove('card-in');
      // changing transform-origin
      modal.classList.add('reverse');
      // returning modal
      resolve(modal);
    });
    animate
      .then(modal => {
        // animating modal out
        modal.style.animation = 'modal-out 250ms ease-in 300ms forwards';
        return modal;
      })
      .then(modal => {
        // setting display to none after animation ends(550ms)
        setTimeout(() => {
          modal.style.display = 'none';
          // reverting transform-origin
          modal.classList.remove('reverse');
        }, 600);
      });
    // dispatch({ type: 'show-modal' });
  };
  hideDetails = (modalClose, dispatch, e) => {
    if (
      e.target.classList.contains('modal-position') ||
      e.target.classList.contains('modal-close')
    ) {
      // closing modal
      modalClose();
      // toggling showModal state
      dispatch({ type: 'show-modal' });
    }
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { showModal, currentTarget, dispatch } = value;

          return (
            <React.Fragment>
              <div
                className='my-modal'
                // binding arguments dispatch and modalClose func to func
                onClick={this.hideDetails.bind(
                  this,
                  Modal.modalClose,
                  dispatch
                )}
              >
                <div className='modal-position'>
                  <div className='modal-content-type-2'>
                    <span className='close-btn modal-close'>×</span>
                    {/* this portion runs only if state is true */}
                    {showModal ? (
                      <React.Fragment>
                        {Modal.openModal()}
                        <div className='modal-head '>
                          <span className='head-text'>
                            {currentTarget.name}
                          </span>
                        </div>
                        <button className='modal-delete-btn'>
                          Delete Post
                        </button>
                      </React.Fragment>
                    ) : null}
                    {/* dynamic portion end  */}
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Modal;
