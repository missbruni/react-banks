import React, { Component } from 'react';
import './Home.css';

import Header from '../components/Header';
import Message from '../components/Message';
import Footer from '../components/Footer';

export default class Home extends Component {
  componentWillMount() {
    fetch('http://localhost:3000/api/providers')
      .then(res => res.json())
      .then(data => {
        this.setState({ banksInfo: data });
      });
  }

  render() {
    const footerSignature = {
      terms: 'Terms of use ',
      policy: '| Privacy Policy'
    };

    const banksInfo = (this.state || {}).banksInfo || [];
    const bankImages = banksInfo.map(bank => {
      let bimg = { backgroundImage: `url(${bank.logoURL})` };
      return <div className='bank-logo-wrapper'>
              <a href={`/login/${bank.connectorId}`} className='bank-logo' alt={`${bank.displayName}-logo`} style={bimg} />
            </div>
    });

    return (
      <div className="home">
        <Header >Choose your Bank</Header>
        <Message
          message1={[<span className='strong'>Appname </span>, 'wants to access your bank data for:']}
          message2='&bull; Identification Personal &bull; Finance Manager'
        />
        <div className="banks-list">
          {bankImages}
        </div>
        <Footer
          text1='Your data is secured by TrueLayer'
          text2={footerSignature}
        />
      </div>
    );
  }
}
