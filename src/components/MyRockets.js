import React from 'react';
import { useSelector } from 'react-redux';

export default function MyRockets() {
  const rockets = useSelector((state) => state.rockets);
  const myRockets = rockets.filter((rocket) => rocket.reserved);
  return (
    <div>
      <h2>My Rockets</h2>
      <div>
        {myRockets.map((rocket) => (
          <div key={rocket.id} className="my-rocket-item">
            {rocket.rocket_name}
          </div>
        ))}
      </div>
    </div>
  );
}
