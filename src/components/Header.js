import React from 'react';
import './Header.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons'


function Header() {
  return (
    <header className="header">
      <FontAwesomeIcon icon="faBars"/>
    </header>
    
  );
}
export default Header;
