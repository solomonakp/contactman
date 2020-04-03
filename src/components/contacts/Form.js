import React, { Component } from 'react';

import { Consumer } from '../../context';

import { Avatar } from '@rmwc/avatar';

import ReactPhoneInput from 'react-phone-input-mui';

import { TextField } from '@rmwc/textfield';

import ClassIcon from '../layout/ClassIcon';

import AddNewField from '../../hoc/AddNewField';

import {
  CountryDropdown,
  RegionDropdown
} from 'react-country-region-selector-material-ui-new';

import 'react-phone-input-mui/dist/style.css';
import '@material/textfield/dist/mdc.textfield.css';
import '@material/floating-label/dist/mdc.floating-label.css';
import '@material/notched-outline/dist/mdc.notched-outline.css';
import '@material/line-ripple/dist/mdc.line-ripple.css';
import '@rmwc/avatar/avatar.css';
import '../component-styles/form.scss';

const simpleBox = <div>HOC</div>;

const NewTextField = AddNewField(TextField);

class Form extends Component {
  constructor(props) {
    super();
    this.firstName = React.createRef();
    this.state = {
      country: '',
      region: ''
    };
  }
  onchange = e => {
    console.log(e.target);
  };
  selectCountry(val) {
    this.setState({ country: val });
  }

  selectRegion(val) {
    this.setState({ region: val });
  }
  render() {
    const { iconName } = this.props;

    return (
      <Consumer>
        {values => {
          const { dispatch, showMore } = values;
          const { country, region } = this.state;

          return (
            <React.Fragment>
              <div className='Page'>
                <div className='container'>
                  <h2 className='form-title'>Create Contact</h2>
                  <form>
                    <div className='names-group group'>
                      <div className='avi name-avi'>
                        <Avatar name='chokor solomon' size='large' />
                      </div>
                      <div className='name-inputs'>
                        {showMore ? (
                          <div className='complex'>
                            <TextField
                              className='complex-input'
                              label='Prefix'
                              inputRef={this.prefix}
                            />
                            <TextField
                              className='complex-input'
                              label='First name'
                              inputRef={this.firstName}
                            />
                            <TextField
                              className='complex-input'
                              label='Middle name'
                              inputRef={this.middleName}
                            />
                            <TextField
                              className='complex-input'
                              label='Last name'
                              inputRef={this.lastName}
                            />
                            <TextField
                              className='complex-input'
                              label='Suffix'
                              inputRef={this.suffix}
                            />
                            <TextField
                              className='complex-input'
                              label='Phonetic First'
                              inputRef={this.phoneticFirst}
                            />
                            <TextField
                              className='complex-input'
                              label='Phonetic middle'
                              inputRef={this.phoneticMiddle}
                            />
                            <TextField
                              className='complex-input'
                              label='Phonetic Last'
                              inputRef={this.phoneticLast}
                            />
                            <TextField
                              className='complex-input'
                              label='Nickname'
                              inputRef={this.nickName}
                            />
                            <TextField
                              className='complex-input'
                              label='file as'
                              inputRef={this.fileAs}
                            />
                          </div>
                        ) : (
                          <div className='simple'>
                            <TextField
                              className='simple-input'
                              label='First name'
                              inputRef={this.firstName}
                              onChange={this.onchange}
                            />
                            <TextField
                              className='simple-input'
                              label='Last name'
                              inputRef={this.lastName}
                            />
                          </div>
                        )}
                      </div>
                    </div>

                    <div className='company-group group'>
                      <div className='avi company-avi'>
                        <ClassIcon iconName />
                      </div>
                      <div className='company-inputs'>
                        <TextField
                          className='simple-input'
                          label='Company'
                          inputRef={this.company}
                        />
                        <TextField
                          className='simple-input'
                          label='Job title'
                          inputRef={this.jobTitle}
                        />
                        {showMore ? (
                          <TextField
                            className='complex-input'
                            label='Department'
                            inputRef={this.department}
                          />
                        ) : null}
                      </div>
                    </div>

                    <div className='email-input group'>
                      <div className='avi'>
                        <ClassIcon iconName />
                      </div>
                      <TextField
                        className='complex-input'
                        label='Email'
                        inputRef={this.email}
                        type='email'
                      />
                    </div>
                    <div className='phone-group group'>
                      <div className='avi'>
                        <ClassIcon iconName />
                      </div>
                      <ReactPhoneInput
                        defaultCountry='ng'
                        component={TextField}
                        autoFormat={true}
                      />
                      <div className='add'>
                        <ClassIcon iconName />
                      </div>
                    </div>

                    {showMore ? (
                      <div className='last-section'>
                        {/* address group start  */}
                        <div className='address-group group'>
                          <div className='avi'>
                            <ClassIcon iconName />
                          </div>
                          <CountryDropdown
                            value={country}
                            onChange={val => this.selectCountry(val)}
                            defaultOptionLabel='Select Country'
                          />

                          <TextField
                            className='complex-input'
                            label='Street address'
                            inputRef={this.streetAdd1}
                          />
                          <TextField
                            className='complex-input'
                            label='Street address line 2'
                            inputRef={this.streetAdd2}
                          />
                          <TextField
                            className='complex-input'
                            label='Local government area'
                            inputRef={this.lga}
                          />
                          <TextField
                            className='complex-input'
                            label='City'
                            inputRef={this.city}
                          />
                          <TextField
                            className='complex-input'
                            label='Postal code'
                            inputRef={this.postCode}
                          />

                          <RegionDropdown
                            country={country}
                            value={region}
                            onChange={val => this.selectRegion(val)}
                            disableWhenEmpty={true}
                          />
                          <TextField
                            className='complex-input'
                            label='PO Box'
                            inputRef={this.pBox}
                          />
                          <TextField
                            className='complex-input'
                            label='Label'
                            inputRef={this}
                          />
                          <div className='add'>
                            <ClassIcon iconName />
                          </div>
                        </div>
                        {/* address group end */}
                        {/* birthday group start */}
                        <div className='birthday-group group'>
                          <div className='avi'>
                            <ClassIcon iconName />
                          </div>
                          <TextField
                            className='complex-input'
                            label='Birthday'
                            inputRef={this}
                          />
                        </div>
                        {/* birthday group end */}
                        {/* event group start */}
                        <div className='event-group group'>
                          <div className='avi'>
                            <ClassIcon iconName />
                          </div>
                          <TextField
                            className='complex-input'
                            label='Event'
                            inputRef={this.event}
                          />
                        </div>
                        {/* event group end */}
                        {/* website group start */}
                        <div className='website-group group'>
                          <div className='avi'>
                            <ClassIcon iconName />
                          </div>
                          <TextField
                            className='complex-input'
                            label='Website'
                            inputRef={this.website}
                          />
                        </div>
                        {/*website group end  */}
                        {/* relationship group start */}
                        <div className='relationship-group group'>
                          <div className='avi'>
                            <ClassIcon iconName />
                          </div>
                          <TextField
                            className='complex-input'
                            label='Relationship'
                            inputRef={this.relationship}
                          />
                        </div>
                        {/*relationship group end */}
                        {/* chat group start */}
                        <div className='chat-group group'>
                          <div className='avi'>
                            <ClassIcon iconName />
                          </div>
                          <TextField
                            className='complex-input'
                            label='Chat'
                            inputRef={this.chat}
                          />
                        </div>
                        {/* chat group end */}
                        {/* internet call group start */}
                        <div className='internet-group group'>
                          <div className='avi'>
                            <ClassIcon iconName />
                          </div>
                          <TextField
                            className='complex-input'
                            label='Internet call'
                            inputRef={this.internetCall}
                          />
                        </div>
                        {/* internet call group end */}
                        {/* custom group start*/}
                        <div className='custom-group group'>
                          <div className='avi'>
                            <ClassIcon iconName />
                          </div>
                          <TextField
                            className='complex-input'
                            label='Custom'
                            inputRef={this.custom}
                          />
                        </div>
                        {/* custom group end */}
                      </div>
                    ) : null}
                    {/*  notes-group start */}
                    <div className='notes-group group'>
                      <div className='avi'>
                        <ClassIcon iconName />
                      </div>
                      <TextField
                        className='complex-input'
                        label='Notes'
                        inputRef={this.notes}
                      />
                    </div>
                    {/* note group end */}
                    <NewTextField context={dispatch} />
                  </form>
                </div>
              </div>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Form;

TextField.defaultProps = {
  fullwidth: true
};
