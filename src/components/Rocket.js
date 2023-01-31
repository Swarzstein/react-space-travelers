import React from 'react';

export default function Rocket(props) {
  const rocket = props;
  console.log(rocket);
  return (
    <div>
      <div>
        <img src={rocket.image} alt="rocket" />
      </div>
      <div>
        <h3>{rocket.name}</h3>
        <p>{rocket.description}</p>
        <button type="button">Reserve Rocket</button>
      </div>
    </div>
  );
}
