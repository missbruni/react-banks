import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className='header-component'>
        <h1 className='header-title'>{this.props.children}</h1>
        <span className='icon'>?</span>
      </div>
    )
  }
}

export default Header;