import React, { Component } from 'react';
import Navigation from './Navigation';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;
