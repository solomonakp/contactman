import React, { Component } from 'react';
// class used for typechecking
import PropTypes from 'prop-types';
// consumer
import { Consumer } from '../../context';

// importing rmwc list component
import { ListItem, ListItemGraphic } from '@rmwc/list';
// importing rmwc avatar
import { Avatar } from '@rmwc/avatar';
// material list styles
import '@material/list/dist/mdc.list.css';
// component styles
import '../component-styles/contact.scss';

/*
 extending contact from component which 
 is the parent of all components 
 */
class Contact extends Component {
  // for typechecking the props
  static protoTypes = {
    contact: PropTypes.object.isRequired
  };
  showDetails = (dispatch, id) => {
    // sets current item context state
    dispatch({ type: 'set-item', payload: id });
    // toggling showModal state
    dispatch({ type: 'show-modal' });
  };
  render() {
    const { id, name } = this.props.contact;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <ListItem
              onClick={
                // binding dispatch and id to func
                this.showDetails.bind(this, dispatch, id)
              }
            >
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
            </ListItem>
          );
        }}
      </Consumer>
    );
  }
}

export default Contact;
