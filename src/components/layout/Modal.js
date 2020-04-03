// mini note on modal animation
// display block should be added via classes not through javascript

import React, { Component } from 'react';
import PropTypes from 'prop-types';

// importing sass
import '../component-styles/modal.scss';

const toggler = (state, key) => {
  return {
    state,
    key: !state[key]
  };
};
class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggler: key => {
        // sets current context api state depending on action
        return this.setState(state => {
          // console.log(reducer(state, action));
          return toggler(state, key);
        });
      }
    };
    this.modal = React.createRef();
  }

  componentDidUpdate() {
    const modal = this.modal.current;
    if (this.props.toggle === true) {
      this.modalOpen(modal);
    } else if (this.props.toggle === false) {
      this.modalClose(modal);
    }
    console.log(this.props);
  }
  modalOpen = modal => {
    // const modal = document.querySelector('.my-modal');
    const animate = new Promise(resolve => {
      // getting modal card
      const modalCard = modal.firstElementChild.firstElementChild;
      // setting modal display
      modal.style.display = 'block';
      // animating modal
      modal.style.animation = 'modal-in 250ms forwards';
      console.log(modalCard);
      // returning modal card as resolve
      resolve(modalCard);
    });
    animate.then(modalCard => {
      // transition card in
      modalCard.classList.add('card-in');
    });
  };

  // modal close func
  modalClose = modal => {
    // const modal = document.querySelector('.my-modal');
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
  };

  render() {
    return (
      <div className='my-modal' ref={this.modal} onClick={this.props.close}>
        {this.props.children(this.state)}
      </div>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.func.isRequired
};

export default Modal;
