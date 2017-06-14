import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    let props = this.props;

    return (
      <div className='footer-componenet'>
        <div className='footer-container1'>
          <p className='footer-text1'>{props.text1}</p>
        </div>
        <div className='footer-container2'>
          <ul className='footer-text2'>
            <li>{props.text2.first}</li>
            <li>{props.text2.two}</li>
          </ul>
          </div>
      </div>
    )
  }
}

export default Footer;