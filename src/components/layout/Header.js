import React from 'react';
import PropType from 'prop-types';
import { Link } from 'react-router-dom';

const Header = props => {
  const { brandName } = props;
  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-primary mb-3 container-fluid'>
      <div className='container'>
        <Link to='/' className='navbar-brand'>
          {brandName}
        </Link>
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
