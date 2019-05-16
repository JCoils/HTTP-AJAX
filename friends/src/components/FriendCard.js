import React from 'react';

const FriendCard = props => {
  const {name, age, email, stars} = props.friend;
  return (
    <div className="friend-card">
      <h2>{name}</h2>
      <div className="Friend-age">
        age: <em>{age}</em>
      </div>
      <div className="Friend-email">
        email: <strong>{email}</strong>
      </div>
    </div>
  )
};

export default FriendCard;


