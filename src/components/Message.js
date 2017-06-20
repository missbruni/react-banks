import React, { Component } from 'react';
import './Message.css';
import logo from '../images/logo.png'

export default class Message extends Component {
  render() {
    return (
      <div className='message-component'>
        <img className='message-logo' alt='logo' src={logo} />
        <p className='message-header'>{this.props.message1}</p>
        <p className='message-footer'>{this.props.message2}</p>
      </div>
    )
  }
}