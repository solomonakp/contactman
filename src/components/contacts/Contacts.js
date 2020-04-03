import React, { Component } from 'react';
// imp consumer
import { Consumer } from '../../context';
// routing link
import { Link } from 'react-router-dom';

// components
//  rmwc list
import { List, ListGroup } from '@rmwc/list';
// contact
import Contact from './Contact';
// Header
import Header from '../layout/Header';

// ContactModal
import ContactModal from './ContactModal';
// add contact button
import AddBtn from '../layout/AddBtn';
// stylesheet
import '../component-styles/contacts.scss';

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.mod = React.createRef();
  }
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;

          return (
            <React.Fragment>
              <div className='page'>
                {/* header component */}
                <Header brandName='ContactMan' />
                <div className='contact-list container'>
                  <List twoLine avatarList>
                    <ListGroup>
                      {contacts.map(contact => (
                        <Contact key={contact.id} contact={contact}></Contact>
                      ))}
                    </ListGroup>
                    {/* add contact button */}
                    <Link to='/form'>
                      <AddBtn />
                    </Link>
                    {/* modal component */}
                    {/* <Modal /> */}
                    <ContactModal />
                  </List>
                </div>
              </div>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
