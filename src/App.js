import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Message from './components/Message';
import Footer from './components/Footer';

class App extends Component {
  render() {
    var obj = {
      first: 'wahtevf',
      two: 'shbdsb'
    }

    return (
      <div className="App">
        <Header >Choose your Bank</Header>
        <Message
          message1={[<span className='strong'>Appname </span>, 'wants to access your bank data for:']}
          message2='&bull; Identification Personal &bull; Finance Manager'
        />
        <Footer
          text1='dsdasdasada'   
          text2={obj}
        />
      </div>
    );
  }
}

fetch('/api/providers')
  .then(console.log('did a get request!'));

export default App;
