import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/New';
import Newsitem from './components/Newsitem';

export default class App extends Component {
 
  render() {
    return (
      <>
      <Navbar />
      <News />
      
      </>
    )
  }
}
