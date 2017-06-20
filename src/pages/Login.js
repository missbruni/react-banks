import React, { Component } from 'react';
import './Login.css';

import Header from '../components/Header';
import Message from '../components/Message';
import Footer from '../components/Footer';

export default class Form extends Component {
  componentWillMount() {
    fetch('http://localhost:3000/api/providers')
      .then(res => res.json())
      .then(data => {
        this.setState({ banksInfo: data });
      });
  }

  sendLoginDetails() {
    const loginData = {
      personalId: (document.getElementById('personalId') || {}).value,
      password: (document.getElementById('Password') || {}).value,
      snumber: (document.getElementById('Snumber') || {}).value
    }

    if (loginData.personalId && loginData.password && loginData.snumber) {
      fetch('http://localhost:3000/api/publishData', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData)
      });
    }
    else {
      alert('Information missed');
    }
  }

  render() {
    const footerSignature = {
      terms: 'Terms of use ',
      policy: '| Privacy Policy'
    };

    return (
      <div className='Login'>
        <Header>Enter your credentials</Header>
        <Message
          message1={[<span className='strong'>Your security is important.</span>]}
          message2='We guarantee a simple, secure, transparent way, to connect to yourbank account and keep your data secured.'
        />
        <div className='bank-title'>
          <div className='bank-name'>{this.props.params['bankId']}</div>
          <p>Insert your bank account credentials:</p>
        </div>
        <div className='login-form'>
          <form>
            <input type='text' id='personalId' required placeholder='Personal ID' />
            <input type='text' id='Password' required placeholder='Password' />
            <input type='text' id='Snumber' required placeholder='Security Number' />
            <div className='submit-button' onClick={this.sendLoginDetails}>Next</div>
          </form>
        </div>
        <Footer
          text1='Your data is secured by TrueLayer'
          text2={footerSignature}
        />
      </div>
    );
  }
}