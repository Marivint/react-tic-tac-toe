import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// COMPOSANTS
import Jeu from './jeu.jsx';
import Blink from './blink.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Jeu/>
        <Blink message="Make me blink"/>
      </div>
    );
  }
}

export default App;

