import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// COMPOSANTS
import Jeu from './jeu.jsx';
import Clignotement from './Clignotement.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        // <Jeu/>
        <Clignotement/>
      </div>
    );
  }
}

export default App;

