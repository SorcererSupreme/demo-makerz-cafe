import React, { Component } from 'react';
import './App.css';
import Routing from './Routing/Routing';
import Header from './Components/Header'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Routing />
      </div>
    )
  }
}

export default App;
