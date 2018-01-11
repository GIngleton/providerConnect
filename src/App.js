import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import UserInput from './components/UserInput';

import Tasks from './components/Tasks';

class App extends Component {
  render() {
    return (
      <div>
        <UserInput />
        <Tasks />
      </div>
    );
  }
}

export default App;
