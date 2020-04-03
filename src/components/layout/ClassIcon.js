import React from 'react';
import PropType from 'prop-types';

import { Icon } from '@rmwc/icon';

import '@rmwc/icon/icon.css';

function ClassIcon({ iconName }) {
  return (
    <Icon
      icon={{
        icon: { iconName },
        strategy: 'className',
        prefix: 'flat-'
      }}
      className='icon'
    ></Icon>
  );
}
export default ClassIcon;

ClassIcon.propType = {
  iconName: PropType.string.isRequired
};
