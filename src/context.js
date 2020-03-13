import React, { Component } from 'react';

// creating context
const Context = React.createContext();
// reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'delete-item':
      // returns an object  of:
      return {
        // array of state
        ...state,
        // array of all contacts except filtered one
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case 'set-item':
      // returns an object  of:
      const targetArr = state.contacts.filter(
        contact => contact.id === action.payload
      );
      const target = targetArr[0];
      return {
        // array of state
        ...state,
        // array of contact object
        currentTarget: target
      };
    case 'show-modal':
      // returns an object  of:
      return {
        // array of state
        ...state,
        // array of contact object
        showModal: !state.showModal
      };

    default:
      // returns state
      return state;
  }
};

export default class Provider extends Component {
  state = {
    contacts: [
      {
        id: 0,
        name: 'Chokor Solomon ',
        phone: '07036583505',
        email: 'solomonakp@gmail.com'
      },
      {
        id: 1,
        name: 'Mummy',
        phone: '080333009793',
        email: 'lizzychokor@gmail.com'
      },
      {
        id: 2,
        name: 'Egbedi Mudiaga ',
        phone: '08034950779',
        email: 'solomonak@gmail.com'
      },
      {
        id: 3,
        name: 'Dadson timi ',
        phone: '07062550779',
        email: 'timidadson@gmail.com'
      },
      {
        id: 4,
        name: 'Dadson rugba ',
        phone: '07033725361',
        email: 'rugbee2die4k@gmail.com'
      }
    ],
    showModal: false,
    currentTarget: null,

    dispatch: action => {
      // sets current context api state depending on action
      return this.setState(state => {
        console.log(reducer(state, action));
        return reducer(state, action);
      });
    }
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
