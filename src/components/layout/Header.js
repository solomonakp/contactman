import React from 'react';
import PropType from 'prop-types';

const Header = props => {
  const { brandName } = props;
  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-primary mb-3  '>
      <div className='container'>
        <a href='/' className='navbar-brand'>
          {brandName}
        </a>
        <div>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <a href='/' className='nav-link'>
                Home
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  brandName: 'Brand Name'
};

Header.propType = {
  brandName: PropType.string.isRequired
};

export default Header;
