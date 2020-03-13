import React, { Component } from 'react';
// imp consumer
import { Consumer } from '../../context';
// components
//  rmwc list
import { List, ListGroup } from '@rmwc/list';
// contact
import Contact from './Contact';
// modL
import Modal from '../layout/Modal';

class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <List twoLine avatarList>
                <ListGroup>
                  {contacts.map(contact => (
                    <Contact key={contact.id} contact={contact}></Contact>
                  ))}
                </ListGroup>
                {/* modal component */}
                <Modal />
              </List>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
