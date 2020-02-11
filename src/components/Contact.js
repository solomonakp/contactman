import React, { Component } from 'react';
// class used for typechecking
import PropTypes from 'prop-types';
// importing rmwc list
import { ListItem, ListItemGraphic } from '@rmwc/list';
// importing rmwc avatar
import { Avatar } from '@rmwc/avatar';
import '@material/list/dist/mdc.list.css';
// component styles
import './component-styles/contact.css';

/*
 extending contact from component which 
 is the parent of all components 
 */
class Contact extends Component {
  // for typechecking the props
  static protoTypes = {
    contact: PropTypes.object.isRequired
  };
  render() {
    const { name } = this.props.contact;
    return (
      <ListItem>
        <ListItemGraphic
          icon={
            <Avatar
              src='images/avatars/blackwidow.png'
              size='xsmall'
              name={name}
            />
          }
        />
        {name}
        {console.log(this.props)}
      </ListItem>
    );
  }
}

export default Contact;
