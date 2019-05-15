import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Axios from 'axios';
import FriendList from './components/FriendsList';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }



render() {
  return (
    <div className="App">
      <FriendList />
    </div>
  );
}
}
