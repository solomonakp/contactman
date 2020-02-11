import React, { Component } from 'react';
// components
// importing rmwc list
import { List, ListGroup } from '@rmwc/list';
// importing contacts
import Contact from './Contact';

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 0,
        name: 'Chokor solomon',
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
        name: 'Dadson rugba',
        phone: '07033725361',
        email: 'rugbee2die4k@gmail.com'
      }
    ]
  };
  render() {
    const { contacts } = this.state;
    return (
      <List twoLine avatarList>
        <ListGroup>
          {contacts.map(function(contact, index) {
            return <Contact key={contact.id} contact={contact}></Contact>;
          })}
        </ListGroup>
      </List>
    );
  }
}

export default Contacts;
