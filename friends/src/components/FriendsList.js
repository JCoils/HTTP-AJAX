import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import FriendCard from './FriendCard'

export default class FriendList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        friends: []
      };
    }

    componentDidMount() {
        axios
          .get('http://localhost:5000/friends')
          .then(res => {
            console.log(res);
            this.setState({ friends: res.data });
          })
          .catch(err => {
            console.log(err);
            this.setState({ error:err.response.message });
          });
      }

      render() {
        return (
          <div className="friend-list">
            {this.state.friends.map(friend => (
              <FriendDetails key={friend.id} friend={friend} />
            ))}
          </div>
        );
      }
    }

    function FriendDetails({ friend }) {
      return (
        <Link to={`/friends/${friend.id}`}>
          <FriendCard friend={friend} />
        </Link>
      );
    }