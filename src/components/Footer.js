import React, { Component } from 'react';
import './Footer.css';
import icon from '../images/icon-footer.png'

export default class Footer extends Component {
  render() {
    let props = this.props;

    return (
      <div className='footer-component'>
        <div className='footer-container1'>
          <p className='footer-text1'><img className='footer-icon' alt='icon' src={icon} /></p>
          <p className='footer-text1'>{props.text1}</p>
        </div>
        <div className='footer-container2'>
          <ul className='footer-text2'>
            <li><a href='#'>{props.text2.terms}</a></li>
            <li><a href='#'>{props.text2.policy}</a></li>
          </ul>
          </div>
      </div>
    )
  }
}